import { NextResponse } from 'next/server';import { generateKnowledgeBase } from '@/lib/ai/generateKnowledgeBase';
export async function POST(req:Request){const {scrapedContent}=await req.json();return NextResponse.json({knowledgeBase:await generateKnowledgeBase(scrapedContent)});}
