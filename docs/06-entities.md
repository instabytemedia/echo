# 06 - Entity CRUD

> **Agent:** Entities Agent 📦
> **Goal:** Create complete CRUD for all Entities

---

## Context

**Product:** Echo
**Entities:** Build, Signal, Private, Privacy, Key, End, Messaging, Voice
**Entity Count:** 8

---

## Overview

Per Entity will be created:
- 1x TypeScript Types File
- 1x Zod Schema File
- 2x API Routes (List/Create + Detail)
- 1x SWR Hooks File
- 2x Pages (List + Detail)
- 2x Components (List + Detail)

**Total Files per Entity:** 9
**Total Files overall:** 72

| Entity | Table | API Endpoints | Pages |
|--------|-------|---------------|-------|
| Build | builds | /api/builds | /builds, /builds/[id] |
| Signal | signals | /api/signals | /signals, /signals/[id] |
| Private | privates | /api/privates | /privates, /privates/[id] |
| Privacy | privacys | /api/privacys | /privacys, /privacys/[id] |
| Key | keys | /api/keys | /keys, /keys/[id] |
| End | ends | /api/ends | /ends, /ends/[id] |
| Messaging | messagings | /api/messagings | /messagings, /messagings/[id] |
| Voice | voices | /api/voices | /voices, /voices/[id] |

---


---

## Entity 1: Build

**Description:** Represents a build of the application
**Table Name:** `builds`

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `version`: string - Version number of the build







### Instructions: Build

#### 1. TypeScript Types

Create **Types File** (`types/build.ts`):

**⚠️ CRITICAL: No Duplicate Fields!**
Each field must appear EXACTLY ONCE. Use consistent naming (snake_case for DB fields).

```typescript
// ✅ CORRECT: Each field once
export interface Build {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  // Custom fields:
  version: string;
}

// ❌ WRONG: Duplicate fields!
export interface Build {
  id: string;        // 1x
  userId: string;    // mixed camelCase
  created_at: Date;  // wrong type (use string)
  user_id: string;   // DUPLICATE (snake_case)!
  id: string;        // DUPLICATE!
}
```

**BuildListItem Interface:**
- Reduced version for List Views
- Only essential fields: id, created_at + first 3 custom fields

#### 2. Zod Validation Schema

Create **Schema File** (`lib/schemas/build.ts`):

**CreateBuildSchema:**
- Zod Object with all custom fields
- Required vs Optional based on Field Definition
- Type Mapping:
  - string/text → z.string()
  - number/integer → z.number() / z.number().int()
  - boolean → z.boolean()
  - date/datetime → z.string() (ISO format)

**UpdateBuildSchema:**
- Use Create Schema with .partial()
- All fields optional for updates

**Exports:**
- Schemas + Inferred Types

#### 3. API Routes - List & Create

Create **List/Create Route** (`app/api/builds/route.ts`):

**GET /api/builds (List):**
- Auth Check: User from Supabase
- Query Params: limit (default 20), cursor (pagination)
- Supabase Query:
  - Filter: user_id = current user
  - Order: created_at DESC
  - Limit: limit + 1 (for hasMore detection)
  - Cursor: created_at < cursor (if provided)
- Response: { data: items, meta: { next_cursor, has_more } }
- Error Handling: 401 (unauthorized), 500 (server error)

**POST /api/builds (Create):**
- Auth Check: User from Supabase
- Body Validation: CreateBuildSchema with safeParse
- Insert: Merge validated data + user_id
- Select: .select().single() for Created Object
- Response: { data } with 201 Status
- Error Handling: 400 (validation), 500 (server error)

#### 4. API Routes - Detail Operations

Create **Detail Route** (`app/api/builds/[id]/route.ts`):

**GET /api/builds/[id] (Read):**
- Params: id (await params promise)
- Auth Check: User from Supabase
- Query: .select().eq("id", id).eq("user_id", user.id).single()
- Response: { data }
- Error: 404 if not found

**PATCH /api/builds/[id] (Update):**
- Params: id (await params promise)
- Auth Check + Body Validation
- Update: .update().eq("id").eq("user_id").select().single()
- Response: { data }
- Error: 400 (validation), 404 (not found)

**DELETE /api/builds/[id] (Delete):**
- Params: id (await params promise)
- Auth Check
- Delete: .delete().eq("id").eq("user_id")
- Response: 204 No Content
- Error: 404 (not found)

**Important for all Routes:**
- User ID Check prevents access to other users' data
- NextRequest/NextResponse for Types
- await params as Promise (Next.js 15)

#### 5. SWR Data Fetching Hooks

Create **Hooks File** (`hooks/useBuilds.ts`):

**useBuilds() Hook:**
- SWR for List Fetching
- URL: /api/builds
- Returns: { builds, isLoading, error, mutate }

**useBuild(id) Hook:**
- SWR for Single Item Fetching
- URL: /api/builds/{id}
- Conditional: only fetch if id is provided
- Returns: { build, isLoading, error, mutate }

**useCreateBuild() Hook:**
- POST Request Function
- Mutate List after Success
- Error Handling with throw

**useUpdateBuild(id) Hook:**
- PATCH Request Function
- Mutate Item + List after Success
- Error Handling with throw

**useDeleteBuild() Hook:**
- DELETE Request Function
- Mutate List after Success
- Error Handling with throw

**Important:**
- All Hooks are Client Components ("use client")
- Fetcher Function for SWR
- Proper Error Handling

#### 6. List Page

Create **List Page** (`app/(app)/builds/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Client Component for List Rendering

**Layout:**
- Container with Padding
- Header: Title + "New" Button (right)
- List Component Integration

#### 7. List Component

Create **List Component** (`components/build/BuildList.tsx`):

**States:**
- Loading: Skeleton Grid (6 items)
- Error: Error Message Card
- Empty: EmptyState Component with "Create New" Action
- Success: Grid with Items

**Grid Layout:**
- Responsive: 1 col (mobile), 2 col (tablet), 3 col (desktop)
- Gap: gap-4

**Item Cards:**
- Link to Detail Page
- Hover Effect: border-primary
- Content: Title + Created Date (adapt to Entity fields)

**Important:**
- "use client" Directive
- useBuilds() Hook for Data
- Proper Loading/Error/Empty States

#### 8. Detail Page

Create **Detail Page** (`app/(app)/builds/[id]/page.tsx`):

**Functionality:**
- Server Component
- Auth Check
- Direct Supabase Fetch for SSR
- notFound() if Item doesn't exist
- Pass Data to Detail Component

**Security:**
- user_id Check in Query

#### 9. Detail Component

Create **Detail Component** (`components/build/BuildDetail.tsx`):

**Props:**
- `build`: Build Object

**Layout:**
- Back Button (top left)
- Delete Button (top right)
- Card with Details:
  - ID
  - All Custom Fields (from Entity Definition)
  - Created/Updated Timestamps

**Delete Functionality:**
- Confirm Dialog
- useDeleteBuild() Hook
- Router Push to List after Success
- Loading State during Delete

**Important:**
- "use client" Directive
- Router for Navigation
- Confirmation before Delete



---

## Entity 2: Signal

**Description:** Represents a signal, such as a message or call
**Table Name:** `signals`

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of signal







### Instructions: Signal

#### 1. TypeScript Types

Create **Types File** (`types/signal.ts`):

**⚠️ CRITICAL: No Duplicate Fields!**
Each field must appear EXACTLY ONCE. Use consistent naming (snake_case for DB fields).

```typescript
// ✅ CORRECT: Each field once
export interface Signal {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  // Custom fields:
  type: string;
}

// ❌ WRONG: Duplicate fields!
export interface Signal {
  id: string;        // 1x
  userId: string;    // mixed camelCase
  created_at: Date;  // wrong type (use string)
  user_id: string;   // DUPLICATE (snake_case)!
  id: string;        // DUPLICATE!
}
```

**SignalListItem Interface:**
- Reduced version for List Views
- Only essential fields: id, created_at + first 3 custom fields

#### 2. Zod Validation Schema

Create **Schema File** (`lib/schemas/signal.ts`):

**CreateSignalSchema:**
- Zod Object with all custom fields
- Required vs Optional based on Field Definition
- Type Mapping:
  - string/text → z.string()
  - number/integer → z.number() / z.number().int()
  - boolean → z.boolean()
  - date/datetime → z.string() (ISO format)

**UpdateSignalSchema:**
- Use Create Schema with .partial()
- All fields optional for updates

**Exports:**
- Schemas + Inferred Types

#### 3. API Routes - List & Create

Create **List/Create Route** (`app/api/signals/route.ts`):

**GET /api/signals (List):**
- Auth Check: User from Supabase
- Query Params: limit (default 20), cursor (pagination)
- Supabase Query:
  - Filter: user_id = current user
  - Order: created_at DESC
  - Limit: limit + 1 (for hasMore detection)
  - Cursor: created_at < cursor (if provided)
- Response: { data: items, meta: { next_cursor, has_more } }
- Error Handling: 401 (unauthorized), 500 (server error)

**POST /api/signals (Create):**
- Auth Check: User from Supabase
- Body Validation: CreateSignalSchema with safeParse
- Insert: Merge validated data + user_id
- Select: .select().single() for Created Object
- Response: { data } with 201 Status
- Error Handling: 400 (validation), 500 (server error)

#### 4. API Routes - Detail Operations

Create **Detail Route** (`app/api/signals/[id]/route.ts`):

**GET /api/signals/[id] (Read):**
- Params: id (await params promise)
- Auth Check: User from Supabase
- Query: .select().eq("id", id).eq("user_id", user.id).single()
- Response: { data }
- Error: 404 if not found

**PATCH /api/signals/[id] (Update):**
- Params: id (await params promise)
- Auth Check + Body Validation
- Update: .update().eq("id").eq("user_id").select().single()
- Response: { data }
- Error: 400 (validation), 404 (not found)

**DELETE /api/signals/[id] (Delete):**
- Params: id (await params promise)
- Auth Check
- Delete: .delete().eq("id").eq("user_id")
- Response: 204 No Content
- Error: 404 (not found)

**Important for all Routes:**
- User ID Check prevents access to other users' data
- NextRequest/NextResponse for Types
- await params as Promise (Next.js 15)

#### 5. SWR Data Fetching Hooks

Create **Hooks File** (`hooks/useSignals.ts`):

**useSignals() Hook:**
- SWR for List Fetching
- URL: /api/signals
- Returns: { signals, isLoading, error, mutate }

**useSignal(id) Hook:**
- SWR for Single Item Fetching
- URL: /api/signals/{id}
- Conditional: only fetch if id is provided
- Returns: { signal, isLoading, error, mutate }

**useCreateSignal() Hook:**
- POST Request Function
- Mutate List after Success
- Error Handling with throw

**useUpdateSignal(id) Hook:**
- PATCH Request Function
- Mutate Item + List after Success
- Error Handling with throw

**useDeleteSignal() Hook:**
- DELETE Request Function
- Mutate List after Success
- Error Handling with throw

**Important:**
- All Hooks are Client Components ("use client")
- Fetcher Function for SWR
- Proper Error Handling

#### 6. List Page

Create **List Page** (`app/(app)/signals/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Client Component for List Rendering

**Layout:**
- Container with Padding
- Header: Title + "New" Button (right)
- List Component Integration

#### 7. List Component

Create **List Component** (`components/signal/SignalList.tsx`):

**States:**
- Loading: Skeleton Grid (6 items)
- Error: Error Message Card
- Empty: EmptyState Component with "Create New" Action
- Success: Grid with Items

**Grid Layout:**
- Responsive: 1 col (mobile), 2 col (tablet), 3 col (desktop)
- Gap: gap-4

**Item Cards:**
- Link to Detail Page
- Hover Effect: border-primary
- Content: Title + Created Date (adapt to Entity fields)

**Important:**
- "use client" Directive
- useSignals() Hook for Data
- Proper Loading/Error/Empty States

#### 8. Detail Page

Create **Detail Page** (`app/(app)/signals/[id]/page.tsx`):

**Functionality:**
- Server Component
- Auth Check
- Direct Supabase Fetch for SSR
- notFound() if Item doesn't exist
- Pass Data to Detail Component

**Security:**
- user_id Check in Query

#### 9. Detail Component

Create **Detail Component** (`components/signal/SignalDetail.tsx`):

**Props:**
- `signal`: Signal Object

**Layout:**
- Back Button (top left)
- Delete Button (top right)
- Card with Details:
  - ID
  - All Custom Fields (from Entity Definition)
  - Created/Updated Timestamps

**Delete Functionality:**
- Confirm Dialog
- useDeleteSignal() Hook
- Router Push to List after Success
- Loading State during Delete

**Important:**
- "use client" Directive
- Router for Navigation
- Confirmation before Delete



---

## Entity 3: Private

**Description:** Represents a private conversation or group
**Table Name:** `privates`

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of private conversation or group



**Related Flows:**
- **Private Messaging:** The user initiates a private conversation → The user sends a message → The user receives a message



### Instructions: Private

#### 1. TypeScript Types

Create **Types File** (`types/private.ts`):

**⚠️ CRITICAL: No Duplicate Fields!**
Each field must appear EXACTLY ONCE. Use consistent naming (snake_case for DB fields).

```typescript
// ✅ CORRECT: Each field once
export interface Private {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  // Custom fields:
  type: string;
}

// ❌ WRONG: Duplicate fields!
export interface Private {
  id: string;        // 1x
  userId: string;    // mixed camelCase
  created_at: Date;  // wrong type (use string)
  user_id: string;   // DUPLICATE (snake_case)!
  id: string;        // DUPLICATE!
}
```

**PrivateListItem Interface:**
- Reduced version for List Views
- Only essential fields: id, created_at + first 3 custom fields

#### 2. Zod Validation Schema

Create **Schema File** (`lib/schemas/private.ts`):

**CreatePrivateSchema:**
- Zod Object with all custom fields
- Required vs Optional based on Field Definition
- Type Mapping:
  - string/text → z.string()
  - number/integer → z.number() / z.number().int()
  - boolean → z.boolean()
  - date/datetime → z.string() (ISO format)

**UpdatePrivateSchema:**
- Use Create Schema with .partial()
- All fields optional for updates

**Exports:**
- Schemas + Inferred Types

#### 3. API Routes - List & Create

Create **List/Create Route** (`app/api/privates/route.ts`):

**GET /api/privates (List):**
- Auth Check: User from Supabase
- Query Params: limit (default 20), cursor (pagination)
- Supabase Query:
  - Filter: user_id = current user
  - Order: created_at DESC
  - Limit: limit + 1 (for hasMore detection)
  - Cursor: created_at < cursor (if provided)
- Response: { data: items, meta: { next_cursor, has_more } }
- Error Handling: 401 (unauthorized), 500 (server error)

**POST /api/privates (Create):**
- Auth Check: User from Supabase
- Body Validation: CreatePrivateSchema with safeParse
- Insert: Merge validated data + user_id
- Select: .select().single() for Created Object
- Response: { data } with 201 Status
- Error Handling: 400 (validation), 500 (server error)

#### 4. API Routes - Detail Operations

Create **Detail Route** (`app/api/privates/[id]/route.ts`):

**GET /api/privates/[id] (Read):**
- Params: id (await params promise)
- Auth Check: User from Supabase
- Query: .select().eq("id", id).eq("user_id", user.id).single()
- Response: { data }
- Error: 404 if not found

**PATCH /api/privates/[id] (Update):**
- Params: id (await params promise)
- Auth Check + Body Validation
- Update: .update().eq("id").eq("user_id").select().single()
- Response: { data }
- Error: 400 (validation), 404 (not found)

**DELETE /api/privates/[id] (Delete):**
- Params: id (await params promise)
- Auth Check
- Delete: .delete().eq("id").eq("user_id")
- Response: 204 No Content
- Error: 404 (not found)

**Important for all Routes:**
- User ID Check prevents access to other users' data
- NextRequest/NextResponse for Types
- await params as Promise (Next.js 15)

#### 5. SWR Data Fetching Hooks

Create **Hooks File** (`hooks/usePrivates.ts`):

**usePrivates() Hook:**
- SWR for List Fetching
- URL: /api/privates
- Returns: { privates, isLoading, error, mutate }

**usePrivate(id) Hook:**
- SWR for Single Item Fetching
- URL: /api/privates/{id}
- Conditional: only fetch if id is provided
- Returns: { private, isLoading, error, mutate }

**useCreatePrivate() Hook:**
- POST Request Function
- Mutate List after Success
- Error Handling with throw

**useUpdatePrivate(id) Hook:**
- PATCH Request Function
- Mutate Item + List after Success
- Error Handling with throw

**useDeletePrivate() Hook:**
- DELETE Request Function
- Mutate List after Success
- Error Handling with throw

**Important:**
- All Hooks are Client Components ("use client")
- Fetcher Function for SWR
- Proper Error Handling

#### 6. List Page

Create **List Page** (`app/(app)/privates/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Client Component for List Rendering

**Layout:**
- Container with Padding
- Header: Title + "New" Button (right)
- List Component Integration

#### 7. List Component

Create **List Component** (`components/private/PrivateList.tsx`):

**States:**
- Loading: Skeleton Grid (6 items)
- Error: Error Message Card
- Empty: EmptyState Component with "Create New" Action
- Success: Grid with Items

**Grid Layout:**
- Responsive: 1 col (mobile), 2 col (tablet), 3 col (desktop)
- Gap: gap-4

**Item Cards:**
- Link to Detail Page
- Hover Effect: border-primary
- Content: Title + Created Date (adapt to Entity fields)

**Important:**
- "use client" Directive
- usePrivates() Hook for Data
- Proper Loading/Error/Empty States

#### 8. Detail Page

Create **Detail Page** (`app/(app)/privates/[id]/page.tsx`):

**Functionality:**
- Server Component
- Auth Check
- Direct Supabase Fetch for SSR
- notFound() if Item doesn't exist
- Pass Data to Detail Component

**Security:**
- user_id Check in Query

#### 9. Detail Component

Create **Detail Component** (`components/private/PrivateDetail.tsx`):

**Props:**
- `private`: Private Object

**Layout:**
- Back Button (top left)
- Delete Button (top right)
- Card with Details:
  - ID
  - All Custom Fields (from Entity Definition)
  - Created/Updated Timestamps

**Delete Functionality:**
- Confirm Dialog
- useDeletePrivate() Hook
- Router Push to List after Success
- Loading State during Delete

**Important:**
- "use client" Directive
- Router for Navigation
- Confirmation before Delete



---

## Entity 4: Privacy

**Description:** Represents a user's privacy settings
**Table Name:** `privacys`

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID







### Instructions: Privacy

#### 1. TypeScript Types

Create **Types File** (`types/privacy.ts`):

**⚠️ CRITICAL: No Duplicate Fields!**
Each field must appear EXACTLY ONCE. Use consistent naming (snake_case for DB fields).

```typescript
// ✅ CORRECT: Each field once
export interface Privacy {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  // Custom fields:
  // No custom fields
}

// ❌ WRONG: Duplicate fields!
export interface Privacy {
  id: string;        // 1x
  userId: string;    // mixed camelCase
  created_at: Date;  // wrong type (use string)
  user_id: string;   // DUPLICATE (snake_case)!
  id: string;        // DUPLICATE!
}
```

**PrivacyListItem Interface:**
- Reduced version for List Views
- Only essential fields: id, created_at + first 3 custom fields

#### 2. Zod Validation Schema

Create **Schema File** (`lib/schemas/privacy.ts`):

**CreatePrivacySchema:**
- Zod Object with all custom fields
- Required vs Optional based on Field Definition
- Type Mapping:
  - string/text → z.string()
  - number/integer → z.number() / z.number().int()
  - boolean → z.boolean()
  - date/datetime → z.string() (ISO format)

**UpdatePrivacySchema:**
- Use Create Schema with .partial()
- All fields optional for updates

**Exports:**
- Schemas + Inferred Types

#### 3. API Routes - List & Create

Create **List/Create Route** (`app/api/privacys/route.ts`):

**GET /api/privacys (List):**
- Auth Check: User from Supabase
- Query Params: limit (default 20), cursor (pagination)
- Supabase Query:
  - Filter: user_id = current user
  - Order: created_at DESC
  - Limit: limit + 1 (for hasMore detection)
  - Cursor: created_at < cursor (if provided)
- Response: { data: items, meta: { next_cursor, has_more } }
- Error Handling: 401 (unauthorized), 500 (server error)

**POST /api/privacys (Create):**
- Auth Check: User from Supabase
- Body Validation: CreatePrivacySchema with safeParse
- Insert: Merge validated data + user_id
- Select: .select().single() for Created Object
- Response: { data } with 201 Status
- Error Handling: 400 (validation), 500 (server error)

#### 4. API Routes - Detail Operations

Create **Detail Route** (`app/api/privacys/[id]/route.ts`):

**GET /api/privacys/[id] (Read):**
- Params: id (await params promise)
- Auth Check: User from Supabase
- Query: .select().eq("id", id).eq("user_id", user.id).single()
- Response: { data }
- Error: 404 if not found

**PATCH /api/privacys/[id] (Update):**
- Params: id (await params promise)
- Auth Check + Body Validation
- Update: .update().eq("id").eq("user_id").select().single()
- Response: { data }
- Error: 400 (validation), 404 (not found)

**DELETE /api/privacys/[id] (Delete):**
- Params: id (await params promise)
- Auth Check
- Delete: .delete().eq("id").eq("user_id")
- Response: 204 No Content
- Error: 404 (not found)

**Important for all Routes:**
- User ID Check prevents access to other users' data
- NextRequest/NextResponse for Types
- await params as Promise (Next.js 15)

#### 5. SWR Data Fetching Hooks

Create **Hooks File** (`hooks/usePrivacys.ts`):

**usePrivacys() Hook:**
- SWR for List Fetching
- URL: /api/privacys
- Returns: { privacys, isLoading, error, mutate }

**usePrivacy(id) Hook:**
- SWR for Single Item Fetching
- URL: /api/privacys/{id}
- Conditional: only fetch if id is provided
- Returns: { privacy, isLoading, error, mutate }

**useCreatePrivacy() Hook:**
- POST Request Function
- Mutate List after Success
- Error Handling with throw

**useUpdatePrivacy(id) Hook:**
- PATCH Request Function
- Mutate Item + List after Success
- Error Handling with throw

**useDeletePrivacy() Hook:**
- DELETE Request Function
- Mutate List after Success
- Error Handling with throw

**Important:**
- All Hooks are Client Components ("use client")
- Fetcher Function for SWR
- Proper Error Handling

#### 6. List Page

Create **List Page** (`app/(app)/privacys/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Client Component for List Rendering

**Layout:**
- Container with Padding
- Header: Title + "New" Button (right)
- List Component Integration

#### 7. List Component

Create **List Component** (`components/privacy/PrivacyList.tsx`):

**States:**
- Loading: Skeleton Grid (6 items)
- Error: Error Message Card
- Empty: EmptyState Component with "Create New" Action
- Success: Grid with Items

**Grid Layout:**
- Responsive: 1 col (mobile), 2 col (tablet), 3 col (desktop)
- Gap: gap-4

**Item Cards:**
- Link to Detail Page
- Hover Effect: border-primary
- Content: Title + Created Date (adapt to Entity fields)

**Important:**
- "use client" Directive
- usePrivacys() Hook for Data
- Proper Loading/Error/Empty States

#### 8. Detail Page

Create **Detail Page** (`app/(app)/privacys/[id]/page.tsx`):

**Functionality:**
- Server Component
- Auth Check
- Direct Supabase Fetch for SSR
- notFound() if Item doesn't exist
- Pass Data to Detail Component

**Security:**
- user_id Check in Query

#### 9. Detail Component

Create **Detail Component** (`components/privacy/PrivacyDetail.tsx`):

**Props:**
- `privacy`: Privacy Object

**Layout:**
- Back Button (top left)
- Delete Button (top right)
- Card with Details:
  - ID
  - All Custom Fields (from Entity Definition)
  - Created/Updated Timestamps

**Delete Functionality:**
- Confirm Dialog
- useDeletePrivacy() Hook
- Router Push to List after Success
- Loading State during Delete

**Important:**
- "use client" Directive
- Router for Navigation
- Confirmation before Delete



---

## Entity 5: Key

**Description:** Represents a cryptographic key
**Table Name:** `keys`

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of key







### Instructions: Key

#### 1. TypeScript Types

Create **Types File** (`types/key.ts`):

**⚠️ CRITICAL: No Duplicate Fields!**
Each field must appear EXACTLY ONCE. Use consistent naming (snake_case for DB fields).

```typescript
// ✅ CORRECT: Each field once
export interface Key {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  // Custom fields:
  type: string;
}

// ❌ WRONG: Duplicate fields!
export interface Key {
  id: string;        // 1x
  userId: string;    // mixed camelCase
  created_at: Date;  // wrong type (use string)
  user_id: string;   // DUPLICATE (snake_case)!
  id: string;        // DUPLICATE!
}
```

**KeyListItem Interface:**
- Reduced version for List Views
- Only essential fields: id, created_at + first 3 custom fields

#### 2. Zod Validation Schema

Create **Schema File** (`lib/schemas/key.ts`):

**CreateKeySchema:**
- Zod Object with all custom fields
- Required vs Optional based on Field Definition
- Type Mapping:
  - string/text → z.string()
  - number/integer → z.number() / z.number().int()
  - boolean → z.boolean()
  - date/datetime → z.string() (ISO format)

**UpdateKeySchema:**
- Use Create Schema with .partial()
- All fields optional for updates

**Exports:**
- Schemas + Inferred Types

#### 3. API Routes - List & Create

Create **List/Create Route** (`app/api/keys/route.ts`):

**GET /api/keys (List):**
- Auth Check: User from Supabase
- Query Params: limit (default 20), cursor (pagination)
- Supabase Query:
  - Filter: user_id = current user
  - Order: created_at DESC
  - Limit: limit + 1 (for hasMore detection)
  - Cursor: created_at < cursor (if provided)
- Response: { data: items, meta: { next_cursor, has_more } }
- Error Handling: 401 (unauthorized), 500 (server error)

**POST /api/keys (Create):**
- Auth Check: User from Supabase
- Body Validation: CreateKeySchema with safeParse
- Insert: Merge validated data + user_id
- Select: .select().single() for Created Object
- Response: { data } with 201 Status
- Error Handling: 400 (validation), 500 (server error)

#### 4. API Routes - Detail Operations

Create **Detail Route** (`app/api/keys/[id]/route.ts`):

**GET /api/keys/[id] (Read):**
- Params: id (await params promise)
- Auth Check: User from Supabase
- Query: .select().eq("id", id).eq("user_id", user.id).single()
- Response: { data }
- Error: 404 if not found

**PATCH /api/keys/[id] (Update):**
- Params: id (await params promise)
- Auth Check + Body Validation
- Update: .update().eq("id").eq("user_id").select().single()
- Response: { data }
- Error: 400 (validation), 404 (not found)

**DELETE /api/keys/[id] (Delete):**
- Params: id (await params promise)
- Auth Check
- Delete: .delete().eq("id").eq("user_id")
- Response: 204 No Content
- Error: 404 (not found)

**Important for all Routes:**
- User ID Check prevents access to other users' data
- NextRequest/NextResponse for Types
- await params as Promise (Next.js 15)

#### 5. SWR Data Fetching Hooks

Create **Hooks File** (`hooks/useKeys.ts`):

**useKeys() Hook:**
- SWR for List Fetching
- URL: /api/keys
- Returns: { keys, isLoading, error, mutate }

**useKey(id) Hook:**
- SWR for Single Item Fetching
- URL: /api/keys/{id}
- Conditional: only fetch if id is provided
- Returns: { key, isLoading, error, mutate }

**useCreateKey() Hook:**
- POST Request Function
- Mutate List after Success
- Error Handling with throw

**useUpdateKey(id) Hook:**
- PATCH Request Function
- Mutate Item + List after Success
- Error Handling with throw

**useDeleteKey() Hook:**
- DELETE Request Function
- Mutate List after Success
- Error Handling with throw

**Important:**
- All Hooks are Client Components ("use client")
- Fetcher Function for SWR
- Proper Error Handling

#### 6. List Page

Create **List Page** (`app/(app)/keys/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Client Component for List Rendering

**Layout:**
- Container with Padding
- Header: Title + "New" Button (right)
- List Component Integration

#### 7. List Component

Create **List Component** (`components/key/KeyList.tsx`):

**States:**
- Loading: Skeleton Grid (6 items)
- Error: Error Message Card
- Empty: EmptyState Component with "Create New" Action
- Success: Grid with Items

**Grid Layout:**
- Responsive: 1 col (mobile), 2 col (tablet), 3 col (desktop)
- Gap: gap-4

**Item Cards:**
- Link to Detail Page
- Hover Effect: border-primary
- Content: Title + Created Date (adapt to Entity fields)

**Important:**
- "use client" Directive
- useKeys() Hook for Data
- Proper Loading/Error/Empty States

#### 8. Detail Page

Create **Detail Page** (`app/(app)/keys/[id]/page.tsx`):

**Functionality:**
- Server Component
- Auth Check
- Direct Supabase Fetch for SSR
- notFound() if Item doesn't exist
- Pass Data to Detail Component

**Security:**
- user_id Check in Query

#### 9. Detail Component

Create **Detail Component** (`components/key/KeyDetail.tsx`):

**Props:**
- `key`: Key Object

**Layout:**
- Back Button (top left)
- Delete Button (top right)
- Card with Details:
  - ID
  - All Custom Fields (from Entity Definition)
  - Created/Updated Timestamps

**Delete Functionality:**
- Confirm Dialog
- useDeleteKey() Hook
- Router Push to List after Success
- Loading State during Delete

**Important:**
- "use client" Directive
- Router for Navigation
- Confirmation before Delete



---

## Entity 6: End

**Description:** Represents the end of a conversation or call
**Table Name:** `ends`

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of conversation or call



**Related Flows:**
- **Private Messaging:** The user initiates a private conversation → The user sends a message → The user receives a message



### Instructions: End

#### 1. TypeScript Types

Create **Types File** (`types/end.ts`):

**⚠️ CRITICAL: No Duplicate Fields!**
Each field must appear EXACTLY ONCE. Use consistent naming (snake_case for DB fields).

```typescript
// ✅ CORRECT: Each field once
export interface End {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  // Custom fields:
  type: string;
}

// ❌ WRONG: Duplicate fields!
export interface End {
  id: string;        // 1x
  userId: string;    // mixed camelCase
  created_at: Date;  // wrong type (use string)
  user_id: string;   // DUPLICATE (snake_case)!
  id: string;        // DUPLICATE!
}
```

**EndListItem Interface:**
- Reduced version for List Views
- Only essential fields: id, created_at + first 3 custom fields

#### 2. Zod Validation Schema

Create **Schema File** (`lib/schemas/end.ts`):

**CreateEndSchema:**
- Zod Object with all custom fields
- Required vs Optional based on Field Definition
- Type Mapping:
  - string/text → z.string()
  - number/integer → z.number() / z.number().int()
  - boolean → z.boolean()
  - date/datetime → z.string() (ISO format)

**UpdateEndSchema:**
- Use Create Schema with .partial()
- All fields optional for updates

**Exports:**
- Schemas + Inferred Types

#### 3. API Routes - List & Create

Create **List/Create Route** (`app/api/ends/route.ts`):

**GET /api/ends (List):**
- Auth Check: User from Supabase
- Query Params: limit (default 20), cursor (pagination)
- Supabase Query:
  - Filter: user_id = current user
  - Order: created_at DESC
  - Limit: limit + 1 (for hasMore detection)
  - Cursor: created_at < cursor (if provided)
- Response: { data: items, meta: { next_cursor, has_more } }
- Error Handling: 401 (unauthorized), 500 (server error)

**POST /api/ends (Create):**
- Auth Check: User from Supabase
- Body Validation: CreateEndSchema with safeParse
- Insert: Merge validated data + user_id
- Select: .select().single() for Created Object
- Response: { data } with 201 Status
- Error Handling: 400 (validation), 500 (server error)

#### 4. API Routes - Detail Operations

Create **Detail Route** (`app/api/ends/[id]/route.ts`):

**GET /api/ends/[id] (Read):**
- Params: id (await params promise)
- Auth Check: User from Supabase
- Query: .select().eq("id", id).eq("user_id", user.id).single()
- Response: { data }
- Error: 404 if not found

**PATCH /api/ends/[id] (Update):**
- Params: id (await params promise)
- Auth Check + Body Validation
- Update: .update().eq("id").eq("user_id").select().single()
- Response: { data }
- Error: 400 (validation), 404 (not found)

**DELETE /api/ends/[id] (Delete):**
- Params: id (await params promise)
- Auth Check
- Delete: .delete().eq("id").eq("user_id")
- Response: 204 No Content
- Error: 404 (not found)

**Important for all Routes:**
- User ID Check prevents access to other users' data
- NextRequest/NextResponse for Types
- await params as Promise (Next.js 15)

#### 5. SWR Data Fetching Hooks

Create **Hooks File** (`hooks/useEnds.ts`):

**useEnds() Hook:**
- SWR for List Fetching
- URL: /api/ends
- Returns: { ends, isLoading, error, mutate }

**useEnd(id) Hook:**
- SWR for Single Item Fetching
- URL: /api/ends/{id}
- Conditional: only fetch if id is provided
- Returns: { end, isLoading, error, mutate }

**useCreateEnd() Hook:**
- POST Request Function
- Mutate List after Success
- Error Handling with throw

**useUpdateEnd(id) Hook:**
- PATCH Request Function
- Mutate Item + List after Success
- Error Handling with throw

**useDeleteEnd() Hook:**
- DELETE Request Function
- Mutate List after Success
- Error Handling with throw

**Important:**
- All Hooks are Client Components ("use client")
- Fetcher Function for SWR
- Proper Error Handling

#### 6. List Page

Create **List Page** (`app/(app)/ends/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Client Component for List Rendering

**Layout:**
- Container with Padding
- Header: Title + "New" Button (right)
- List Component Integration

#### 7. List Component

Create **List Component** (`components/end/EndList.tsx`):

**States:**
- Loading: Skeleton Grid (6 items)
- Error: Error Message Card
- Empty: EmptyState Component with "Create New" Action
- Success: Grid with Items

**Grid Layout:**
- Responsive: 1 col (mobile), 2 col (tablet), 3 col (desktop)
- Gap: gap-4

**Item Cards:**
- Link to Detail Page
- Hover Effect: border-primary
- Content: Title + Created Date (adapt to Entity fields)

**Important:**
- "use client" Directive
- useEnds() Hook for Data
- Proper Loading/Error/Empty States

#### 8. Detail Page

Create **Detail Page** (`app/(app)/ends/[id]/page.tsx`):

**Functionality:**
- Server Component
- Auth Check
- Direct Supabase Fetch for SSR
- notFound() if Item doesn't exist
- Pass Data to Detail Component

**Security:**
- user_id Check in Query

#### 9. Detail Component

Create **Detail Component** (`components/end/EndDetail.tsx`):

**Props:**
- `end`: End Object

**Layout:**
- Back Button (top left)
- Delete Button (top right)
- Card with Details:
  - ID
  - All Custom Fields (from Entity Definition)
  - Created/Updated Timestamps

**Delete Functionality:**
- Confirm Dialog
- useDeleteEnd() Hook
- Router Push to List after Success
- Loading State during Delete

**Important:**
- "use client" Directive
- Router for Navigation
- Confirmation before Delete



---

## Entity 7: Messaging

**Description:** Represents a messaging conversation
**Table Name:** `messagings`

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of messaging conversation



**Related Flows:**
- **Private Messaging:** The user initiates a private conversation → The user sends a message → The user receives a message



### Instructions: Messaging

#### 1. TypeScript Types

Create **Types File** (`types/messaging.ts`):

**⚠️ CRITICAL: No Duplicate Fields!**
Each field must appear EXACTLY ONCE. Use consistent naming (snake_case for DB fields).

```typescript
// ✅ CORRECT: Each field once
export interface Messaging {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  // Custom fields:
  type: string;
}

// ❌ WRONG: Duplicate fields!
export interface Messaging {
  id: string;        // 1x
  userId: string;    // mixed camelCase
  created_at: Date;  // wrong type (use string)
  user_id: string;   // DUPLICATE (snake_case)!
  id: string;        // DUPLICATE!
}
```

**MessagingListItem Interface:**
- Reduced version for List Views
- Only essential fields: id, created_at + first 3 custom fields

#### 2. Zod Validation Schema

Create **Schema File** (`lib/schemas/messaging.ts`):

**CreateMessagingSchema:**
- Zod Object with all custom fields
- Required vs Optional based on Field Definition
- Type Mapping:
  - string/text → z.string()
  - number/integer → z.number() / z.number().int()
  - boolean → z.boolean()
  - date/datetime → z.string() (ISO format)

**UpdateMessagingSchema:**
- Use Create Schema with .partial()
- All fields optional for updates

**Exports:**
- Schemas + Inferred Types

#### 3. API Routes - List & Create

Create **List/Create Route** (`app/api/messagings/route.ts`):

**GET /api/messagings (List):**
- Auth Check: User from Supabase
- Query Params: limit (default 20), cursor (pagination)
- Supabase Query:
  - Filter: user_id = current user
  - Order: created_at DESC
  - Limit: limit + 1 (for hasMore detection)
  - Cursor: created_at < cursor (if provided)
- Response: { data: items, meta: { next_cursor, has_more } }
- Error Handling: 401 (unauthorized), 500 (server error)

**POST /api/messagings (Create):**
- Auth Check: User from Supabase
- Body Validation: CreateMessagingSchema with safeParse
- Insert: Merge validated data + user_id
- Select: .select().single() for Created Object
- Response: { data } with 201 Status
- Error Handling: 400 (validation), 500 (server error)

#### 4. API Routes - Detail Operations

Create **Detail Route** (`app/api/messagings/[id]/route.ts`):

**GET /api/messagings/[id] (Read):**
- Params: id (await params promise)
- Auth Check: User from Supabase
- Query: .select().eq("id", id).eq("user_id", user.id).single()
- Response: { data }
- Error: 404 if not found

**PATCH /api/messagings/[id] (Update):**
- Params: id (await params promise)
- Auth Check + Body Validation
- Update: .update().eq("id").eq("user_id").select().single()
- Response: { data }
- Error: 400 (validation), 404 (not found)

**DELETE /api/messagings/[id] (Delete):**
- Params: id (await params promise)
- Auth Check
- Delete: .delete().eq("id").eq("user_id")
- Response: 204 No Content
- Error: 404 (not found)

**Important for all Routes:**
- User ID Check prevents access to other users' data
- NextRequest/NextResponse for Types
- await params as Promise (Next.js 15)

#### 5. SWR Data Fetching Hooks

Create **Hooks File** (`hooks/useMessagings.ts`):

**useMessagings() Hook:**
- SWR for List Fetching
- URL: /api/messagings
- Returns: { messagings, isLoading, error, mutate }

**useMessaging(id) Hook:**
- SWR for Single Item Fetching
- URL: /api/messagings/{id}
- Conditional: only fetch if id is provided
- Returns: { messaging, isLoading, error, mutate }

**useCreateMessaging() Hook:**
- POST Request Function
- Mutate List after Success
- Error Handling with throw

**useUpdateMessaging(id) Hook:**
- PATCH Request Function
- Mutate Item + List after Success
- Error Handling with throw

**useDeleteMessaging() Hook:**
- DELETE Request Function
- Mutate List after Success
- Error Handling with throw

**Important:**
- All Hooks are Client Components ("use client")
- Fetcher Function for SWR
- Proper Error Handling

#### 6. List Page

Create **List Page** (`app/(app)/messagings/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Client Component for List Rendering

**Layout:**
- Container with Padding
- Header: Title + "New" Button (right)
- List Component Integration

#### 7. List Component

Create **List Component** (`components/messaging/MessagingList.tsx`):

**States:**
- Loading: Skeleton Grid (6 items)
- Error: Error Message Card
- Empty: EmptyState Component with "Create New" Action
- Success: Grid with Items

**Grid Layout:**
- Responsive: 1 col (mobile), 2 col (tablet), 3 col (desktop)
- Gap: gap-4

**Item Cards:**
- Link to Detail Page
- Hover Effect: border-primary
- Content: Title + Created Date (adapt to Entity fields)

**Important:**
- "use client" Directive
- useMessagings() Hook for Data
- Proper Loading/Error/Empty States

#### 8. Detail Page

Create **Detail Page** (`app/(app)/messagings/[id]/page.tsx`):

**Functionality:**
- Server Component
- Auth Check
- Direct Supabase Fetch for SSR
- notFound() if Item doesn't exist
- Pass Data to Detail Component

**Security:**
- user_id Check in Query

#### 9. Detail Component

Create **Detail Component** (`components/messaging/MessagingDetail.tsx`):

**Props:**
- `messaging`: Messaging Object

**Layout:**
- Back Button (top left)
- Delete Button (top right)
- Card with Details:
  - ID
  - All Custom Fields (from Entity Definition)
  - Created/Updated Timestamps

**Delete Functionality:**
- Confirm Dialog
- useDeleteMessaging() Hook
- Router Push to List after Success
- Loading State during Delete

**Important:**
- "use client" Directive
- Router for Navigation
- Confirmation before Delete



---

## Entity 8: Voice

**Description:** Represents a voice call
**Table Name:** `voices`

**Fields:**
- `id`: uuid - Primary key
- `created_at`: datetime - Creation timestamp
- `updated_at`: datetime - Last update timestamp
- `user_id`: uuid - Owner user ID
- `type`: enum - Type of voice call







### Instructions: Voice

#### 1. TypeScript Types

Create **Types File** (`types/voice.ts`):

**⚠️ CRITICAL: No Duplicate Fields!**
Each field must appear EXACTLY ONCE. Use consistent naming (snake_case for DB fields).

```typescript
// ✅ CORRECT: Each field once
export interface Voice {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  // Custom fields:
  type: string;
}

// ❌ WRONG: Duplicate fields!
export interface Voice {
  id: string;        // 1x
  userId: string;    // mixed camelCase
  created_at: Date;  // wrong type (use string)
  user_id: string;   // DUPLICATE (snake_case)!
  id: string;        // DUPLICATE!
}
```

**VoiceListItem Interface:**
- Reduced version for List Views
- Only essential fields: id, created_at + first 3 custom fields

#### 2. Zod Validation Schema

Create **Schema File** (`lib/schemas/voice.ts`):

**CreateVoiceSchema:**
- Zod Object with all custom fields
- Required vs Optional based on Field Definition
- Type Mapping:
  - string/text → z.string()
  - number/integer → z.number() / z.number().int()
  - boolean → z.boolean()
  - date/datetime → z.string() (ISO format)

**UpdateVoiceSchema:**
- Use Create Schema with .partial()
- All fields optional for updates

**Exports:**
- Schemas + Inferred Types

#### 3. API Routes - List & Create

Create **List/Create Route** (`app/api/voices/route.ts`):

**GET /api/voices (List):**
- Auth Check: User from Supabase
- Query Params: limit (default 20), cursor (pagination)
- Supabase Query:
  - Filter: user_id = current user
  - Order: created_at DESC
  - Limit: limit + 1 (for hasMore detection)
  - Cursor: created_at < cursor (if provided)
- Response: { data: items, meta: { next_cursor, has_more } }
- Error Handling: 401 (unauthorized), 500 (server error)

**POST /api/voices (Create):**
- Auth Check: User from Supabase
- Body Validation: CreateVoiceSchema with safeParse
- Insert: Merge validated data + user_id
- Select: .select().single() for Created Object
- Response: { data } with 201 Status
- Error Handling: 400 (validation), 500 (server error)

#### 4. API Routes - Detail Operations

Create **Detail Route** (`app/api/voices/[id]/route.ts`):

**GET /api/voices/[id] (Read):**
- Params: id (await params promise)
- Auth Check: User from Supabase
- Query: .select().eq("id", id).eq("user_id", user.id).single()
- Response: { data }
- Error: 404 if not found

**PATCH /api/voices/[id] (Update):**
- Params: id (await params promise)
- Auth Check + Body Validation
- Update: .update().eq("id").eq("user_id").select().single()
- Response: { data }
- Error: 400 (validation), 404 (not found)

**DELETE /api/voices/[id] (Delete):**
- Params: id (await params promise)
- Auth Check
- Delete: .delete().eq("id").eq("user_id")
- Response: 204 No Content
- Error: 404 (not found)

**Important for all Routes:**
- User ID Check prevents access to other users' data
- NextRequest/NextResponse for Types
- await params as Promise (Next.js 15)

#### 5. SWR Data Fetching Hooks

Create **Hooks File** (`hooks/useVoices.ts`):

**useVoices() Hook:**
- SWR for List Fetching
- URL: /api/voices
- Returns: { voices, isLoading, error, mutate }

**useVoice(id) Hook:**
- SWR for Single Item Fetching
- URL: /api/voices/{id}
- Conditional: only fetch if id is provided
- Returns: { voice, isLoading, error, mutate }

**useCreateVoice() Hook:**
- POST Request Function
- Mutate List after Success
- Error Handling with throw

**useUpdateVoice(id) Hook:**
- PATCH Request Function
- Mutate Item + List after Success
- Error Handling with throw

**useDeleteVoice() Hook:**
- DELETE Request Function
- Mutate List after Success
- Error Handling with throw

**Important:**
- All Hooks are Client Components ("use client")
- Fetcher Function for SWR
- Proper Error Handling

#### 6. List Page

Create **List Page** (`app/(app)/voices/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Client Component for List Rendering

**Layout:**
- Container with Padding
- Header: Title + "New" Button (right)
- List Component Integration

#### 7. List Component

Create **List Component** (`components/voice/VoiceList.tsx`):

**States:**
- Loading: Skeleton Grid (6 items)
- Error: Error Message Card
- Empty: EmptyState Component with "Create New" Action
- Success: Grid with Items

**Grid Layout:**
- Responsive: 1 col (mobile), 2 col (tablet), 3 col (desktop)
- Gap: gap-4

**Item Cards:**
- Link to Detail Page
- Hover Effect: border-primary
- Content: Title + Created Date (adapt to Entity fields)

**Important:**
- "use client" Directive
- useVoices() Hook for Data
- Proper Loading/Error/Empty States

#### 8. Detail Page

Create **Detail Page** (`app/(app)/voices/[id]/page.tsx`):

**Functionality:**
- Server Component
- Auth Check
- Direct Supabase Fetch for SSR
- notFound() if Item doesn't exist
- Pass Data to Detail Component

**Security:**
- user_id Check in Query

#### 9. Detail Component

Create **Detail Component** (`components/voice/VoiceDetail.tsx`):

**Props:**
- `voice`: Voice Object

**Layout:**
- Back Button (top left)
- Delete Button (top right)
- Card with Details:
  - ID
  - All Custom Fields (from Entity Definition)
  - Created/Updated Timestamps

**Delete Functionality:**
- Confirm Dialog
- useDeleteVoice() Hook
- Router Push to List after Success
- Loading State during Delete

**Important:**
- "use client" Directive
- Router for Navigation
- Confirmation before Delete


---

## Validation Checklist

Verify for EACH Entity:
- [ ] Types File created with correct Interfaces
- [ ] Zod Schema File with Create + Update Schemas
- [ ] API List/Create Route works
- [ ] API Detail Route works (GET, PATCH, DELETE)
- [ ] SWR Hooks File with all 5 Hooks
- [ ] List Page with Auth Check
- [ ] List Component with Loading/Error/Empty States
- [ ] Detail Page with Auth Check
- [ ] Detail Component with Delete Functionality

**Test per Entity:**
1. **Create:** Go to /builds/new → Create Item → Redirect to List
2. **List:** List shows new Item
3. **Read:** Click on Item → Detail Page loads
4. **Update:** (built in Phase 08-forms)
5. **Delete:** Delete Button → Confirmation → Back to List

**API Tests:**
- POST /api/[entity]s → 201 with Created Item
- GET /api/[entity]s → 200 with Array
- GET /api/[entity]s/[id] → 200 with Object
- PATCH /api/[entity]s/[id] → 200 with Updated Item
- DELETE /api/[entity]s/[id] → 204

---

## Troubleshooting

**API 401 Errors:**
- Check Auth Check in all Routes
- Supabase Client correctly created?
- User is correctly retrieved?

**RLS Policy Errors:**
- Check if user_id is in Query
- RLS Policies active in Supabase?

**Pagination not working:**
- Cursor Logic: created_at < cursor
- hasMore Detection: length > limit

**SWR not updating:**
- Call mutate() after Mutations
- Fetcher Function correct?

**TypeScript Errors:**
- Types from database.types.ts generated?
- Zod Schemas export inferred Types

---

**Continue to:** `07-dashboard.md`
