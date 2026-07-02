import { mockTours } from '@/lib/mockData';
import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const tour = mockTours.find((t) => t.id === id);
  if (!tour) {
    return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
  }
  return NextResponse.json(tour);
}
