# GHL Voice Agent Builder

Production-structured Next.js 14 app to build GoHighLevel/LeadConnector voice agent configs from a business URL.

## Features
- Supabase auth + RLS-ready schema.
- Agent lifecycle: draft, ready, published.
- Scraping endpoint (`/api/scrape`) with fallback for manual entry.
- OpenAI generation for knowledge base, FAQs, and voice system prompt.
- GHL abstraction service (`src/lib/ghl/ghlVoiceAgentService.ts`) with TODO stubs for official voice endpoints.
- Webhook automation support for Make.com, n8n, or custom backend.
- Vercel-ready app router project.

## Setup
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill keys.
3. Run SQL in `supabase/schema.sql`.
4. `npm run dev`

## API Routes
- `POST /api/scrape`
- `POST /api/ai/knowledge-base`
- `POST /api/ai/faqs`
- `POST /api/ai/prompt`
- `POST /api/ghl/publish`

## Sample Voice Agent Prompt
See `src/lib/samples/sampleVoicePrompt.txt`.

## Sample Webhook Payload
See `src/lib/samples/sampleWebhookPayload.json`.

## Notes
- TODOs are intentionally left where GHL voice endpoints are currently unavailable.
- Never expose secrets in frontend; keep all sensitive calls in API routes/server.
