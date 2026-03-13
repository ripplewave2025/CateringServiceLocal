# Hamro Catering

Premium catering website and operations workspace for Darjeeling, Sikkim, and Siliguri.

## What is in this repo

- Premium landing page with regional positioning and visual proof
- Quote calculator tied to a structured booking brief
- Client sign-in flow backed by Supabase
- Operations dashboard for booking visibility

## Local setup

1. Install dependencies:
   - `npm install`
2. Add environment variables:
   - copy `.env.example` to `.env.local`
   - set `NEXT_PUBLIC_SUPABASE_URL`
   - set `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Start development:
   - `npm run dev`

## Quality checks

- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Deployment notes

- Vercel must use the repo root `foodcateringservice/foodcateringservice`
- Vercel must define the same `NEXT_PUBLIC_SUPABASE_*` variables used locally
- The booking form and dashboard degrade safely if env vars are missing, but live storage/auth will not work without Supabase

## Core routes

- `/` premium marketing and quote experience
- `/book` booking brief and quote handoff
- `/login` client authentication
- `/dashboard` operations board
