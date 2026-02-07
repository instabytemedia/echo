# File Structure Scaffold - Echo

## Complete Project Structure

```
echo/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   ├── globals.css               # Global styles
│   │
│   ├── (auth)/                   # Auth group (no layout)
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   └── forgot-password/
│   │       └── page.tsx
│   │
│   ├── (app)/                    # Authenticated app group
│   │   ├── layout.tsx            # App layout with sidebar
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   ├── build/
│   │   ├── page.tsx              # List view
│   │   ├── [id]/
│   │   │   └── page.tsx          # Detail view
│   │   └── new/
│   │       └── page.tsx          # Create form
│   ├── signal/
│   │   ├── page.tsx              # List view
│   │   ├── [id]/
│   │   │   └── page.tsx          # Detail view
│   │   └── new/
│   │       └── page.tsx          # Create form
│   ├── private/
│   │   ├── page.tsx              # List view
│   │   ├── [id]/
│   │   │   └── page.tsx          # Detail view
│   │   └── new/
│   │       └── page.tsx          # Create form
│   ├── privacy/
│   │   ├── page.tsx              # List view
│   │   ├── [id]/
│   │   │   └── page.tsx          # Detail view
│   │   └── new/
│   │       └── page.tsx          # Create form
│   ├── key/
│   │   ├── page.tsx              # List view
│   │   ├── [id]/
│   │   │   └── page.tsx          # Detail view
│   │   └── new/
│   │       └── page.tsx          # Create form
│   ├── end/
│   │   ├── page.tsx              # List view
│   │   ├── [id]/
│   │   │   └── page.tsx          # Detail view
│   │   └── new/
│   │       └── page.tsx          # Create form
│   ├── messaging/
│   │   ├── page.tsx              # List view
│   │   ├── [id]/
│   │   │   └── page.tsx          # Detail view
│   │   └── new/
│   │       └── page.tsx          # Create form
│   ├── voice/
│   │   ├── page.tsx              # List view
│   │   ├── [id]/
│   │   │   └── page.tsx          # Detail view
│   │   └── new/
│   │       └── page.tsx          # Create form
│   │   └── settings/
│   │       └── page.tsx
│   │
│   └── api/                      # API Routes
│       ├── auth/
│       │   ├── signin/route.ts
│       │   ├── signup/route.ts
│       │   └── signout/route.ts
│   ├── builds/
│   │   ├── route.ts              # GET list, POST create
│   │   └── [id]/
│   │       └── route.ts          # GET, PUT, DELETE
│   ├── signals/
│   │   ├── route.ts              # GET list, POST create
│   │   └── [id]/
│   │       └── route.ts          # GET, PUT, DELETE
│   ├── privates/
│   │   ├── route.ts              # GET list, POST create
│   │   └── [id]/
│   │       └── route.ts          # GET, PUT, DELETE
│   ├── privacys/
│   │   ├── route.ts              # GET list, POST create
│   │   └── [id]/
│   │       └── route.ts          # GET, PUT, DELETE
│   ├── keys/
│   │   ├── route.ts              # GET list, POST create
│   │   └── [id]/
│   │       └── route.ts          # GET, PUT, DELETE
│   ├── ends/
│   │   ├── route.ts              # GET list, POST create
│   │   └── [id]/
│   │       └── route.ts          # GET, PUT, DELETE
│   ├── messagings/
│   │   ├── route.ts              # GET list, POST create
│   │   └── [id]/
│   │       └── route.ts          # GET, PUT, DELETE
│   ├── voices/
│   │   ├── route.ts              # GET list, POST create
│   │   └── [id]/
│   │       └── route.ts          # GET, PUT, DELETE
│       └── webhooks/
│           └── stripe/route.ts
│
├── components/                   # React Components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   │
│   ├── layout/                   # Layout components
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   ├── footer.tsx
│   │   └── nav.tsx
│   │
│   ├── forms/                    # Form components
│   │   ├── login-form.tsx
│   │   ├── signup-form.tsx
│   │   └── build-form.tsx
│   │   └── signal-form.tsx
│   │   └── private-form.tsx
│   │   └── privacy-form.tsx
│   │   └── key-form.tsx
│   │   └── end-form.tsx
│   │   └── messaging-form.tsx
│   │   └── voice-form.tsx
│   │
│   └── features/                 # Feature components
│       ├── build/
│       │   ├── build-card.tsx
│       │   ├── build-list.tsx
│       │   └── build-detail.tsx
│       ├── signal/
│       │   ├── signal-card.tsx
│       │   ├── signal-list.tsx
│       │   └── signal-detail.tsx
│       ├── private/
│       │   ├── private-card.tsx
│       │   ├── private-list.tsx
│       │   └── private-detail.tsx
│       ├── privacy/
│       │   ├── privacy-card.tsx
│       │   ├── privacy-list.tsx
│       │   └── privacy-detail.tsx
│       ├── key/
│       │   ├── key-card.tsx
│       │   ├── key-list.tsx
│       │   └── key-detail.tsx
│       ├── end/
│       │   ├── end-card.tsx
│       │   ├── end-list.tsx
│       │   └── end-detail.tsx
│       ├── messaging/
│       │   ├── messaging-card.tsx
│       │   ├── messaging-list.tsx
│       │   └── messaging-detail.tsx
│       ├── voice/
│       │   ├── voice-card.tsx
│       │   ├── voice-list.tsx
│       │   └── voice-detail.tsx
│
├── lib/                          # Utilities & Services
│   ├── supabase/
│   │   ├── client.ts             # Browser client
│   │   ├── server.ts             # Server client
│   │   └── types.ts              # DB types
│   │
│   ├── utils/
│   │   ├── cn.ts                 # classnames helper
│   │   ├── format.ts             # Formatters
│   │   └── validation.ts         # Zod schemas
│   │
│   └── hooks/
│       ├── use-user.ts
│       ├── use-toast.ts
│       └── use-media-query.ts
│
├── types/                        # TypeScript types
│   ├── index.ts                  # Main types
│   └── api.ts                    # API types
│
├── styles/                       # Additional styles
│   └── components.css
│
├── public/                       # Static assets
│   ├── favicon.ico
│   ├── og-image.png
│   └── images/
│
├── supabase/                     # Supabase config
│   └── migrations/
│       └── 001_initial_schema.sql
│
├── .env.example                  # Env template
├── .env.local                    # Local env (gitignored)
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Key Files to Create First

### 1. Core Configuration
- [ ] `package.json` - Dependencies
- [ ] `next.config.mjs` - Next.js config
- [ ] `tailwind.config.ts` - Tailwind config
- [ ] `.env.example` - Environment template

### 2. Supabase Setup
- [ ] `lib/supabase/client.ts` - Browser client
- [ ] `lib/supabase/server.ts` - Server client
- [ ] `supabase/migrations/001_initial_schema.sql`

### 3. Layout & Auth
- [ ] `app/layout.tsx` - Root layout
- [ ] `app/(auth)/login/page.tsx` - Login
- [ ] `app/(app)/layout.tsx` - App layout

### 4. Core Features
- [ ] `app/(app)/build/page.tsx` - Build list
- [ ] `app/(app)/signal/page.tsx` - Signal list
- [ ] `app/(app)/private/page.tsx` - Private list
- [ ] `app/(app)/privacy/page.tsx` - Privacy list
- [ ] `app/(app)/key/page.tsx` - Key list
- [ ] `app/(app)/end/page.tsx` - End list
- [ ] `app/(app)/messaging/page.tsx` - Messaging list
- [ ] `app/(app)/voice/page.tsx` - Voice list

---

## Component Naming Conventions

| Type | Pattern | Example |
|------|---------|---------|
| Page | lowercase with dashes | `app/user-settings/page.tsx` |
| Component | PascalCase | `components/UserCard.tsx` |
| Hook | camelCase with `use` prefix | `hooks/useUser.ts` |
| Utility | camelCase | `lib/utils/formatDate.ts` |
| Type | PascalCase | `types/User.ts` |
| API Route | lowercase with dashes | `api/user-profile/route.ts` |
