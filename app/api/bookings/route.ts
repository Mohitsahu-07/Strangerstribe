import { connectToDatabase, serializeDoc } from '@/lib/db';
import { DbBooking, DbTour } from '@/lib/dbModels';
import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { appendToGoogleSheet } from '@/lib/googleSheets';

export async function GET(request: Request) {
  try {
    const { userId } = await auth();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email')?.toLowerCase().trim();
    const phone = searchParams.get('phone')?.replace(/[\s-]/g, '');
    const all = searchParams.get('all') === 'true';

    await connectToDatabase();

    if (all) {
      const bookings = await DbBooking.find({});
      return NextResponse.json(bookings.map(serializeDoc));
    }

    if (userId) {
      const query: any = { userId };
      const bookings = await DbBooking.find(query);
      return NextResponse.json(bookings.map(serializeDoc));
    }

    if (email || phone) {
      const conditions: any[] = [];
      if (email) {
        conditions.push({ customerEmail: new RegExp(`^${email}$`, 'i') });
      }
      if (phone) {
        conditions.push({ customerPhone: phone });
      }

      if (conditions.length === 0) return NextResponse.json([]);

      const bookings = await DbBooking.find({ $or: conditions });
      return NextResponse.json(bookings.map(serializeDoc));
    }

    return NextResponse.json([]);
  } catch (error: any) {
    console.error('API Error: GET bookings', error);
    return new NextResponse(error.message || 'Database error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    const body = await request.json();

    await connectToDatabase();

    const createdBooking = await DbBooking.create({
      tourId: body.tourId,
      userId: userId || 'guest',
      participants: body.participants,
      totalPrice: body.totalPrice,
      bookingDate: new Date().toISOString().split('T')[0],
      status: 'confirmed',
      customerName: body.customerName,
      customerEmail: body.customerEmail,
      customerPhone: body.customerPhone,
      selectedPackage: body.selectedPackage,
    });

    try {
      const tour = await DbTour.findById(body.tourId);
      const tourTitle = tour ? tour.title : body.tourId;
      const tripDetail = body.selectedPackage ? `${tourTitle} (${body.selectedPackage})` : tourTitle;

      appendToGoogleSheet({
        name: body.customerName,
        phone: body.customerPhone,
        tripDetail: tripDetail,
        email: body.customerEmail,
        date: new Date().toISOString().split('T')[0],
        groupSize: String(body.participants),
        totalPrice: `₹${body.totalPrice}`,
      }).catch(err => console.error('Failed to append booking to Google Sheet:', err));
    } catch (sheetErr) {
      console.error('Failed to resolve tour for Google Sheet insertion:', sheetErr);
    }

    return NextResponse.json(serializeDoc(createdBooking), { status: 201 });
  } catch (error: any) {
    console.error('API Error: POST bookings', error);
    return new NextResponse(error.message || 'Database error', { status: 500 });
  }
}
