import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=general&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
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
