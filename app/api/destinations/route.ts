import { connectToDatabase, serializeDoc } from '@/lib/db';
import { DbTour } from '@/lib/dbModels';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    const tours = await DbTour.find({});
    const serializedTours = tours.map(serializeDoc);
    return NextResponse.json(serializedTours);
  } catch (error: any) {
    console.error('API Error: GET destinations', error);
    return new NextResponse(error.message || 'Database error', { status: 500 });
  }
}
