import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

async function init() {
  const url = process.env.DATABASE_URL;
  if (!url || url.includes('your-neon-db-url-here') || url.includes('your_neon_db_url_here')) {
    console.error('Error: DATABASE_URL is not configured properly in .env.local');
    console.log('\nTo set up your database:');
    console.log('1. Go to https://neon.tech and create a free project.');
    console.log('2. Copy the "Connection String" (starts with postgresql://).');
    console.log('3. Paste it into your d:/aurasutra-landing-v1/.env.local file.');
    console.log('\nThen run: npm run db:init\n');
    process.exit(1);
  }

  const sql = neon(url);

  console.log('Initializing database...');

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS business_inquiries (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Success: "business_inquiries" table is ready!');
  } catch (err) {
    console.error('Error initializing database:', err);
    process.exit(1);
  }
}

init();
