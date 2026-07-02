import { mockBookings } from '@/lib/mockData';
import { NextResponse } from 'next/server';
import { Booking } from '@/lib/types';

const bookings = [...mockBookings];

export async function GET() {
  return NextResponse.json(bookings);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newBooking: Booking = {
    id: `b${Date.now()}`,
    tourId: body.tourId,
    userId: body.userId || `u${Date.now()}`,
    participants: body.participants,
    totalPrice: body.totalPrice,
    bookingDate: new Date().toISOString().split('T')[0],
    status: 'confirmed',
    customerName: body.customerName,
    customerEmail: body.customerEmail,
    customerPhone: body.customerPhone,
  };
  bookings.push(newBooking);
  return NextResponse.json(newBooking, { status: 201 });
}
