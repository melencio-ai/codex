import { NextResponse } from 'next/server';import { generateVoiceAgentPrompt } from '@/lib/ai/generateVoiceAgentPrompt';
export async function POST(req:Request){return NextResponse.json({systemPrompt:await generateVoiceAgentPrompt(await req.json())});}
