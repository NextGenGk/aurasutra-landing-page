import { neon } from '@neondatabase/serverless';

const url = process.env.DATABASE_URL;

if (!url || url.includes('your-neon') || url.includes('your_neon')) {
  console.warn('DATABASE_URL is not set or still contains a placeholder. Please check your .env.local file.');
}

// Ensure neon() only receives a valid string or it will crash Next.js initialiation
export const sql = (url && !url.includes('your-neon') && !url.includes('your_neon')) 
  ? neon(url) 
  : async () => { throw new Error('Database connection string is missing or invalid. Please add your Neon URL to .env.local and RESTART the server.'); };
