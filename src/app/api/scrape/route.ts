import { NextResponse } from 'next/server';import { scrapeWebsite } from '@/lib/scraper';
export async function POST(req:Request){const {url}=await req.json();if(!url) return NextResponse.json({error:'URL required'},{status:400});return NextResponse.json(await scrapeWebsite(url));}
