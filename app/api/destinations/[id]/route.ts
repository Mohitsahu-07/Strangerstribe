import { connectToDatabase, serializeDoc } from '@/lib/db';
import { DbTour } from '@/lib/dbModels';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectToDatabase();
    const tour = await DbTour.findOne({ _id: id });
    
    if (!tour) {
      return new NextResponse('Tour not found', { status: 404 });
    }
    
    return NextResponse.json(serializeDoc(tour));
  } catch (error: any) {
    console.error('API Error: GET destination by ID', error);
    return new NextResponse(error.message || 'Database error', { status: 500 });
  }
}
