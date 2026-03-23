import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    if (!email || !name) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Initialize table if not exists (In production, usually handled by migrations)
    await sql`
      CREATE TABLE IF NOT EXISTS business_inquiries (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Insert into database
    await sql`
      INSERT INTO business_inquiries (name, email)
      VALUES (${name}, ${email})
      ON CONFLICT (email) DO NOTHING
    `;

    return NextResponse.json({ success: true, message: 'Wishlist entry saved' });
  } catch (error) {
    console.error('Wishlist API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
