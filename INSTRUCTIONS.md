# START.md - Echo

> Secure Conversations Matter

**Problem being solved:** Lack of privacy and security in messaging apps

**Generated on:** 2026-02-07

---

## 🤖 Instructions for Claude Code

This file is a complete execution guide. Work through it from top to bottom:

1. **Read each section completely** before starting implementation
2. **Check off each checkbox** (`- [x]`) when the task is done
3. **Skip nothing** - every task is important
4. **On errors:** Fix them immediately before continuing
5. **At the end:** Run all tests and ensure `npm run build` succeeds

---

## Important Notes

### ⚠️ CRITICAL - Follow these rules exactly:

1. **Follow the order** - Work through phases in sequence, skip nothing
2. **Create folders first** - Before creating a file, ensure the folder exists
3. **Test after each phase** - Run `npm run dev` and check for errors
4. **Stop on errors** - Fix errors immediately before continuing
5. **Check imports** - Ensure all imported modules exist

### Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Database:** Supabase (Postgres + Auth + RLS)
- **Styling:** Tailwind CSS + shadcn/ui Patterns
- **Language:** TypeScript (strict mode)
- **Validation:** Zod

### Conventions
- Files: `kebab-case.ts` for utils, `PascalCase.tsx` for components
- DB tables: `snake_case` plural (e.g., `user_profiles`)
- API Routes: `/api/[entity]s` for collections
- Components: Server Components by default, 'use client' only when needed

### Create folder structure (FIRST)

Before starting Phase 1, create all necessary folders:

```bash
mkdir -p app/(auth)/login app/(auth)/signup
mkdir -p app/(app)/dashboard app/(app)/account
mkdir -p app/api/auth
mkdir -p components/ui components/layout
mkdir -p lib/supabase lib/schemas lib/api
mkdir -p hooks types
```

---

## App Overview

### Echo

**Tagline:** Secure Conversations Matter

**The Problem:**
Lack of privacy and security in messaging apps

**The Solution:**
Echo is a premium, privacy-focused encrypted messaging app designed for high-stakes professionals and individuals who require absolute security. It offers end-to-end encryption, secure messaging, voice calls, video calls, and groups, all backed by a robust server infrastructure. Echo's unique selling point is its advanced security audit feature, which allows users to monitor and control their data's security.

**Target Audience:**
High-stakes professionals and privacy-conscious individuals

**Persona:**
{"age":"18-60","interests":"Privacy, security, and technology","pain_points":"Concerns about data privacy and security in messaging apps","goals":"To have secure and private conversations"}

**Must Have (MVP):**
- auth
- end_to_end_encryption
- messaging
- voice_calls
- video_calls
- groups
- donations
- private_key_management
- signal_protocol

**Should Have:**
- push_notifications
- file_sharing

**Nice to Have:**
- (none specified)

> ⭐ = User-defined feature

**Unique Selling Points:**
- End-to-end encryption for all messages and calls
- Open-source and transparent code
- No data collection or advertising
- Donation-based monetization model

**Monetization:** Donations and optional premium support services

---

### Important for Implementation

This app should solve the problem "Lack of privacy and security in messaging apps". All features and UI decisions should be aligned to optimally solve this problem for the target audience "High-stakes professionals and privacy-conscious individuals".

**Development Priority:**
1. First implement all "Must Have" features for MVP
2. Then add "Should Have" features
3. Finally add "Nice to Have" features if time permits

---

## Architecture Overview

### Data Model

**Entities and their relationships:**

#### Build
Represents a build of the application
Fields: id, created_at, updated_at, user_id, version


#### Signal
Represents a signal, such as a message or call
Fields: id, created_at, updated_at, user_id, type


#### Private
Represents a private conversation or group
Fields: id, created_at, updated_at, user_id, type


#### Privacy
Represents a user's privacy settings
Fields: id, created_at, updated_at, user_id


#### Key
Represents a cryptographic key
Fields: id, created_at, updated_at, user_id, type


#### End
Represents the end of a conversation or call
Fields: id, created_at, updated_at, user_id, type


#### Messaging
Represents a messaging conversation
Fields: id, created_at, updated_at, user_id, type


#### Voice
Represents a voice call
Fields: id, created_at, updated_at, user_id, type




### User Flows


**User Onboarding** (User)
The user onboarding flow
1. The user downloads and installs the app
2. The user creates an account
3. The user verifies their email address
✓ Success: The user has successfully created an account and verified their email address


**Private Messaging** (User)
The private messaging flow
1. The user initiates a private conversation
2. The user sends a message
3. The user receives a message
✓ Success: The user has successfully sent and received messages

### Screens/Pages

- **Landing Page** (`/`): The landing page of the app
- **Registration Page** (`/register`): The registration page of the app

### Folder Structure
```
├── app/
│   ├── (auth)/              # Auth Pages (login, signup)
│   ├── (app)/               # Protected App Pages
│   │   ├── dashboard/
│   │   ├── landing page/  # The landing page of the app
│   │   ├── register/  # The registration page of the app
│   │   └── account/
│   ├── api/                 # API Routes
│   │   ├── auth/
│   │   ├── builds/
│   │   ├── signals/
│   │   ├── privates/
│   │   ├── privacys/
│   │   ├── keys/
│   │   ├── ends/
│   │   ├── messagings/
│   │   ├── voices/
│   │   └── upload/
│   ├── layout.tsx           # Root Layout
│   ├── page.tsx             # Landing Page
│   └── globals.css
├── components/
│   ├── ui/                  # Base UI Components (Button, Input, Card, etc.)
│   ├── layout/              # Layout Components (Header, Footer, Nav)
│   ├── forms/               # Form Components
│   └── [entity]/            # Entity-specific Components
├── hooks/
│   ├── useAuth.ts
│   ├── useToast.ts
│   └── use[Entity].ts
├── lib/
│   ├── supabase/
│   │   ├── client.ts        # Browser Client
│   │   └── server.ts        # Server Client
│   ├── api/
│   │   ├── errors.ts        # API Error Handling
│   │   └── response.ts      # Response Helpers
│   ├── schemas/             # Zod Schemas
│   ├── utils/               # Utility Functions
│   └── constants.ts         # App Constants
├── types/
│   ├── index.ts             # Shared Types
│   └── [entity].ts          # Entity Types
├── middleware.ts            # Auth Middleware
└── i18n/ (optional)         # Internationalization
```

### Konventionen

| Bereich | Konvention |
|---------|------------|
| Fileen | `kebab-case.ts` for Utils, `PascalCase.tsx` for Components |
| DB Tablen | `snake_case` plural (z.B. `user_profiles`) |
| API Routes | `/api/[entity]s` for Collections |
| Types | `PascalCase` Interface Names |
| Zod Schemas | `PascalCaseSchema` (z.B. `CreateTaskSchema`) |
| Hooks | `use[Name]` (z.B. `useTasks`) |
| Constants | `SCREAMING_SNAKE_CASE` |

### Data Flow
```
User Action
    ↓
Client Component (Form/Button)
    ↓
API Route (/api/[entity]s)
    ↓
Zod Validation
    ↓
Supabase Query (mit RLS)
    ↓
Response → SWR Cache Update → UI Update
```

---

## Phase 1: Project Setup

### 1.1 Next.js Projekt initialisieren
- [ ] Create das Projekt:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

### 1.2 Dependencies installieren
- [ ] Core Dependencies:
```bash
npm install @supabase/ssr @supabase/supabase-js zod swr clsx tailwind-merge lucide-react
```

- [ ] UI Dependencies:
```bash
npm install @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-toast @radix-ui/react-select @radix-ui/react-checkbox @radix-ui/react-tabs class-variance-authority
```

- [ ] Form Dependencies:
```bash
npm install react-hook-form @hookform/resolvers
```

- [ ] Date/Time (falls needed):
```bash
npm install date-fns
```

- [ ] Dev Dependencies:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react jsdom
```


### 1.3 Basis-Fileen create

- [ ] Create `lib/utils.ts`:
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] Create `.env.local` (NICHT committen!):
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

- [ ] Create `.env.example`:
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### 1.4 Supabase Clients create (IMPORTANT - vor allen anderen Fileen!)

- [ ] Create `lib/supabase/client.ts`:
```typescript
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```

- [ ] Create `lib/supabase/server.ts`:
```typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from Server Component - ignore
          }
        },
      },
    }
  );
}
```

### ✅ CHECKPOINT Phase 1

Bevor du weitermachst, check:
```bash
npm run dev
```
- [ ] Server startet ohne Error auf http://localhost:3000
- [ ] Keine TypeScript Errors in der Konsole

**Bei Errorn:** Check ob alle Dependencies installiert sind (`npm install`)

---

## Phase 2: Supabase Database Setup

> **Note:** Die Supabase Clients wurden bereits in Phase 1 erstellt.

### 2.1 Database Schema

**IMPORTANT:** Dieses SQL muss manuell im Supabase Dashboard ausguided werden:
1. Open dein Supabase Projekt
2. Gehe zu SQL Editor
3. Kopiere das SQL below und run es aus

- [ ] Run folgendes SQL im Supabase Dashboard aus:

```sql
-- ============================================
-- PROFILES (for User-Metadaten)
-- ============================================
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE USING (auth.uid() = id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (new.id);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- BUILDS
CREATE TABLE builds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_id UUID NOT NULL,
  version TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX builds_user_id_idx ON builds(user_id);
CREATE INDEX builds_created_at_idx ON builds(created_at DESC);

-- RLS
ALTER TABLE builds ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own builds"
  ON builds
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- SIGNALS
CREATE TABLE signals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_id UUID NOT NULL,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX signals_user_id_idx ON signals(user_id);
CREATE INDEX signals_created_at_idx ON signals(created_at DESC);

-- RLS
ALTER TABLE signals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own signals"
  ON signals
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- PRIVATES
CREATE TABLE privates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_id UUID NOT NULL,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX privates_user_id_idx ON privates(user_id);
CREATE INDEX privates_created_at_idx ON privates(created_at DESC);

-- RLS
ALTER TABLE privates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own privates"
  ON privates
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- PRIVACYS
CREATE TABLE privacys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX privacys_user_id_idx ON privacys(user_id);
CREATE INDEX privacys_created_at_idx ON privacys(created_at DESC);

-- RLS
ALTER TABLE privacys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own privacys"
  ON privacys
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- KEYS
CREATE TABLE keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_id UUID NOT NULL,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX keys_user_id_idx ON keys(user_id);
CREATE INDEX keys_created_at_idx ON keys(created_at DESC);

-- RLS
ALTER TABLE keys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own keys"
  ON keys
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- ENDS
CREATE TABLE ends (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_id UUID NOT NULL,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX ends_user_id_idx ON ends(user_id);
CREATE INDEX ends_created_at_idx ON ends(created_at DESC);

-- RLS
ALTER TABLE ends ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own ends"
  ON ends
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- MESSAGINGS
CREATE TABLE messagings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_id UUID NOT NULL,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX messagings_user_id_idx ON messagings(user_id);
CREATE INDEX messagings_created_at_idx ON messagings(created_at DESC);

-- RLS
ALTER TABLE messagings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own messagings"
  ON messagings
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- VOICES
CREATE TABLE voices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_id UUID NOT NULL,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX voices_user_id_idx ON voices(user_id);
CREATE INDEX voices_created_at_idx ON voices(created_at DESC);

-- RLS
ALTER TABLE voices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own voices"
  ON voices
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- UPDATED_AT TRIGGER
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at_builds
  BEFORE UPDATE ON builds
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_signals
  BEFORE UPDATE ON signals
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_privates
  BEFORE UPDATE ON privates
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_privacys
  BEFORE UPDATE ON privacys
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_keys
  BEFORE UPDATE ON keys
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_ends
  BEFORE UPDATE ON ends
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_messagings
  BEFORE UPDATE ON messagings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER set_updated_at_voices
  BEFORE UPDATE ON voices
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
```



### ✅ CHECKPOINT Phase 2

- [ ] SQL im Supabase Dashboard ausguided (SQL Editor)
- [ ] Alle Tablen in Database > Tables sichtbar
- [ ] RLS ist aktiv (Schloss-Symbol bei jeder Table)

**Bei Errorn:** Check SQL Syntax, run Statements individually aus

---

## Phase 3: Authentication

### 3.1 Middleware create

- [ ] Create `middleware.ts` im Root:
```typescript
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Protected routes
  const protectedPaths = ["/dashboard", "/account", "/settings"];
  const isProtected = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Redirect logged in users from auth pages
  const authPaths = ["/login", "/signup"];
  const isAuthPage = authPaths.includes(request.nextUrl.pathname);

  if (isAuthPage && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
```

### 3.2 Auth Layout

- [ ] Create `app/(auth)/layout.tsx`:
```typescript
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        {children}
      </div>
    </div>
  );
}
```

### 3.3 Login Page (COMPLETE)

- [ ] Create `app/(auth)/login/page.tsx`:
```typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login fehlgeschlagen');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Anmelden</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Sign in to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-Mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md bg-background"
            placeholder="name@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Passwort
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md bg-background"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? 'Anmelden...' : 'Anmelden'}
        </button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Noch kein Konto?{' '}
        <Link href="/signup" className="text-primary hover:underline">
          Registrieren
        </Link>
      </p>
    </div>
  );
}
```

### 3.4 Signup Page (COMPLETE)

- [ ] Create `app/(auth)/signup/page.tsx`:
```typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError('Passwort muss mindestens 6 characters haben');
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registrierung fehlgeschlagen');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Konto create</h1>
        <p className="text-muted-foreground mt-2">
          Create ein neues Konto um loszulegen.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-Mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md bg-background"
            placeholder="name@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Passwort
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full px-3 py-2 border rounded-md bg-background"
            placeholder="Mindestens 6 characters"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? 'Registrieren...' : 'Registrieren'}
        </button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Bereits ein Konto?{' '}
        <Link href="/login" className="text-primary hover:underline">
          Anmelden
        </Link>
      </p>
    </div>
  );
}
```

### 3.5 Auth Callback Route (REQUIRED)

- [ ] Create `app/auth/callback/route.ts`:
```typescript
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/dashboard';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Return to login with error
  return NextResponse.redirect(`${origin}/login?error=auth_callback_error`);
}
```

**Wichtig:** Diese Route ist für OAuth, Magic Links und Email-Bestätigung erforderlich.

### ✅ CHECKPOINT Phase 3

- [ ] `npm run dev` runs
- [ ] /login zeigt Login-Formular
- [ ] /signup zeigt Signup-Formular
- [ ] /auth/callback Route existiert
- [ ] Test: Registriere einen neuen User → Redirect zu /dashboard

**Bei Errorn:** Check Supabase URL/Key in .env.local, check ob Supabase Auth aktiviert ist



---

## Phase 4: Core Entities

### Dashboard Page (COMPLETE)

- [ ] Create `app/(app)/dashboard/page.tsx`:
```typescript
import { createClient } from '@/lib/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return null; // Layout handles redirect
  }

  // Load Counts for alle Entities
  const { count: buildCount } = await supabase
    .from('builds')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  const { count: signalCount } = await supabase
    .from('signals')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  const { count: privateCount } = await supabase
    .from('privates')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  const { count: privacyCount } = await supabase
    .from('privacys')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  const { count: keyCount } = await supabase
    .from('keys')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  const { count: endCount } = await supabase
    .from('ends')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  const { count: messagingCount } = await supabase
    .from('messagings')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  const { count: voiceCount } = await supabase
    .from('voices')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  const stats = [
    { name: 'Builds', count: buildCount || 0, href: '/builds' },
    { name: 'Signals', count: signalCount || 0, href: '/signals' },
    { name: 'Privates', count: privateCount || 0, href: '/privates' },
    { name: 'Privacys', count: privacyCount || 0, href: '/privacys' },
    { name: 'Keys', count: keyCount || 0, href: '/keys' },
    { name: 'Ends', count: endCount || 0, href: '/ends' },
    { name: 'Messagings', count: messagingCount || 0, href: '/messagings' },
    { name: 'Voices', count: voiceCount || 0, href: '/voices' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link key={stat.name} href={stat.href}>
            <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.count}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

### ✅ CHECKPOINT Phase 4

- [ ] Alle Entity Types erstellt
- [ ] Alle Zod Schemas erstellt
- [ ] API Routes funktionieren (teste mit curl oder Browser DevTools)
- [ ] Dashboard zeigt Entity Counts

**Test:**
```bash
# Nach npm run dev, teste API:
curl http://localhost:3000/api/builds
# Sollte { "data": [], "meta": { ... } } backgeben
```

### Build

**Description:** Represents a build of the application

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `version`: string - Version number of the build

- [ ] Create `types/build.ts`:
```typescript
export interface Build {
  id: string;
  user_id: string;
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  version: string;
  created_at: string;
  updated_at: string;
}
```

- [ ] Create `lib/schemas/build.ts`:
```typescript
import { z } from "zod";

export const CreateBuildSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
  version: z.string(),
});

export const UpdateBuildSchema = CreateBuildSchema.partial();

export type CreateBuild = z.infer<typeof CreateBuildSchema>;
export type UpdateBuild = z.infer<typeof UpdateBuildSchema>;
```

- [ ] Create `app/api/builds/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { CreateBuildSchema } from '@/lib/schemas/build';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '20');
  const cursor = searchParams.get('cursor');

  let query = supabase
    .from('builds')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(limit + 1);

  if (cursor) {
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const hasMore = data.length > limit;
  const items = hasMore ? data.slice(0, -1) : data;
  const nextCursor = hasMore ? items[items.length - 1]?.created_at : null;

  return NextResponse.json({
    data: items,
    meta: { next_cursor: nextCursor, has_more: hasMore }
  });
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = CreateBuildSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('builds')
    .insert({ ...parsed.data, user_id: user.id })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
```

- [ ] Create `app/api/builds/[id]/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { UpdateBuildSchema } from '@/lib/schemas/build';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('builds')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ data });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = UpdateBuildSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('builds')
    .update(parsed.data)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase
    .from('builds')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

- [ ] Create `hooks/useBuilds.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import type { Build } from '@/types/build';
import type { CreateBuild } from '@/lib/schemas/build';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useBuilds() {
  const { data, error, isLoading, mutate } = useSWR<{ data: Build[] }>(
    '/api/builds',
    fetcher
  );

  return {
    builds: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useBuild(id: string | null) {
  const { data, error, isLoading } = useSWR<{ data: Build }>(
    id ? `/api/builds/${id}` : null,
    fetcher
  );

  return {
    build: data?.data,
    isLoading,
    error,
  };
}

export function useCreateBuild() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/builds',
    async (url: string, { arg }: { arg: CreateBuild }) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to create');
      return res.json();
    }
  );

  return { create: trigger, isCreating: isMutating };
}

export function useUpdateBuild(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/builds/${id}`,
    async (url: string, { arg }: { arg: Partial<CreateBuild> }) => {
      const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to update');
      return res.json();
    }
  );

  return { update: trigger, isUpdating: isMutating };
}

export function useDeleteBuild(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/builds/${id}`,
    async (url: string) => {
      const res = await fetch(url, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      return res.json();
    }
  );

  return { remove: trigger, isDeleting: isMutating };
}
```

- [ ] Create `app/(app)/builds/page.tsx`:
  - Server Component mit Liste
  - Empty State wenn keine data
  - Link zu "Neu create"

- [ ] Create `app/(app)/builds/[id]/page.tsx`:
  - Detail View
  - Edit/Delete Buttons

- [ ] Create `components/build/BuildCard.tsx`:
  - Wiederverwendbare Card-Komponente

---

### Signal

**Description:** Represents a signal, such as a message or call

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of signal

- [ ] Create `types/signal.ts`:
```typescript
export interface Signal {
  id: string;
  user_id: string;
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  type: string;
  created_at: string;
  updated_at: string;
}
```

- [ ] Create `lib/schemas/signal.ts`:
```typescript
import { z } from "zod";

export const CreateSignalSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
  type: z.string(),
});

export const UpdateSignalSchema = CreateSignalSchema.partial();

export type CreateSignal = z.infer<typeof CreateSignalSchema>;
export type UpdateSignal = z.infer<typeof UpdateSignalSchema>;
```

- [ ] Create `app/api/signals/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { CreateSignalSchema } from '@/lib/schemas/signal';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '20');
  const cursor = searchParams.get('cursor');

  let query = supabase
    .from('signals')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(limit + 1);

  if (cursor) {
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const hasMore = data.length > limit;
  const items = hasMore ? data.slice(0, -1) : data;
  const nextCursor = hasMore ? items[items.length - 1]?.created_at : null;

  return NextResponse.json({
    data: items,
    meta: { next_cursor: nextCursor, has_more: hasMore }
  });
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = CreateSignalSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('signals')
    .insert({ ...parsed.data, user_id: user.id })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
```

- [ ] Create `app/api/signals/[id]/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { UpdateSignalSchema } from '@/lib/schemas/signal';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('signals')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ data });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = UpdateSignalSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('signals')
    .update(parsed.data)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase
    .from('signals')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

- [ ] Create `hooks/useSignals.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import type { Signal } from '@/types/signal';
import type { CreateSignal } from '@/lib/schemas/signal';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useSignals() {
  const { data, error, isLoading, mutate } = useSWR<{ data: Signal[] }>(
    '/api/signals',
    fetcher
  );

  return {
    signals: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useSignal(id: string | null) {
  const { data, error, isLoading } = useSWR<{ data: Signal }>(
    id ? `/api/signals/${id}` : null,
    fetcher
  );

  return {
    signal: data?.data,
    isLoading,
    error,
  };
}

export function useCreateSignal() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/signals',
    async (url: string, { arg }: { arg: CreateSignal }) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to create');
      return res.json();
    }
  );

  return { create: trigger, isCreating: isMutating };
}

export function useUpdateSignal(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/signals/${id}`,
    async (url: string, { arg }: { arg: Partial<CreateSignal> }) => {
      const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to update');
      return res.json();
    }
  );

  return { update: trigger, isUpdating: isMutating };
}

export function useDeleteSignal(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/signals/${id}`,
    async (url: string) => {
      const res = await fetch(url, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      return res.json();
    }
  );

  return { remove: trigger, isDeleting: isMutating };
}
```

- [ ] Create `app/(app)/signals/page.tsx`:
  - Server Component mit Liste
  - Empty State wenn keine data
  - Link zu "Neu create"

- [ ] Create `app/(app)/signals/[id]/page.tsx`:
  - Detail View
  - Edit/Delete Buttons

- [ ] Create `components/signal/SignalCard.tsx`:
  - Wiederverwendbare Card-Komponente

---

### Private

**Description:** Represents a private conversation or group

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of private conversation or group

- [ ] Create `types/private.ts`:
```typescript
export interface Private {
  id: string;
  user_id: string;
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  type: string;
  created_at: string;
  updated_at: string;
}
```

- [ ] Create `lib/schemas/private.ts`:
```typescript
import { z } from "zod";

export const CreatePrivateSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
  type: z.string(),
});

export const UpdatePrivateSchema = CreatePrivateSchema.partial();

export type CreatePrivate = z.infer<typeof CreatePrivateSchema>;
export type UpdatePrivate = z.infer<typeof UpdatePrivateSchema>;
```

- [ ] Create `app/api/privates/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { CreatePrivateSchema } from '@/lib/schemas/private';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '20');
  const cursor = searchParams.get('cursor');

  let query = supabase
    .from('privates')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(limit + 1);

  if (cursor) {
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const hasMore = data.length > limit;
  const items = hasMore ? data.slice(0, -1) : data;
  const nextCursor = hasMore ? items[items.length - 1]?.created_at : null;

  return NextResponse.json({
    data: items,
    meta: { next_cursor: nextCursor, has_more: hasMore }
  });
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = CreatePrivateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('privates')
    .insert({ ...parsed.data, user_id: user.id })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
```

- [ ] Create `app/api/privates/[id]/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { UpdatePrivateSchema } from '@/lib/schemas/private';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('privates')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ data });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = UpdatePrivateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('privates')
    .update(parsed.data)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase
    .from('privates')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

- [ ] Create `hooks/usePrivates.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import type { Private } from '@/types/private';
import type { CreatePrivate } from '@/lib/schemas/private';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function usePrivates() {
  const { data, error, isLoading, mutate } = useSWR<{ data: Private[] }>(
    '/api/privates',
    fetcher
  );

  return {
    privates: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function usePrivate(id: string | null) {
  const { data, error, isLoading } = useSWR<{ data: Private }>(
    id ? `/api/privates/${id}` : null,
    fetcher
  );

  return {
    private: data?.data,
    isLoading,
    error,
  };
}

export function useCreatePrivate() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/privates',
    async (url: string, { arg }: { arg: CreatePrivate }) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to create');
      return res.json();
    }
  );

  return { create: trigger, isCreating: isMutating };
}

export function useUpdatePrivate(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/privates/${id}`,
    async (url: string, { arg }: { arg: Partial<CreatePrivate> }) => {
      const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to update');
      return res.json();
    }
  );

  return { update: trigger, isUpdating: isMutating };
}

export function useDeletePrivate(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/privates/${id}`,
    async (url: string) => {
      const res = await fetch(url, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      return res.json();
    }
  );

  return { remove: trigger, isDeleting: isMutating };
}
```

- [ ] Create `app/(app)/privates/page.tsx`:
  - Server Component mit Liste
  - Empty State wenn keine data
  - Link zu "Neu create"

- [ ] Create `app/(app)/privates/[id]/page.tsx`:
  - Detail View
  - Edit/Delete Buttons

- [ ] Create `components/private/PrivateCard.tsx`:
  - Wiederverwendbare Card-Komponente

---

### Privacy

**Description:** Represents a user's privacy settings

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID

- [ ] Create `types/privacy.ts`:
```typescript
export interface Privacy {
  id: string;
  user_id: string;
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}
```

- [ ] Create `lib/schemas/privacy.ts`:
```typescript
import { z } from "zod";

export const CreatePrivacySchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
});

export const UpdatePrivacySchema = CreatePrivacySchema.partial();

export type CreatePrivacy = z.infer<typeof CreatePrivacySchema>;
export type UpdatePrivacy = z.infer<typeof UpdatePrivacySchema>;
```

- [ ] Create `app/api/privacys/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { CreatePrivacySchema } from '@/lib/schemas/privacy';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '20');
  const cursor = searchParams.get('cursor');

  let query = supabase
    .from('privacys')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(limit + 1);

  if (cursor) {
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const hasMore = data.length > limit;
  const items = hasMore ? data.slice(0, -1) : data;
  const nextCursor = hasMore ? items[items.length - 1]?.created_at : null;

  return NextResponse.json({
    data: items,
    meta: { next_cursor: nextCursor, has_more: hasMore }
  });
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = CreatePrivacySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('privacys')
    .insert({ ...parsed.data, user_id: user.id })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
```

- [ ] Create `app/api/privacys/[id]/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { UpdatePrivacySchema } from '@/lib/schemas/privacy';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('privacys')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ data });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = UpdatePrivacySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('privacys')
    .update(parsed.data)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase
    .from('privacys')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

- [ ] Create `hooks/usePrivacys.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import type { Privacy } from '@/types/privacy';
import type { CreatePrivacy } from '@/lib/schemas/privacy';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function usePrivacys() {
  const { data, error, isLoading, mutate } = useSWR<{ data: Privacy[] }>(
    '/api/privacys',
    fetcher
  );

  return {
    privacys: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function usePrivacy(id: string | null) {
  const { data, error, isLoading } = useSWR<{ data: Privacy }>(
    id ? `/api/privacys/${id}` : null,
    fetcher
  );

  return {
    privacy: data?.data,
    isLoading,
    error,
  };
}

export function useCreatePrivacy() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/privacys',
    async (url: string, { arg }: { arg: CreatePrivacy }) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to create');
      return res.json();
    }
  );

  return { create: trigger, isCreating: isMutating };
}

export function useUpdatePrivacy(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/privacys/${id}`,
    async (url: string, { arg }: { arg: Partial<CreatePrivacy> }) => {
      const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to update');
      return res.json();
    }
  );

  return { update: trigger, isUpdating: isMutating };
}

export function useDeletePrivacy(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/privacys/${id}`,
    async (url: string) => {
      const res = await fetch(url, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      return res.json();
    }
  );

  return { remove: trigger, isDeleting: isMutating };
}
```

- [ ] Create `app/(app)/privacys/page.tsx`:
  - Server Component mit Liste
  - Empty State wenn keine data
  - Link zu "Neu create"

- [ ] Create `app/(app)/privacys/[id]/page.tsx`:
  - Detail View
  - Edit/Delete Buttons

- [ ] Create `components/privacy/PrivacyCard.tsx`:
  - Wiederverwendbare Card-Komponente

---

### Key

**Description:** Represents a cryptographic key

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of key

- [ ] Create `types/key.ts`:
```typescript
export interface Key {
  id: string;
  user_id: string;
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  type: string;
  created_at: string;
  updated_at: string;
}
```

- [ ] Create `lib/schemas/key.ts`:
```typescript
import { z } from "zod";

export const CreateKeySchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
  type: z.string(),
});

export const UpdateKeySchema = CreateKeySchema.partial();

export type CreateKey = z.infer<typeof CreateKeySchema>;
export type UpdateKey = z.infer<typeof UpdateKeySchema>;
```

- [ ] Create `app/api/keys/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { CreateKeySchema } from '@/lib/schemas/key';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '20');
  const cursor = searchParams.get('cursor');

  let query = supabase
    .from('keys')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(limit + 1);

  if (cursor) {
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const hasMore = data.length > limit;
  const items = hasMore ? data.slice(0, -1) : data;
  const nextCursor = hasMore ? items[items.length - 1]?.created_at : null;

  return NextResponse.json({
    data: items,
    meta: { next_cursor: nextCursor, has_more: hasMore }
  });
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = CreateKeySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('keys')
    .insert({ ...parsed.data, user_id: user.id })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
```

- [ ] Create `app/api/keys/[id]/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { UpdateKeySchema } from '@/lib/schemas/key';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('keys')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ data });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = UpdateKeySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('keys')
    .update(parsed.data)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase
    .from('keys')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

- [ ] Create `hooks/useKeys.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import type { Key } from '@/types/key';
import type { CreateKey } from '@/lib/schemas/key';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useKeys() {
  const { data, error, isLoading, mutate } = useSWR<{ data: Key[] }>(
    '/api/keys',
    fetcher
  );

  return {
    keys: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useKey(id: string | null) {
  const { data, error, isLoading } = useSWR<{ data: Key }>(
    id ? `/api/keys/${id}` : null,
    fetcher
  );

  return {
    key: data?.data,
    isLoading,
    error,
  };
}

export function useCreateKey() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/keys',
    async (url: string, { arg }: { arg: CreateKey }) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to create');
      return res.json();
    }
  );

  return { create: trigger, isCreating: isMutating };
}

export function useUpdateKey(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/keys/${id}`,
    async (url: string, { arg }: { arg: Partial<CreateKey> }) => {
      const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to update');
      return res.json();
    }
  );

  return { update: trigger, isUpdating: isMutating };
}

export function useDeleteKey(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/keys/${id}`,
    async (url: string) => {
      const res = await fetch(url, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      return res.json();
    }
  );

  return { remove: trigger, isDeleting: isMutating };
}
```

- [ ] Create `app/(app)/keys/page.tsx`:
  - Server Component mit Liste
  - Empty State wenn keine data
  - Link zu "Neu create"

- [ ] Create `app/(app)/keys/[id]/page.tsx`:
  - Detail View
  - Edit/Delete Buttons

- [ ] Create `components/key/KeyCard.tsx`:
  - Wiederverwendbare Card-Komponente

---

### End

**Description:** Represents the end of a conversation or call

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of conversation or call

- [ ] Create `types/end.ts`:
```typescript
export interface End {
  id: string;
  user_id: string;
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  type: string;
  created_at: string;
  updated_at: string;
}
```

- [ ] Create `lib/schemas/end.ts`:
```typescript
import { z } from "zod";

export const CreateEndSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
  type: z.string(),
});

export const UpdateEndSchema = CreateEndSchema.partial();

export type CreateEnd = z.infer<typeof CreateEndSchema>;
export type UpdateEnd = z.infer<typeof UpdateEndSchema>;
```

- [ ] Create `app/api/ends/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { CreateEndSchema } from '@/lib/schemas/end';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '20');
  const cursor = searchParams.get('cursor');

  let query = supabase
    .from('ends')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(limit + 1);

  if (cursor) {
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const hasMore = data.length > limit;
  const items = hasMore ? data.slice(0, -1) : data;
  const nextCursor = hasMore ? items[items.length - 1]?.created_at : null;

  return NextResponse.json({
    data: items,
    meta: { next_cursor: nextCursor, has_more: hasMore }
  });
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = CreateEndSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('ends')
    .insert({ ...parsed.data, user_id: user.id })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
```

- [ ] Create `app/api/ends/[id]/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { UpdateEndSchema } from '@/lib/schemas/end';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('ends')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ data });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = UpdateEndSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('ends')
    .update(parsed.data)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase
    .from('ends')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

- [ ] Create `hooks/useEnds.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import type { End } from '@/types/end';
import type { CreateEnd } from '@/lib/schemas/end';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useEnds() {
  const { data, error, isLoading, mutate } = useSWR<{ data: End[] }>(
    '/api/ends',
    fetcher
  );

  return {
    ends: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useEnd(id: string | null) {
  const { data, error, isLoading } = useSWR<{ data: End }>(
    id ? `/api/ends/${id}` : null,
    fetcher
  );

  return {
    end: data?.data,
    isLoading,
    error,
  };
}

export function useCreateEnd() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/ends',
    async (url: string, { arg }: { arg: CreateEnd }) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to create');
      return res.json();
    }
  );

  return { create: trigger, isCreating: isMutating };
}

export function useUpdateEnd(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/ends/${id}`,
    async (url: string, { arg }: { arg: Partial<CreateEnd> }) => {
      const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to update');
      return res.json();
    }
  );

  return { update: trigger, isUpdating: isMutating };
}

export function useDeleteEnd(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/ends/${id}`,
    async (url: string) => {
      const res = await fetch(url, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      return res.json();
    }
  );

  return { remove: trigger, isDeleting: isMutating };
}
```

- [ ] Create `app/(app)/ends/page.tsx`:
  - Server Component mit Liste
  - Empty State wenn keine data
  - Link zu "Neu create"

- [ ] Create `app/(app)/ends/[id]/page.tsx`:
  - Detail View
  - Edit/Delete Buttons

- [ ] Create `components/end/EndCard.tsx`:
  - Wiederverwendbare Card-Komponente

---

### Messaging

**Description:** Represents a messaging conversation

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of messaging conversation

- [ ] Create `types/messaging.ts`:
```typescript
export interface Messaging {
  id: string;
  user_id: string;
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  type: string;
  created_at: string;
  updated_at: string;
}
```

- [ ] Create `lib/schemas/messaging.ts`:
```typescript
import { z } from "zod";

export const CreateMessagingSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
  type: z.string(),
});

export const UpdateMessagingSchema = CreateMessagingSchema.partial();

export type CreateMessaging = z.infer<typeof CreateMessagingSchema>;
export type UpdateMessaging = z.infer<typeof UpdateMessagingSchema>;
```

- [ ] Create `app/api/messagings/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { CreateMessagingSchema } from '@/lib/schemas/messaging';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '20');
  const cursor = searchParams.get('cursor');

  let query = supabase
    .from('messagings')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(limit + 1);

  if (cursor) {
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const hasMore = data.length > limit;
  const items = hasMore ? data.slice(0, -1) : data;
  const nextCursor = hasMore ? items[items.length - 1]?.created_at : null;

  return NextResponse.json({
    data: items,
    meta: { next_cursor: nextCursor, has_more: hasMore }
  });
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = CreateMessagingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('messagings')
    .insert({ ...parsed.data, user_id: user.id })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
```

- [ ] Create `app/api/messagings/[id]/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { UpdateMessagingSchema } from '@/lib/schemas/messaging';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('messagings')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ data });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = UpdateMessagingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('messagings')
    .update(parsed.data)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase
    .from('messagings')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

- [ ] Create `hooks/useMessagings.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import type { Messaging } from '@/types/messaging';
import type { CreateMessaging } from '@/lib/schemas/messaging';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useMessagings() {
  const { data, error, isLoading, mutate } = useSWR<{ data: Messaging[] }>(
    '/api/messagings',
    fetcher
  );

  return {
    messagings: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useMessaging(id: string | null) {
  const { data, error, isLoading } = useSWR<{ data: Messaging }>(
    id ? `/api/messagings/${id}` : null,
    fetcher
  );

  return {
    messaging: data?.data,
    isLoading,
    error,
  };
}

export function useCreateMessaging() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/messagings',
    async (url: string, { arg }: { arg: CreateMessaging }) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to create');
      return res.json();
    }
  );

  return { create: trigger, isCreating: isMutating };
}

export function useUpdateMessaging(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/messagings/${id}`,
    async (url: string, { arg }: { arg: Partial<CreateMessaging> }) => {
      const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to update');
      return res.json();
    }
  );

  return { update: trigger, isUpdating: isMutating };
}

export function useDeleteMessaging(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/messagings/${id}`,
    async (url: string) => {
      const res = await fetch(url, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      return res.json();
    }
  );

  return { remove: trigger, isDeleting: isMutating };
}
```

- [ ] Create `app/(app)/messagings/page.tsx`:
  - Server Component mit Liste
  - Empty State wenn keine data
  - Link zu "Neu create"

- [ ] Create `app/(app)/messagings/[id]/page.tsx`:
  - Detail View
  - Edit/Delete Buttons

- [ ] Create `components/messaging/MessagingCard.tsx`:
  - Wiederverwendbare Card-Komponente

---

### Voice

**Description:** Represents a voice call

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of voice call

- [ ] Create `types/voice.ts`:
```typescript
export interface Voice {
  id: string;
  user_id: string;
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  type: string;
  created_at: string;
  updated_at: string;
}
```

- [ ] Create `lib/schemas/voice.ts`:
```typescript
import { z } from "zod";

export const CreateVoiceSchema = z.object({
  id: z.string().uuid(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  user_id: z.string().uuid(),
  type: z.string(),
});

export const UpdateVoiceSchema = CreateVoiceSchema.partial();

export type CreateVoice = z.infer<typeof CreateVoiceSchema>;
export type UpdateVoice = z.infer<typeof UpdateVoiceSchema>;
```

- [ ] Create `app/api/voices/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { CreateVoiceSchema } from '@/lib/schemas/voice';

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '20');
  const cursor = searchParams.get('cursor');

  let query = supabase
    .from('voices')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(limit + 1);

  if (cursor) {
    query = query.lt('created_at', cursor);
  }

  const { data, error } = await query;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const hasMore = data.length > limit;
  const items = hasMore ? data.slice(0, -1) : data;
  const nextCursor = hasMore ? items[items.length - 1]?.created_at : null;

  return NextResponse.json({
    data: items,
    meta: { next_cursor: nextCursor, has_more: hasMore }
  });
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = CreateVoiceSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('voices')
    .insert({ ...parsed.data, user_id: user.id })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
```

- [ ] Create `app/api/voices/[id]/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { UpdateVoiceSchema } from '@/lib/schemas/voice';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('voices')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ data });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = UpdateVoiceSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('voices')
    .update(parsed.data)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase
    .from('voices')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

- [ ] Create `hooks/useVoices.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import type { Voice } from '@/types/voice';
import type { CreateVoice } from '@/lib/schemas/voice';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useVoices() {
  const { data, error, isLoading, mutate } = useSWR<{ data: Voice[] }>(
    '/api/voices',
    fetcher
  );

  return {
    voices: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useVoice(id: string | null) {
  const { data, error, isLoading } = useSWR<{ data: Voice }>(
    id ? `/api/voices/${id}` : null,
    fetcher
  );

  return {
    voice: data?.data,
    isLoading,
    error,
  };
}

export function useCreateVoice() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/voices',
    async (url: string, { arg }: { arg: CreateVoice }) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to create');
      return res.json();
    }
  );

  return { create: trigger, isCreating: isMutating };
}

export function useUpdateVoice(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/voices/${id}`,
    async (url: string, { arg }: { arg: Partial<CreateVoice> }) => {
      const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      });
      if (!res.ok) throw new Error('Failed to update');
      return res.json();
    }
  );

  return { update: trigger, isUpdating: isMutating };
}

export function useDeleteVoice(id: string) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/voices/${id}`,
    async (url: string) => {
      const res = await fetch(url, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      return res.json();
    }
  );

  return { remove: trigger, isDeleting: isMutating };
}
```

- [ ] Create `app/(app)/voices/page.tsx`:
  - Server Component mit Liste
  - Empty State wenn keine data
  - Link zu "Neu create"

- [ ] Create `app/(app)/voices/[id]/page.tsx`:
  - Detail View
  - Edit/Delete Buttons

- [ ] Create `components/voice/VoiceCard.tsx`:
  - Wiederverwendbare Card-Komponente

### User Flows

**User Onboarding:**
The user onboarding flow

Stepe:
1. The user downloads and installs the app
2. The user creates an account
3. The user verifies their email address

**Private Messaging:**
The private messaging flow

Stepe:
1. The user initiates a private conversation
2. The user sends a message
3. The user receives a message



---

## Phase 5: API Layer

### 5.1 API Error Handling

- [ ] Create `lib/api/errors.ts`:
```typescript
export class ApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public status: number = 400,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const Errors = {
  UNAUTHORIZED: new ApiError('UNAUTHORIZED', 'Not authenticated', 401),
  FORBIDDEN: new ApiError('FORBIDDEN', 'Not authorized', 403),
  NOT_FOUND: new ApiError('NOT_FOUND', 'Resource not found', 404),
  VALIDATION: (details: unknown) => new ApiError('VALIDATION_ERROR', 'Validation failed', 400, details),
  INTERNAL: new ApiError('INTERNAL_ERROR', 'Internal server error', 500),
};
```

- [ ] Create `lib/api/response.ts`:
```typescript
import { NextResponse } from 'next/server';
import { ApiError } from './errors';

export function success<T>(data: T, status = 200) {
  return NextResponse.json({ data }, { status });
}

export function paginated<T>(data: T[], meta: { next_cursor: string | null; has_more: boolean }) {
  return NextResponse.json({ data, meta });
}

export function error(err: ApiError | Error) {
  if (err instanceof ApiError) {
    return NextResponse.json(
      { error: { code: err.code, message: err.message, details: err.details } },
      { status: err.status }
    );
  }
  console.error('Unexpected error:', err);
  return NextResponse.json(
    { error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred' } },
    { status: 500 }
  );
}
```

### 5.2 API Route Pattern

Jede Entity API Route should diesem Pattern folgen:

```typescript
// app/api/[entity]s/route.ts
import { NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { success, paginated, error } from '@/lib/api/response';
import { Errors } from '@/lib/api/errors';
import { Create[Entity]Schema, PaginationSchema } from '@/lib/schemas/[entity]';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw Errors.UNAUTHORIZED;

    const { searchParams } = new URL(request.url);
    const query = PaginationSchema.safeParse({
      limit: searchParams.get('limit'),
      cursor: searchParams.get('cursor'),
    });
    if (!query.success) throw Errors.VALIDATION(query.error.flatten());

    // Query with pagination...
    return paginated(items, { next_cursor, has_more });
  } catch (err) {
    return error(err as Error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw Errors.UNAUTHORIZED;

    const body = await request.json();
    const parsed = Create[Entity]Schema.safeParse(body);
    if (!parsed.success) throw Errors.VALIDATION(parsed.error.flatten());

    // Create...
    return success(data, 201);
  } catch (err) {
    return error(err as Error);
  }
}
```

### 5.3 Pagination Schema

- [ ] Create `lib/schemas/pagination.ts`:
```typescript
import { z } from 'zod';

export const PaginationSchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export type Pagination = z.infer<typeof PaginationSchema>;
```



---

## Phase 6: UI Components

### 6.1 Button Component (COMPLETE)

- [ ] Create `components/ui/button.tsx`:
```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

### 6.2 Input Component (COMPLETE)

- [ ] Create `components/ui/input.tsx`:
```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
```

### 6.3 Card Component (COMPLETE)

- [ ] Create `components/ui/card.tsx`:
```typescript
import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

### 6.4 Skeleton & Spinner (COMPLETE)

- [ ] Create `components/ui/skeleton.tsx`:
```typescript
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("animate-pulse rounded-md bg-primary/10", className)} {...props} />
  );
}

export { Skeleton };
```

- [ ] Create `components/ui/spinner.tsx`:
```typescript
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export function Spinner({ className }: { className?: string }) {
  return <Loader2 className={cn("h-4 w-4 animate-spin", className)} />;
}
```

### 6.5 Empty State Component

- [ ] Create `components/ui/empty-state.tsx`:
```typescript
import { LucideIcon } from "lucide-react";
import { Button } from "./button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-3 mb-4">
        <Icon className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1 max-w-sm">{description}</p>
      {action && (
        <Button onClick={action.onClick} className="mt-4">
          {action.label}
        </Button>
      )}
    </div>
  );
}
```

### 6.6 Weitere UI Components

Create diese additionaln Components nach Bedarf:

| Component | Description |
|-----------|--------------|
| `textarea.tsx` | Textarea mit auto-resize |
| `select.tsx` | Select mit Radix |
| `checkbox.tsx` | Checkbox mit Radix |
| `badge.tsx` | Badge mit variants |
| `dialog.tsx` | Modal dialog (Radix) |
| `dropdown-menu.tsx` | Dropdown menu (Radix) |
| `avatar.tsx` | User avatar mit fallback |

### 6.7 App Layout (COMPLETE)

- [ ] Create `app/(app)/layout.tsx`:
```typescript
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { Header } from '@/components/layout/Header';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
```

- [ ] Create `components/layout/Header.tsx`:
```typescript
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  user: User;
}

export function Header({ user }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    // TODO: Entity-Links hier add
  ];

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/dashboard" className="font-bold text-xl">
            {/* APP_NAME */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user.email}</span>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="py-2 text-left text-muted-foreground hover:text-foreground"
              >
                Logout
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
```

### 6.3 Toast/Notification System

- [ ] Create `components/ui/toaster.tsx` und `hooks/useToast.ts`:
```typescript
// hooks/useToast.ts
import { create } from 'zustand'; // oder useState + Context

interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'error';
}

interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

export const useToast = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => set((state) => ({
    toasts: [...state.toasts, { ...toast, id: Date.now().toString() }]
  })),
  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter((t) => t.id !== id)
  })),
}));

// Usage:
// const { addToast } = useToast();
// addToast({ title: 'Saved!', variant: 'success' });
```

### 6.8 Global Styles (COMPLETE)

- [ ] Update `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

@layer utilities {
  .container {
    @apply max-w-7xl mx-auto;
  }
}
```

- [ ] Update `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
```

### ✅ CHECKPOINT Phase 6

- [ ] `npm run dev` runs ohne Error
- [ ] UI Components rendern korrekt
- [ ] Tailwind Styles werden angewendet
- [ ] Dark Mode funktioniert (falls aktiviert)

**Bei Errorn:** Check tailwind.config.ts und globals.css Syntax

### 6.5 App Screens

Diese Screens sind for die App geplant:

- [ ] **Landing Page** (`/`)
  - The landing page of the app
  - Components: Header, Introduction, Call to Action

- [ ] **Registration Page** (`/register`)
  - The registration page of the app
  - Components: Header, Registration Form, Call to Action

---

## Phase 7: Forms & Validation

### 7.1 Form Pattern mit react-hook-form + Zod

- [ ] Create Form-Komponente Pattern:
```typescript
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Create[Entity]Schema, type Create[Entity] } from '@/lib/schemas/[entity]';

export function [Entity]Form({ onSubmit, defaultValues }: Props) {
  const form = useForm<Create[Entity]>({
    resolver: zodResolver(Create[Entity]Schema),
    defaultValues,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await onSubmit(data);
    } catch (error) {
      form.setError('root', { message: 'Ein Error ist aufgetreten' });
    }
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {form.formState.errors.root && (
        <div className="text-destructive text-sm">
          {form.formState.errors.root.message}
        </div>
      )}

      <div>
        <label htmlFor="field">Field</label>
        <input
          {...form.register('field')}
          className={cn('input', form.formState.errors.field && 'border-destructive')}
        />
        {form.formState.errors.field && (
          <p className="text-destructive text-sm">{form.formState.errors.field.message}</p>
        )}
      </div>

      <button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? 'Speichern...' : 'Speichern'}
      </button>
    </form>
  );
}
```

### 7.2 Entity Forms create

- [ ] Create `components/build/BuildForm.tsx`
- [ ] Create `components/signal/SignalForm.tsx`
- [ ] Create `components/private/PrivateForm.tsx`
- [ ] Create `components/privacy/PrivacyForm.tsx`
- [ ] Create `components/key/KeyForm.tsx`
- [ ] Create `components/end/EndForm.tsx`
- [ ] Create `components/messaging/MessagingForm.tsx`
- [ ] Create `components/voice/VoiceForm.tsx`

### 7.3 Form UI Components

- [ ] Create `components/ui/form.tsx`:
  - FormField, FormItem, FormLabel, FormControl, FormMessage
  - Integration mit react-hook-form
  - Error State Styling

---

## Phase 8: State Management & Hooks

### 8.1 Auth Hook

- [ ] Create `hooks/useAuth.ts`:
```typescript
'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    // Get initial session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    // Listen for changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return { user, loading, signOut };
}
```

### 8.2 Entity Hooks mit SWR


- [ ] Create `hooks/useBuilds.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useBuilds() {
  const { data, error, isLoading, mutate } = useSWR('/api/builds', fetcher);

  return {
    builds: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useBuild(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/builds/${id}` : null,
    fetcher
  );

  return {
    build: data?.data,
    isLoading,
    error,
  };
}

export function useCreateBuild() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/builds',
    (url, { arg }: { arg: CreateBuild }) =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      }).then(r => r.json())
  );

  return { create: trigger, isCreating: isMutating };
}
```

- [ ] Create `hooks/useSignals.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useSignals() {
  const { data, error, isLoading, mutate } = useSWR('/api/signals', fetcher);

  return {
    signals: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useSignal(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/signals/${id}` : null,
    fetcher
  );

  return {
    signal: data?.data,
    isLoading,
    error,
  };
}

export function useCreateSignal() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/signals',
    (url, { arg }: { arg: CreateSignal }) =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      }).then(r => r.json())
  );

  return { create: trigger, isCreating: isMutating };
}
```

- [ ] Create `hooks/usePrivates.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function usePrivates() {
  const { data, error, isLoading, mutate } = useSWR('/api/privates', fetcher);

  return {
    privates: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function usePrivate(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/privates/${id}` : null,
    fetcher
  );

  return {
    private: data?.data,
    isLoading,
    error,
  };
}

export function useCreatePrivate() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/privates',
    (url, { arg }: { arg: CreatePrivate }) =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      }).then(r => r.json())
  );

  return { create: trigger, isCreating: isMutating };
}
```

- [ ] Create `hooks/usePrivacys.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function usePrivacys() {
  const { data, error, isLoading, mutate } = useSWR('/api/privacys', fetcher);

  return {
    privacys: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function usePrivacy(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/privacys/${id}` : null,
    fetcher
  );

  return {
    privacy: data?.data,
    isLoading,
    error,
  };
}

export function useCreatePrivacy() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/privacys',
    (url, { arg }: { arg: CreatePrivacy }) =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      }).then(r => r.json())
  );

  return { create: trigger, isCreating: isMutating };
}
```

- [ ] Create `hooks/useKeys.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useKeys() {
  const { data, error, isLoading, mutate } = useSWR('/api/keys', fetcher);

  return {
    keys: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useKey(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/keys/${id}` : null,
    fetcher
  );

  return {
    key: data?.data,
    isLoading,
    error,
  };
}

export function useCreateKey() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/keys',
    (url, { arg }: { arg: CreateKey }) =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      }).then(r => r.json())
  );

  return { create: trigger, isCreating: isMutating };
}
```

- [ ] Create `hooks/useEnds.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useEnds() {
  const { data, error, isLoading, mutate } = useSWR('/api/ends', fetcher);

  return {
    ends: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useEnd(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/ends/${id}` : null,
    fetcher
  );

  return {
    end: data?.data,
    isLoading,
    error,
  };
}

export function useCreateEnd() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/ends',
    (url, { arg }: { arg: CreateEnd }) =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      }).then(r => r.json())
  );

  return { create: trigger, isCreating: isMutating };
}
```

- [ ] Create `hooks/useMessagings.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useMessagings() {
  const { data, error, isLoading, mutate } = useSWR('/api/messagings', fetcher);

  return {
    messagings: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useMessaging(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/messagings/${id}` : null,
    fetcher
  );

  return {
    messaging: data?.data,
    isLoading,
    error,
  };
}

export function useCreateMessaging() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/messagings',
    (url, { arg }: { arg: CreateMessaging }) =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      }).then(r => r.json())
  );

  return { create: trigger, isCreating: isMutating };
}
```

- [ ] Create `hooks/useVoices.ts`:
```typescript
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to fetch');
  }
  return res.json();
};

export function useVoices() {
  const { data, error, isLoading, mutate } = useSWR('/api/voices', fetcher);

  return {
    voices: data?.data ?? [],
    isLoading,
    error,
    refresh: mutate,
  };
}

export function useVoice(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? `/api/voices/${id}` : null,
    fetcher
  );

  return {
    voice: data?.data,
    isLoading,
    error,
  };
}

export function useCreateVoice() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/voices',
    (url, { arg }: { arg: CreateVoice }) =>
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(arg),
      }).then(r => r.json())
  );

  return { create: trigger, isCreating: isMutating };
}
```

### 8.3 Utility Hooks

- [ ] Create `hooks/useDebounce.ts`
- [ ] Create `hooks/useLocalStorage.ts`
- [ ] Create `hooks/useMediaQuery.ts`



---

## Phase 10: Landing Page

### Problem & Solution

**Das Problem (for Messaging use):**
Lack of privacy and security in messaging apps

**Unsere Solution:**
Echo is a premium, privacy-focused encrypted messaging app designed for high-stakes professionals and individuals who require absolute security. It offers end-to-end encryption, secure messaging, voice calls, video calls, and groups, all backed by a robust server infrastructure. Echo's unique selling point is its advanced security audit feature, which allows users to monitor and control their data's security.

**Was uns unterscheidet:**
1. End-to-end encryption for all messages and calls
2. Open-source and transparent code
3. No data collection or advertising
4. Donation-based monetization model

### Content Vorgaben

**Hero Section:**
- Headline: "Echo"
- Subheadline: "Secure Conversations Matter"
- Primary CTA: "Get Started"
- Secondary CTA: "Learn More"


**Value Propositions / Features:**
1. auth
2. end_to_end_encryption
3. messaging
4. voice_calls
5. video_calls
6. groups
7. donations
8. private_key_management
9. signal_protocol
10. push_notifications
11. file_sharing

### Tasks

- [ ] Create `app/page.tsx` (Landing Page)
- [ ] Create `components/landing/Hero.tsx`
- [ ] Create `components/landing/Features.tsx`
- [ ] Create `components/landing/HowItWorks.tsx`
- [ ] Create `components/landing/Testimonials.tsx`
- [ ] Create `components/landing/FAQ.tsx`
- [ ] Create `components/landing/CTA.tsx`
- [ ] Create `components/landing/Footer.tsx`

### Landing Page Prompt

```
Create a complete Landing Page for Echo:

Problem: Lack of privacy and security in messaging apps
Headline: Echo
Subheadline: Secure Conversations Matter
Primary CTA: Get Started
Features/Value Props: auth, end_to_end_encryption, messaging, voice_calls, video_calls, groups, donations, private_key_management, signal_protocol, push_notifications, file_sharing
Differentiators: End-to-end encryption for all messages and calls, Open-source and transparent code, No data collection or advertising, Donation-based monetization model

Sections:
1. Hero with CTA Buttons
2. Features Grid (3-4 Features with Icons)
3. How it Works (3 Steps)
4. Testimonials (Placeholder)
5. FAQ Accordion
6. Final CTA
7. Footer

Design: Modern, clean, mobile-first, dark mode support
Tech: Next.js, Tailwind, Lucide Icons
```

---

## Phase 11: Testing

### 11.1 Vitest Setup

- [ ] Create `vitest.config.ts`:
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
});
```

- [ ] Create `vitest.setup.ts`:
```typescript
import '@testing-library/jest-dom';
```

- [ ] Update `package.json` scripts:
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### 11.2 Test Files create

- [ ] Create Tests for Utils:
  - `lib/utils.test.ts`

- [ ] Create Tests for Schemas:
  - `lib/schemas/build.test.ts`
  - `lib/schemas/signal.test.ts`
  - `lib/schemas/private.test.ts`
  - `lib/schemas/privacy.test.ts`
  - `lib/schemas/key.test.ts`
  - `lib/schemas/end.test.ts`
  - `lib/schemas/messaging.test.ts`
  - `lib/schemas/voice.test.ts`

- [ ] Create Component Tests:
  - `components/ui/button.test.tsx`

### 11.3 Test Example

```typescript
// lib/schemas/[entity].test.ts
import { describe, it, expect } from 'vitest';
import { Create[Entity]Schema } from './[entity]';

describe('[Entity] Schema', () => {
  it('validates correct data', () => {
    const result = Create[Entity]Schema.safeParse({
      // valid data
    });
    expect(result.success).toBe(true);
  });

  it('rejects invalid data', () => {
    const result = Create[Entity]Schema.safeParse({
      // invalid data
    });
    expect(result.success).toBe(false);
  });
});
```

### 11.4 Manual Testing Checklist

**Auth:**
- [ ] Signup funktioniert
- [ ] Login funktioniert
- [ ] Logout funktioniert
- [ ] Protected routes redirect

**Entities:**
- [ ] Build CRUD funktioniert
- [ ] Signal CRUD funktioniert
- [ ] Private CRUD funktioniert
- [ ] Privacy CRUD funktioniert
- [ ] Key CRUD funktioniert
- [ ] End CRUD funktioniert
- [ ] Messaging CRUD funktioniert
- [ ] Voice CRUD funktioniert

**UI:**
- [ ] Mobile responsive
- [ ] Loading states
- [ ] Error states
- [ ] Empty states

### 11.5 Flow Tests

Diese User Flows shouldn End-to-End getestet werden:

**User Onboarding:**
- [ ] Step 1: The user downloads and installs the app
- [ ] Step 2: The user creates an account
- [ ] Step 3: The user verifies their email address
- [ ] Success: The user has successfully created an account and verified their email address

**Private Messaging:**
- [ ] Step 1: The user initiates a private conversation
- [ ] Step 2: The user sends a message
- [ ] Step 3: The user receives a message
- [ ] Success: The user has successfully sent and received messages

---

## Phase 12: Security

### 12.1 Security Checklist

**Authentication:**
- [ ] Alle protected routes checkn Auth
- [ ] Session handling korrekt
- [ ] Logout deletes Session komplett

**Authorization (RLS):**
- [ ] Alle Tablen haben RLS aktiviert
- [ ] builds: Policy korrekt
- [ ] signals: Policy korrekt
- [ ] privates: Policy korrekt
- [ ] privacys: Policy korrekt
- [ ] keys: Policy korrekt
- [ ] ends: Policy korrekt
- [ ] messagings: Policy korrekt
- [ ] voices: Policy korrekt

**Input Validation:**
- [ ] Alle API Inputs mit Zod validated
- [ ] File Uploads validated (falls vorhanden)

**Data Exposure:**
- [ ] Keine sensiblen data in Client Bundle
- [ ] .env.local in .gitignore
- [ ] Keine API Keys im Code

### 12.2 Security Prompt

```
Run einen Security Audit for Build durch:

1. Check alle API Routes auf Auth
2. Check RLS Policies
3. Check Input Validation
4. Check Environment Variables
5. Create Report mit Findings und Fixes
```



---

## Phase 13: SEO & Metadata

### 13.1 Root Metadata

- [ ] Update `app/layout.tsx`:
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Echo',
    template: '%s | Echo',
  },
  description: 'Secure Conversations Matter',
  keywords: ['Echo', 'End-to-end encryption for all messages and calls', 'Open-source and transparent code', 'No data collection or advertising'],
  authors: [{ name: 'Echo Team' }],
  openGraph: {
    title: 'Echo',
    description: 'Secure Conversations Matter',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'Echo',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Echo',
    description: 'Secure Conversations Matter',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### 13.2 Page-specific Metadata

- [ ] Jede Page should own Metadata haben:
```typescript
// app/(app)/dashboard/page.tsx
export const metadata: Metadata = {
  title: 'Dashboard',
};
```

### 13.3 Sitemap

- [ ] Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/login`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/signup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}
```

### 13.4 Robots.txt

- [ ] Create `app/robots.ts`:
```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/dashboard/'] },
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
  };
}
```

---

## Phase 14: Deployment

### 14.1 Pre-Deployment Checklist

- [ ] `npm run build` erfolgreich
- [ ] `npm run test` erfolgreich
- [ ] `.env.example` completely
- [ ] Keine Secrets im Code
- [ ] SEO Metadata gesetzt

### 14.2 Vercel Deployment

- [ ] GitHub Repo create und pushen
- [ ] Vercel Projekt create
- [ ] Environment Variables setzen:
  - `NEXT_PUBLIC_APP_URL`
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Deploy triggern

### 14.3 Post-Deployment

- [ ] Production URL testen
- [ ] Supabase Auth Redirect URLs updaten
- [ ] Custom Domain konfigurieren (optional)
- [ ] Analytics einrichten (optional)

### 14.4 Monitoring (Optional)

- [ ] Error Tracking (Sentry)
- [ ] Analytics (Vercel Analytics, Plausible)
- [ ] Uptime Monitoring

---

## 🎉 FINAL CHECKPOINT

Bevor du fertig bist, check diese finale Checkliste:

### Build & Lint
```bash
npm run build && npm run lint
```
- [ ] Build erfolgreich ohne Errors
- [ ] Keine Lint Errors

### functionality
- [ ] Landing Page lädt
- [ ] Signup funktioniert
- [ ] Login funktioniert
- [ ] Dashboard zeigt nach Login
- [ ] Entity CRUD funktioniert (Create, Read, Update, Delete)
- [ ] Logout funktioniert

### Code Quality
- [ ] Keine console.log im Production Code
- [ ] Keine hardcoded Secrets
- [ ] TypeScript Errors behoben
- [ ] Keine unused imports

### Bei Errorn
1. Lies die Errormeldung genau
2. Check die entsprechende File
3. Behebe den Error
4. Run `npm run build` erneut aus
5. Wiederhole bis Build erfolgreich

**Die App ist fertig wenn alle Checkboxen abgehakt sind und `npm run build` erfolgreich durchruns.**

---

## Prompt Library

> **Instruction:** Diese Prompts can direkt an Claude Code gegeben werden um spezifische Tasks auszurunn.

---

### 🏗️ SETUP PROMPTS

### App-Kontext for alle Prompts

**Produkt:** Echo
**Problem:** Lack of privacy and security in messaging apps
**Target audience:** High-stakes professionals and privacy-conscious individuals
**Persona:** {"age":"18-60","interests":"Privacy, security, and technology","pain_points":"Concerns about data privacy and security in messaging apps","goals":"To have secure and private conversations"}
**Entities:** Build, Signal, Private, Privacy, Key, End, Messaging, Voice

---

#### Supabase Client Setup
```
Create die Supabase Client-Konfiguration for Echo:

1. lib/supabase/client.ts - Browser Client mit createBrowserClient
2. lib/supabase/server.ts - Server Client mit async createClient()
   - Verwende das neue Cookie-API (getAll/setAll)
   - Inkludiere getUser() und requireUser() Helpers

Achte auf:
- Next.js 14+ App Router Compatibility
- TypeScript strict mode
- Korrekte Cookie-Handling for SSR
```

#### Middleware Setup
```
Create die Auth Middleware for Echo:

Protected Routes:
- /dashboard
- /account
- /builds
- /signals
- /privates
- /privacys
- /keys
- /ends
- /messagings
- /voices

Auth Routes (redirect wenn eingeloggt):
- /login
- /signup

Verwende das neue Supabase SSR Cookie-API.
```

---

### 🔐 AUTH PROMPTS

#### Login Page
```
Create die Login Page for Echo:

File: app/(auth)/login/page.tsx

Features:
- Email + Password Formular
- Error State Handling
- Loading State during Submit
- Link zu Signup
- Redirect zu /dashboard nach erfolgreichem Login
- Responsive Design
- Dark Mode kompatibel

Technisch:
- 'use client' Komponente
- Supabase signInWithPassword
- useRouter for Navigation
- Form mit onSubmit Handler
```

#### Signup Page
```
Create die Signup Page for Echo:

File: app/(auth)/signup/page.tsx

Features:
- Email + Password Formular
- Password minimum length 6 characters
- Password confirmation (optional)
- Error State Handling
- Link zu Login
- Redirect nach Signup

Gleiche Patterns wie Login Page.
```

#### Logout Function
```
Implement Logout for Echo:

1. Logout Button Component
2. Supabase signOut aufrufen
3. Redirect zu / oder /login
4. Optional: Toast Notification "Erfolgreich ausgeloggt"
```

---

### 📦 ENTITY PROMPTS

#### Build CRUD komplett
```
Create completelyes CRUD for Build in Echo:

Entity: Build
Fields: id (uuid), created_at (datetime), updated_at (datetime), user_id (uuid), version (string)

Create:
1. types/build.ts - TypeScript Interface
2. lib/schemas/build.ts - Zod Schemas (Create, Update)
3. app/api/builds/route.ts - GET (list mit Pagination), POST (create)
4. app/api/builds/[id]/route.ts - GET, PATCH, DELETE
5. app/(app)/builds/page.tsx - Liste (Server Component)
6. app/(app)/builds/[id]/page.tsx - Detail (Server Component)
7. app/(app)/builds/new/page.tsx - Create Form
8. components/build/BuildCard.tsx - Card Component
9. components/build/BuildForm.tsx - Create/Edit Form
10. hooks/useBuilds.ts - SWR Hook

Alle API Routes must:
- Auth checkn
- Zod Validation use
- Nur own data des Users backgeben (RLS)
- Korrekte HTTP Status Codes
```

#### Signal CRUD komplett
```
Create completelyes CRUD for Signal in Echo:

Entity: Signal
Fields: id (uuid), created_at (datetime), updated_at (datetime), user_id (uuid), type (enum)

Create:
1. types/signal.ts - TypeScript Interface
2. lib/schemas/signal.ts - Zod Schemas (Create, Update)
3. app/api/signals/route.ts - GET (list mit Pagination), POST (create)
4. app/api/signals/[id]/route.ts - GET, PATCH, DELETE
5. app/(app)/signals/page.tsx - Liste (Server Component)
6. app/(app)/signals/[id]/page.tsx - Detail (Server Component)
7. app/(app)/signals/new/page.tsx - Create Form
8. components/signal/SignalCard.tsx - Card Component
9. components/signal/SignalForm.tsx - Create/Edit Form
10. hooks/useSignals.ts - SWR Hook

Alle API Routes must:
- Auth checkn
- Zod Validation use
- Nur own data des Users backgeben (RLS)
- Korrekte HTTP Status Codes
```

#### Private CRUD komplett
```
Create completelyes CRUD for Private in Echo:

Entity: Private
Fields: id (uuid), created_at (datetime), updated_at (datetime), user_id (uuid), type (enum)

Create:
1. types/private.ts - TypeScript Interface
2. lib/schemas/private.ts - Zod Schemas (Create, Update)
3. app/api/privates/route.ts - GET (list mit Pagination), POST (create)
4. app/api/privates/[id]/route.ts - GET, PATCH, DELETE
5. app/(app)/privates/page.tsx - Liste (Server Component)
6. app/(app)/privates/[id]/page.tsx - Detail (Server Component)
7. app/(app)/privates/new/page.tsx - Create Form
8. components/private/PrivateCard.tsx - Card Component
9. components/private/PrivateForm.tsx - Create/Edit Form
10. hooks/usePrivates.ts - SWR Hook

Alle API Routes must:
- Auth checkn
- Zod Validation use
- Nur own data des Users backgeben (RLS)
- Korrekte HTTP Status Codes
```

#### Privacy CRUD komplett
```
Create completelyes CRUD for Privacy in Echo:

Entity: Privacy
Fields: id (uuid), created_at (datetime), updated_at (datetime), user_id (uuid)

Create:
1. types/privacy.ts - TypeScript Interface
2. lib/schemas/privacy.ts - Zod Schemas (Create, Update)
3. app/api/privacys/route.ts - GET (list mit Pagination), POST (create)
4. app/api/privacys/[id]/route.ts - GET, PATCH, DELETE
5. app/(app)/privacys/page.tsx - Liste (Server Component)
6. app/(app)/privacys/[id]/page.tsx - Detail (Server Component)
7. app/(app)/privacys/new/page.tsx - Create Form
8. components/privacy/PrivacyCard.tsx - Card Component
9. components/privacy/PrivacyForm.tsx - Create/Edit Form
10. hooks/usePrivacys.ts - SWR Hook

Alle API Routes must:
- Auth checkn
- Zod Validation use
- Nur own data des Users backgeben (RLS)
- Korrekte HTTP Status Codes
```

#### Key CRUD komplett
```
Create completelyes CRUD for Key in Echo:

Entity: Key
Fields: id (uuid), created_at (datetime), updated_at (datetime), user_id (uuid), type (enum)

Create:
1. types/key.ts - TypeScript Interface
2. lib/schemas/key.ts - Zod Schemas (Create, Update)
3. app/api/keys/route.ts - GET (list mit Pagination), POST (create)
4. app/api/keys/[id]/route.ts - GET, PATCH, DELETE
5. app/(app)/keys/page.tsx - Liste (Server Component)
6. app/(app)/keys/[id]/page.tsx - Detail (Server Component)
7. app/(app)/keys/new/page.tsx - Create Form
8. components/key/KeyCard.tsx - Card Component
9. components/key/KeyForm.tsx - Create/Edit Form
10. hooks/useKeys.ts - SWR Hook

Alle API Routes must:
- Auth checkn
- Zod Validation use
- Nur own data des Users backgeben (RLS)
- Korrekte HTTP Status Codes
```

#### End CRUD komplett
```
Create completelyes CRUD for End in Echo:

Entity: End
Fields: id (uuid), created_at (datetime), updated_at (datetime), user_id (uuid), type (enum)

Create:
1. types/end.ts - TypeScript Interface
2. lib/schemas/end.ts - Zod Schemas (Create, Update)
3. app/api/ends/route.ts - GET (list mit Pagination), POST (create)
4. app/api/ends/[id]/route.ts - GET, PATCH, DELETE
5. app/(app)/ends/page.tsx - Liste (Server Component)
6. app/(app)/ends/[id]/page.tsx - Detail (Server Component)
7. app/(app)/ends/new/page.tsx - Create Form
8. components/end/EndCard.tsx - Card Component
9. components/end/EndForm.tsx - Create/Edit Form
10. hooks/useEnds.ts - SWR Hook

Alle API Routes must:
- Auth checkn
- Zod Validation use
- Nur own data des Users backgeben (RLS)
- Korrekte HTTP Status Codes
```

#### Messaging CRUD komplett
```
Create completelyes CRUD for Messaging in Echo:

Entity: Messaging
Fields: id (uuid), created_at (datetime), updated_at (datetime), user_id (uuid), type (enum)

Create:
1. types/messaging.ts - TypeScript Interface
2. lib/schemas/messaging.ts - Zod Schemas (Create, Update)
3. app/api/messagings/route.ts - GET (list mit Pagination), POST (create)
4. app/api/messagings/[id]/route.ts - GET, PATCH, DELETE
5. app/(app)/messagings/page.tsx - Liste (Server Component)
6. app/(app)/messagings/[id]/page.tsx - Detail (Server Component)
7. app/(app)/messagings/new/page.tsx - Create Form
8. components/messaging/MessagingCard.tsx - Card Component
9. components/messaging/MessagingForm.tsx - Create/Edit Form
10. hooks/useMessagings.ts - SWR Hook

Alle API Routes must:
- Auth checkn
- Zod Validation use
- Nur own data des Users backgeben (RLS)
- Korrekte HTTP Status Codes
```

#### Voice CRUD komplett
```
Create completelyes CRUD for Voice in Echo:

Entity: Voice
Fields: id (uuid), created_at (datetime), updated_at (datetime), user_id (uuid), type (enum)

Create:
1. types/voice.ts - TypeScript Interface
2. lib/schemas/voice.ts - Zod Schemas (Create, Update)
3. app/api/voices/route.ts - GET (list mit Pagination), POST (create)
4. app/api/voices/[id]/route.ts - GET, PATCH, DELETE
5. app/(app)/voices/page.tsx - Liste (Server Component)
6. app/(app)/voices/[id]/page.tsx - Detail (Server Component)
7. app/(app)/voices/new/page.tsx - Create Form
8. components/voice/VoiceCard.tsx - Card Component
9. components/voice/VoiceForm.tsx - Create/Edit Form
10. hooks/useVoices.ts - SWR Hook

Alle API Routes must:
- Auth checkn
- Zod Validation use
- Nur own data des Users backgeben (RLS)
- Korrekte HTTP Status Codes
```

---

### 🎨 UI/DESIGN PROMPTS

#### Landing Page komplett
```
Create eine moderne Landing Page for Echo:

Product Info:
- Name: Echo
- Tagline: Secure Conversations Matter
- Description: Echo is a premium, privacy-focused encrypted messaging app designed for high-stakes professionals and individuals who require absolute security. It offers end-to-end encryption, secure messaging, voice calls, video calls, and groups, all backed by a robust server infrastructure. Echo's unique selling point is its advanced security audit feature, which allows users to monitor and control their data's security.
- Target audience: High-stakes professionals and privacy-conscious individuals

Sektionen:
1. Hero
   - Headline + Subheadline
   - Primary CTA "Jetzt starten" -> /signup
   - Secondary CTA "Mehr erfahren" -> #features
   - Optional: Hero Image/Illustration Platzhalter

2. Features (3-4 Features)
   - Icon + Headline + Description
   - Grid Layout
   - Basierend auf den Entities: Build, Signal, Private, Privacy, Key, End, Messaging, Voice

3. How it Works (3 Stepe)
   - Nummerierte Stepe
   - Icon + Titel + Description

4. Social Proof
   - Testimonial Platzhalter
   - "Trusted by X users" Platzhalter

5. FAQ (4-5 Fragen)
   - Accordion oder einfache Liste
   - Typische Fragen for diese App-Art

6. Final CTA
   - Wiederholung des Haupt-CTAs
   - Email Signup oder direkt zu /signup

7. Footer
   - Links: Imprint, dataschutz, Contact
   - Social Links Platzhalter
   - Copyright

Design:
- Mobile-first responsive
- Dark Mode kompatibel
- Viel Whitespace
- Subtle Animations (CSS only)
- Lucide Icons
```

#### Dashboard Layout
```
Create das Dashboard Layout for Echo:

File: app/(app)/layout.tsx

Features:
1. Header
   - Logo "Echo" (links)
   - Navigation Links (Builds, Signals, Privates, Privacys, Keys, Ends, Messagings, Voices, Account)
   - User Menu (Dropdown mit Logout)

2. Mobile
   - Hamburger Menu
   - Slide-out Navigation

3. Main Content Area
   - Container mit max-width
   - Padding for Content

Komponenten:
- components/layout/Header.tsx
- components/layout/MobileNav.tsx
- components/layout/UserMenu.tsx
```

#### UI Components (shadcn-style)
```
Create die Basis UI Components for Echo:

1. components/ui/button.tsx
   - Variants: default, destructive, outline, secondary, ghost, link
   - Sizes: default, sm, lg, icon
   - Mit class-variance-authority

2. components/ui/input.tsx
   - Standard Input
   - Error State

3. components/ui/card.tsx
   - Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter

4. components/ui/badge.tsx
   - Variants: default, secondary, destructive, outline

5. components/ui/skeleton.tsx
   - For Loading States

Alle Components:
- TypeScript mit forwardRef
- className prop mit cn() merge
- Accessible (ARIA labels)
```

#### Global Styles
```
Create die globalen Styles for Echo:

File: app/globals.css

Features:
1. CSS Variables for Light Mode:
   - --background, --foreground
   - --card, --card-foreground
   - --primary, --primary-foreground
   - --secondary, --secondary-foreground
   - --muted, --muted-foreground
   - --accent, --accent-foreground
   - --destructive, --destructive-foreground
   - --border, --input, --ring
   - --radius

2. CSS Variables for Dark Mode (.dark):
   - Invertierte/angepasste Werte

3. Base Layer:
   - * { border-color: border }
   - body { background, color }

4. Utility Classes (optional):
   - .container
   - .prose (for Markdown content)
```

---

### 🔒 SECURITY PROMPTS

#### Security Audit
```
Run einen completelyen Security Audit for Echo durch:

Check:

1. Authentication
   - [ ] Alle protected routes checkn Auth
   - [ ] Session handling korrekt
   - [ ] Logout deletes Session komplett

2. Authorization
   - [ ] RLS auf allen Tablen aktiv
   - [ ] Policies korrekt (user can only CRUD own data)
   - [ ] Keine Privilege Escalation possible

3. Input Validation
   - [ ] Alle API Inputs mit Zod validated
   - [ ] File Uploads validated (Typ, size)
   - [ ] SQL Injection nicht possible (Supabase use)

4. Data Exposure
   - [ ] Keine sensiblen data in Client Bundle
   - [ ] API gibt nur necessarye Fields back
   - [ ] Error Messages leaken keine Infos

5. Environment
   - [ ] .env.local in .gitignore
   - [ ] Keine Secrets im Code
   - [ ] NEXT_PUBLIC_ nur for public Werte

Create Report mit:
- Issue Description
- Severity (Critical/High/Medium/Low)
- Location (File:Zeile)
- Fix Empfehlung
```

#### Rate Limiting
```
Implement Rate Limiting for Echo:

Limits:
- Auth Routes: 5 requests/minute
- API CRUD: 60 requests/minute
- File Upload: 10 requests/minute

Implementierung:
1. lib/rate-limit.ts mit in-memory Map
2. Middleware oder per-route check
3. Return 429 Too Many Requests bei exceeding limit
4. Header: X-RateLimit-Remaining
```

---

### 🧪 TESTING PROMPTS

#### E2E Test Flow
```
Test Echo completely manuell:

1. Setup
   - npm run dev starten
   - Browser openn http://localhost:3000

2. Auth Flow
   - [ ] Landing Page laden
   - [ ] Zu /signup navigieren
   - [ ] Account create
   - [ ] Erfolgreich zu /dashboard redirect
   - [ ] Logout
   - [ ] Login mit erstelltem Account
   - [ ] Protected Route ohne Login -> Redirect

3. Entity CRUD
   Build:
   - [ ] Liste leer state
   - [ ] Create new Build
   - [ ] Build erscheint in Liste
   - [ ] Detail View openn
   - [ ] Build editieren
   - [ ] Changes save
   - [ ] Build delete
   - [ ] Build verschwindet aus Liste
   Signal:
   - [ ] Liste leer state
   - [ ] Create new Signal
   - [ ] Signal erscheint in Liste
   - [ ] Detail View openn
   - [ ] Signal editieren
   - [ ] Changes save
   - [ ] Signal delete
   - [ ] Signal verschwindet aus Liste
   Private:
   - [ ] Liste leer state
   - [ ] Create new Private
   - [ ] Private erscheint in Liste
   - [ ] Detail View openn
   - [ ] Private editieren
   - [ ] Changes save
   - [ ] Private delete
   - [ ] Private verschwindet aus Liste
   Privacy:
   - [ ] Liste leer state
   - [ ] Create new Privacy
   - [ ] Privacy erscheint in Liste
   - [ ] Detail View openn
   - [ ] Privacy editieren
   - [ ] Changes save
   - [ ] Privacy delete
   - [ ] Privacy verschwindet aus Liste
   Key:
   - [ ] Liste leer state
   - [ ] Create new Key
   - [ ] Key erscheint in Liste
   - [ ] Detail View openn
   - [ ] Key editieren
   - [ ] Changes save
   - [ ] Key delete
   - [ ] Key verschwindet aus Liste
   End:
   - [ ] Liste leer state
   - [ ] Create new End
   - [ ] End erscheint in Liste
   - [ ] Detail View openn
   - [ ] End editieren
   - [ ] Changes save
   - [ ] End delete
   - [ ] End verschwindet aus Liste
   Messaging:
   - [ ] Liste leer state
   - [ ] Create new Messaging
   - [ ] Messaging erscheint in Liste
   - [ ] Detail View openn
   - [ ] Messaging editieren
   - [ ] Changes save
   - [ ] Messaging delete
   - [ ] Messaging verschwindet aus Liste
   Voice:
   - [ ] Liste leer state
   - [ ] Create new Voice
   - [ ] Voice erscheint in Liste
   - [ ] Detail View openn
   - [ ] Voice editieren
   - [ ] Changes save
   - [ ] Voice delete
   - [ ] Voice verschwindet aus Liste

4. Error States
   - [ ] Invalid Form Submission
   - [ ] Network Error Handling
   - [ ] 404 Page

5. Responsive
   - [ ] Mobile Viewport testen
   - [ ] Navigation funktioniert
   - [ ] Forms sind nutzbar

Dokumentiere alle Bugs und fixe sie.
```

#### Build Verification
```
Verifiziere dass Echo production-ready ist:

1. npm run build
   - [ ] Keine Errors
   - [ ] Keine Warnings (oder dokumentiert)

2. npm run lint
   - [ ] Keine Errors

3. TypeScript
   - [ ] npx tsc --noEmit erfolgreich

4. Bundle Check
   - [ ] Keine large Chunks (>500kb)
   - [ ] Kein unnecessaryer Code

Falls Error: Fixe sie und wiederhole.
```

---

### 📝 CONTENT PROMPTS

#### Marketing Copy
```
Create Marketing Copy for Echo:

Kontext:
- Produkt: Echo
- Tagline: Secure Conversations Matter
- Target audience: High-stakes professionals and privacy-conscious individuals
- Description: Echo is a premium, privacy-focused encrypted messaging app designed for high-stakes professionals and individuals who require absolute security. It offers end-to-end encryption, secure messaging, voice calls, video calls, and groups, all backed by a robust server infrastructure. Echo's unique selling point is its advanced security audit feature, which allows users to monitor and control their data's security.

Create:

1. Headlines (5 Varianten)
   - Benefit-focused
   - Max 10 words

2. Value Propositions (3)
   - Problem -> Solution Format
   - 1-2 sentences

3. Feature Descriptionen
   - For jede Entity/Feature
   - 50-100 words
   - Benefit, nicht Feature

4. FAQ (5 Fragen)
   - Typische Bedenken
   - Klare, hilfreiche Antworten

5. Email Onboarding Sequence (3 Emails)
   - Welcome Email
   - Getting Started Tips
   - Feature Highlight
```

#### Legal Pages
```
Create Basis Legal Pages for Echo:

1. app/impressum/page.tsx
   - Platzhalter for Anbieter-Infos
   - Standard Struktur

2. app/privacy/page.tsx
   - Cookie Info
   - Supabase/Vercel mention
   - Contact for dataschutz

3. app/agb/page.tsx (optional)
   - Nutzungsbedingungen
   - Haftungsausschluss

Note: Platzhalter for rechtlich relevante Infos.
```

---

### 🚀 DEPLOYMENT PROMPTS

#### Vercel Deployment
```
Deploye Echo zu Vercel:

1. Pre-Checks
   - [ ] npm run build erfolgreich
   - [ ] .env.example completely
   - [ ] Keine Secrets im Code

2. GitHub
   - [ ] git init (falls nicht vorhanden)
   - [ ] .gitignore checkn
   - [ ] Initial Commit
   - [ ] Push zu GitHub

3. Vercel
   - [ ] Importiere GitHub Repo
   - [ ] Framework: Next.js (auto-detected)
   - [ ] Environment Variables setzen:
     - NEXT_PUBLIC_SUPABASE_URL
     - NEXT_PUBLIC_SUPABASE_ANON_KEY
     - NEXT_PUBLIC_APP_URL (Production URL)
   - [ ] Deploy

4. Post-Deploy
   - [ ] Production URL testen
   - [ ] Supabase Redirect URLs aktualisieren
   - [ ] Custom Domain (optional)
```

#### Supabase Production
```
Richte Supabase Production for Echo ein:

1. Neues Projekt create (falls nicht vorhanden)

2. Schema Migration
   - SQL Editor openn
   - supabase/schema.sql ausrunn
   - Erfolg verifizieren

3. Auth Settings
   - Site URL auf Production setzen
   - Redirect URLs konfigurieren
   - Email Templates anpassen (optional)

4. RLS Verification
   - Alle Policies checkn
   - Test mit verschiedenen Users

5. API Keys
   - anon key for Frontend
   - service_role NIEMALS ins Frontend
```

### Copy/Marketing Text

```
Create Marketing Copy for Echo:

Produkt: Echo
Tagline: Secure Conversations Matter
Target audience: High-stakes professionals and privacy-conscious individuals
Description: Echo is a premium, privacy-focused encrypted messaging app designed for high-stakes professionals and individuals who require absolute security. It offers end-to-end encryption, secure messaging, voice calls, video calls, and groups, all backed by a robust server infrastructure. Echo's unique selling point is its advanced security audit feature, which allows users to monitor and control their data's security.

Create:
1. 5 alternative Headlines
2. 3 Value Propositions
3. Feature Descriptionen (50-100 words je Feature)
4. FAQ (5 Fragen und Antworten)
5. Email Welcome Sequence (3 Emails Outline)
```

### Performance Optimierung

```
Optimiere die Performance von Echo.

Analysiere:
1. Bundle Size
2. Server Component vs Client Component Usage
3. Data Fetching Patterns
4. Image Optimization
5. Caching Strategien

Implement die Top 3 Optimierungen.
```

---

### 🔄 FLOW PROMPTS

#### User Onboarding Flow implementieren
```
Implement den "User Onboarding" Flow for Echo:

The user onboarding flow

Stepe:
1. The user downloads and installs the app
2. The user creates an account
3. The user verifies their email address

Erfolgs-Kriterium: The user has successfully created an account and verified their email address

Create die necessaryen:
1. Pages/Routes for jeden Step
2. State Management for Flow-Progress
3. Validierung zwischen Stepen
4. Error Handling
5. Success/Completion Handling
```

#### Private Messaging Flow implementieren
```
Implement den "Private Messaging" Flow for Echo:

The private messaging flow

Stepe:
1. The user initiates a private conversation
2. The user sends a message
3. The user receives a message

Erfolgs-Kriterium: The user has successfully sent and received messages

Create die necessaryen:
1. Pages/Routes for jeden Step
2. State Management for Flow-Progress
3. Validierung zwischen Stepen
4. Error Handling
5. Success/Completion Handling
```

---

## Zusammenfassung

### Echo

**Entities:** Build, Signal, Private, Privacy, Key, End, Messaging, Voice

**Features:**
- auth
- end_to_end_encryption
- messaging
- voice_calls
- video_calls
- groups
- donations
- private_key_management
- signal_protocol
- push_notifications
- file_sharing

**Screens:** Landing Page, Registration Page

**User Flows:** User Onboarding, Private Messaging

**Generierte Struktur:**
```
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (app)/
│   │   ├── dashboard/
│   │   ├── builds/
│   │   ├── signals/
│   │   ├── privates/
│   │   ├── privacys/
│   │   ├── keys/
│   │   ├── ends/
│   │   ├── messagings/
│   │   ├── voices/
│   │   └── account/
│   └── api/
│       ├── builds/
│       ├── signals/
│       ├── privates/
│       ├── privacys/
│       ├── keys/
│       ├── ends/
│       ├── messagings/
│       ├── voices/
│       └── auth/
├── components/
│   ├── ui/
│   └── [entity]/
├── hooks/
├── lib/
│   ├── supabase/
│   └── schemas/
├── types/
└── middleware.ts
```

---

**Viel Erfolg bei der Umsetzung! 🚀**

Bei Fragen oder Problemen: Beschreibe das Issue und Claude Code wird helfen.

---

## About This Blueprint

This project blueprint was generated with [Claudery](https://claudery.io) - the AI-powered blueprint generator for modern web applications.

**What is Claudery?**
Claudery transforms your app ideas into comprehensive, production-ready blueprints. Each blueprint includes:
- Complete database schemas
- API route specifications
- UI component structures
- Authentication flows
- Deployment configurations

**Build faster. Ship smarter.**

---

*Generated with ❤️ by [Claudery](https://claudery.io)*