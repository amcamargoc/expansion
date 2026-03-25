---
name: project-scaffold
description: Initializes new fullstack projects with modern stack. Use when: starting a new project, creating new repositories, initial setup.
---

# Project Scaffold

**Sets up new fullstack projects with best practices.**

## Standard Stack (Default)

| Layer | Technology |
|-------|------------|
| Frontend | Next.js (App Router) |
| Styling | Tailwind CSS |
| Backend | Next.js API Routes |
| Database | PostgreSQL + Prisma |
| Auth | NextAuth.js |
| Deployment | Vercel |

## Quick Start

```bash
# Create Next.js project
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir

# Enter directory
cd my-app

# Install core dependencies
npm install prisma @prisma/client next-auth

# Initialize Prisma
npx prisma init
```

## Project Structure

```
my-app/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── (auth)/       # Auth pages
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/       # React components
│   ├── lib/             # Utilities
│   │   ├── db.ts        # Prisma client
│   │   └── auth.ts      # NextAuth config
│   └── types/           # TypeScript types
├── prisma/
│   └── schema.prisma     # Database schema
├── public/              # Static assets
└── package.json
```

## Essential Files

### prisma/schema.prisma
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### src/lib/db.ts
```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
```

### .env.example
```bash
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"
```

## Setup Commands

```bash
# 1. Initialize git
git init

# 2. Create .env from example
cp .env.example .env

# 3. Push schema to database
npx prisma db push

# 4. Generate Prisma client
npx prisma generate

# 5. Run dev server
npm run dev
```

## Post-Scaffold Checklist

- [ ] Git repo initialized
- [ ] Environment variables configured
- [ ] Database migrated
- [ ] Auth providers configured
- [ ] ESLint/Prettier configured
- [ ] GitHub Actions for CI added
