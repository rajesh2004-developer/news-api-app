import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const query = req.nextUrl.searchParams.get('query');
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${
        encodeURIComponent(query) || 'bitcoin'
      }&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
    );
    return NextResponse.json(res.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      error.response?.data || { message: 'Internal Server Error' },
      { status: error.response?.status || 500 }
    );
  }
}
