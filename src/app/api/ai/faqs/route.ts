import { NextResponse } from 'next/server';import { generateFaqs } from '@/lib/ai/generateFaqs';
export async function POST(req:Request){const {knowledgeBase}=await req.json();return NextResponse.json({faqs:await generateFaqs(knowledgeBase)});}
