import { NextResponse } from 'next/server';
import { appendToGoogleSheet } from '@/lib/googleSheets';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const tripDetail = body.destination
      ? `Enquiry: ${body.destination}`
      : 'General Enquiry';

    appendToGoogleSheet({
      name: body.fullName,
      phone: body.phone,
      tripDetail: tripDetail,
      email: body.email,
      date: body.travelDate || new Date().toISOString().split('T')[0],
      groupSize: body.groupSize ? String(body.groupSize) : '1',
      totalPrice: body.budget || 'N/A',
    }).then(res => {
      if (!res.success) {
        console.error('Google Sheets append failed:', res.reason || JSON.stringify(res.result));
      }
    }).catch(err => console.error('Failed to append enquiry to Google Sheet:', err));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('API Error: POST enquiry', error);
    return new NextResponse(error.message || 'Server error', { status: 500 });
  }
}
