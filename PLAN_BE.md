# Backend Plan — spf.io Pricing Calculator

## Overview

Separate backend repo (e.g. `spfio-api`) deployed on Vercel, using Supabase as the database. This frontend will consume REST API endpoints.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Runtime | Node.js |
| Framework | NestJS |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth (email/password) |
| ORM / Query | Supabase JS client (`@supabase/supabase-js`) |
| Validation | class-validator + class-transformer (NestJS-native) |
| Deploy | Vercel (serverless functions via `@nestjs/platform-serverless`) |

---

## Phase 1 — API Endpoints

### Auth (`/api/auth`)

| Method | Path | Description |
|---|---|---|
| POST | `/api/auth/register` | Create admin account |
| POST | `/api/auth/login` | Login, returns JWT / session |
| POST | `/api/auth/logout` | Destroy session |
| GET | `/api/auth/me` | Get current user |

**Frontend integration:**
- `/admin/login` → `POST /api/auth/login`
- Admin layout checks session via `GET /api/auth/me`
- Store token in `localStorage` or `httpOnly` cookie

### Service Types (`/api/service-types`)

| Method | Path | Description |
|---|---|---|
| GET | `/api/service-types` | List all service types |
| POST | `/api/service-types` | Create a service type |
| PUT | `/api/service-types/:id` | Update a service type |
| DELETE | `/api/service-types/:id` | Delete a service type |

**Frontend integration:**
- Pricing calculator: `GET /api/service-types` on mount (replace current localStorage)
- `/admin/service-types`: full CRUD via table

### Add-ons (`/api/addons`)

| Method | Path | Description |
|---|---|---|
| GET | `/api/addons` | List all add-ons |
| POST | `/api/addons` | Create an add-on |
| PUT | `/api/addons/:id` | Update an add-on |
| DELETE | `/api/addons/:id` | Delete an add-on |

**Frontend integration:**
- Pricing calculator: `GET /api/addons` on mount (replace current localStorage)
- `/admin/add-ons`: full CRUD via table

### Submissions / Quote Requests (`/api/submissions`)

| Method | Path | Description |
|---|---|---|
| POST | `/api/submissions` | Submit a quote request (from pricing calculator) |
| GET | `/api/submissions` | List all submissions (admin only) |
| GET | `/api/submissions/:id` | Get single submission (admin only) |
| DELETE | `/api/submissions/:id` | Delete submission (admin only) |

**Frontend integration:**
- Pricing calculator "Request a Quote" modal → `POST /api/submissions`
- `/admin` dashboard → `GET /api/submissions`

### Contact / Request-a-Quote (`/api/contact`)

| Method | Path | Description |
|---|---|---|
| POST | `/api/contact` | Submit the request-a-quote form |

**Frontend integration:**
- `/request-a-quote` form → `POST /api/contact`

---

## Database Schema (Supabase)

```sql
-- Admin users (managed by Supabase Auth, but store profile)
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Service types
CREATE TABLE service_types (
  id TEXT PRIMARY KEY,  -- e.g. "live-events", "content"
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  rate INTEGER NOT NULL DEFAULT 0,
  unit TEXT NOT NULL DEFAULT 'hour',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Add-ons
CREATE TABLE addons (
  id TEXT PRIMARY KEY,  -- e.g. "text-to-speech"
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  price INTEGER NOT NULL DEFAULT 0,
  unit TEXT NOT NULL DEFAULT 'event',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Quote submissions (from pricing calculator)
CREATE TABLE submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type TEXT REFERENCES service_types(id),
  service_name TEXT NOT NULL,
  hours INTEGER NOT NULL,
  languages INTEGER NOT NULL,
  attendees INTEGER NOT NULL,
  premium_languages BOOLEAN DEFAULT false,
  selected_addons JSONB DEFAULT '[]',
  total_estimate INTEGER NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT DEFAULT '',
  message TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Contact form submissions (from /request-a-quote)
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT DEFAULT '',
  service TEXT DEFAULT '',
  message TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Seed data
INSERT INTO service_types (id, name, description, rate, unit) VALUES
  ('live-events', 'Live Events', 'Real-time captions, translations & streaming', 150, 'hour'),
  ('content', 'Content Translation', 'Audio, video, slides & documents', 100, 'hour'),
  ('conversations', 'Conversations', 'Multilingual meetings & discussions', 75, 'hour'),
  ('multiple', 'Multiple Services', 'Combination of services for your needs', 0, 'hour');

INSERT INTO addons (id, name, description, price, unit) VALUES
  ('text-to-speech', 'Text-to-Speech', 'AI voice output for translations', 50, 'event'),
  ('interpreter', 'Professional Interpreter', 'Human interpreter for live supervision', 200, 'hour'),
  ('ai-customization', 'AI Customization', 'Train AI on your terminology & style', 500, 'project'),
  ('support', 'On-Call Support', 'Dedicated technician during your event', 150, 'event'),
  ('polls', 'Multilingual Polls', 'Interactive polls in multiple languages', 25, 'event');
```

---

## Environment Variables

### Frontend (`spfio-pricing-calculator/.env.local`)

```env
# API base URL (Vercel deployment URL of backend)
NEXT_PUBLIC_API_URL=http://localhost:3001

# Supabase (only needed if using Supabase client directly from frontend)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Backend (`spfio-api/.env`)

```env
# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# App
PORT=3001
NODE_ENV=development
```

---

## Frontend Changes Needed (Phase 1)

### Replace localStorage data layer with API calls

| File | Change |
|---|---|
| `src/data/service-types.ts` | Replace `getServiceTypes()` with `fetch('/api/service-types')`, add create/update/delete using fetch |
| `src/data/addons.ts` | Same pattern as service-types |
| `src/data/submissions.ts` | Replace `addSubmission()` with `POST /api/submissions`, replace `getSubmissions()` with `GET /api/submissions` |

### Auth

| File | Change |
|---|---|
| `src/app/admin/login/page.tsx` | Call `POST /api/auth/login`, store token |
| `src/app/admin/layout.tsx` | Check auth via `GET /api/auth/me` with stored token |

### Contact form

| File | Change |
|---|---|
| `src/app/request-a-quote/page.tsx` | Add `POST /api/contact` on form submit |

### Config

| File | Change |
|---|---|
| Create `src/lib/api.ts` | Centralized fetch wrapper with auth header |

---

## Folder Structure (Backend)

```
spfio-api/
├── src/
│   ├── main.ts                 # NestJS bootstrap (Vercel serverless entry)
│   ├── app.module.ts           # Root module
│   ├── common/
│   │   ├── guards/
│   │   │   └── auth.guard.ts   # JWT auth guard
│   │   └── decorators/
│   │       └── current-user.decorator.ts
│   ├── database/
│   │   ├── database.module.ts
│   │   └── supabase.service.ts # Supabase client provider
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts  # POST /api/auth/login, etc.
│   │   ├── auth.service.ts
│   │   └── dto/
│   ├── service-types/
│   │   ├── service-types.module.ts
│   │   ├── service-types.controller.ts  # CRUD /api/service-types
│   │   ├── service-types.service.ts
│   │   └── dto/
│   ├── addons/
│   │   ├── addons.module.ts
│   │   ├── addons.controller.ts  # CRUD /api/addons
│   │   ├── addons.service.ts
│   │   └── dto/
│   ├── submissions/
│   │   ├── submissions.module.ts
│   │   ├── submissions.controller.ts  # CRUD /api/submissions
│   │   ├── submissions.service.ts
│   │   └── dto/
│   └── contact/
│       ├── contact.module.ts
│       ├── contact.controller.ts  # POST /api/contact
│       ├── contact.service.ts
│       └── dto/
├── sql/
│   └── schema.sql              # Full schema + seed
├── .env
├── .env.example
├── package.json
├── tsconfig.json
├── nest-cli.json
└── vercel.json
```

---

## Deployment Step by Step

### 1. Supabase — Project & Database

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project (name: `spfio-api`, pick a region close to you)
3. Wait for the database to provision (~2 minutes)
4. Go to **SQL Editor** in the Supabase dashboard
5. Paste the entire schema from above (table creation + seed data) and run it
6. Go to **Project Settings > API** and copy:
   - `Project URL` → this is your `SUPABASE_URL`
   - `Project API Keys > service_role key` → this is your `SUPABASE_SERVICE_ROLE_KEY`

### 2. Backend — Local Development

```bash
# Clone / create the backend repo
git clone <your-backend-repo> spfio-api
cd spfio-api

# Install NestJS CLI globally (if not already)
npm i -g @nestjs/cli

# Generate the NestJS project
nest new . --package-manager npm --skip-git

# Install dependencies
npm install @nestjs/platform-express @nestjs/config
npm install @supabase/supabase-js
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install class-validator class-transformer

# Create .env (copy from .env.example)
cp .env.example .env
```

Edit `.env` with your Supabase credentials and a random JWT secret:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
JWT_SECRET=<run: openssl rand -hex 32>
JWT_EXPIRES_IN=7d
PORT=3001
NODE_ENV=development
```

```bash
# Run locally
npm run start:dev
```

The API will be at `http://localhost:3001/api/...`

### 3. Backend — Deploy to Vercel

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/`
4. Add environment variables in Vercel dashboard (same as `.env`):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `JWT_SECRET`
   - `JWT_EXPIRES_IN`
   - `NODE_ENV` = `production`
5. Deploy — Vercel will detect the NestJS serverless output and serve it

**Vercel serverless adapter** — add `@nestjs/platform-express` or use `@nestjs/platform-serverless` for Vercel:

```bash
npm install @nestjs/platform-serverless
```

Update `main.ts` to export a serverless handler instead of listening:

```typescript
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@vendia/serverless-express';
import { AppModule } from './app.module';
import * as express from 'express';

let cachedServer;

export const handler = async (event, context) => {
  if (!cachedServer) {
    const expressApp = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    app.setGlobalPrefix('api');
    await app.init();
    cachedServer = serverlessExpress({ app: expressApp });
  }
  return cachedServer(event, context);
};
```

### 4. Connect Frontend

After deployment, update `NEXT_PUBLIC_API_URL` in the frontend's `.env.local`:

```env
# Local development
NEXT_PUBLIC_API_URL=http://localhost:3001

# After Vercel deploy, change to your production URL
# NEXT_PUBLIC_API_URL=https://spfio-api.vercel.app
```

### 5. Supabase CLI (optional, for local DB dev)

```bash
# Install Supabase CLI
brew install supabase/tap/supabase

# Init in backend repo
supabase init

# Start local Supabase (runs Postgres in Docker)
supabase start

# Link with your remote project
supabase link --project-ref <your-project-ref>

# Push schema changes
supabase db push
```

### Quick Commands Reference

```bash
# Backend
npm run start:dev        # Local dev on :3001
npm run build            # Production build
npm run test             # Run tests

# Database (Supabase CLI)
supabase start           # Start local Supabase
supabase db push         # Push schema changes
supabase db pull         # Pull remote schema
```
