import mongoose from 'mongoose';
import { DbTour } from './dbModels';
import { mockTours } from './mockData';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  // Run dynamic seed check
  try {
    await seedToursIfEmpty();
  } catch (err) {
    console.error('Database seeding warning:', err);
  }

  return cached.conn;
}

export async function seedToursIfEmpty() {
  for (const t of mockTours) {
    const tourDoc = {
      _id: t.id,
      ...t,
    };
    await DbTour.updateOne(
      { _id: t.id },
      { $set: tourDoc },
      { upsert: true }
    );
    console.log(`Synced tour: ${t.title} (${t.id})`);
  }
}

export function serializeDoc(doc: any) {
  if (!doc) return null;
  const obj = doc.toObject ? doc.toObject() : doc;
  obj.id = obj._id.toString();
  delete obj._id;
  delete obj.__v;
  return obj;
}
