# 02 - Database Schema

> **Agent:** Database Agent 🗄️
> **Goal:** Set up Supabase database with all tables and policies

---

## ⚠️ CRITICAL: Avoid Duplicate Fields

**NEVER define these fields in your custom schema - they are automatically added:**
- `id` - UUID Primary Key (auto-generated)
- `user_id` - UUID Foreign Key to auth.users (auto-generated)
- `created_at` - TIMESTAMPTZ (auto-generated)
- `updated_at` - TIMESTAMPTZ (auto-generated)

**Only define entity-SPECIFIC fields in your tables.**

Example of WRONG vs RIGHT:
```sql
-- WRONG: Duplicate fields!
CREATE TABLE items (
  id UUID PRIMARY KEY,       -- Already auto-added!
  user_id UUID,              -- Already auto-added!
  created_at TIMESTAMPTZ,    -- Already auto-added!
  name TEXT,
  id UUID,                   -- DUPLICATE! Will cause error!
  created_at TIMESTAMPTZ     -- DUPLICATE! Will cause error!
);

-- RIGHT: Only custom fields
CREATE TABLE items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  -- Only custom fields below:
  name TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'active'
);
```

---

## Context

**Product:** Echo
**Entities:** Build, Signal, Private, Privacy, Key, End, Messaging, Voice

### Data Model

**Build**: Represents a build of the application
- `id`: UUID (required) - Primary key
- `created_at`: TIMESTAMPTZ (required) - Creation timestamp
- `updated_at`: TIMESTAMPTZ (required) - Last update timestamp
- `user_id`: UUID (required) - Owner user ID
- `version`: TEXT (required) - Version number of the build


**Signal**: Represents a signal, such as a message or call
- `id`: UUID (required) - Primary key
- `created_at`: TIMESTAMPTZ (required) - Creation timestamp
- `updated_at`: TIMESTAMPTZ (required) - Last update timestamp
- `user_id`: UUID (required) - Owner user ID
- `type`: TEXT (required, enum: message, call) - Type of signal


**Private**: Represents a private conversation or group
- `id`: UUID (required) - Primary key
- `created_at`: TIMESTAMPTZ (required) - Creation timestamp
- `updated_at`: TIMESTAMPTZ (required) - Last update timestamp
- `user_id`: UUID (required) - Owner user ID
- `type`: TEXT (required, enum: conversation, group) - Type of private conversation or group


**Privacy**: Represents a user's privacy settings
- `id`: UUID (required) - Primary key
- `created_at`: TIMESTAMPTZ (required) - Creation timestamp
- `updated_at`: TIMESTAMPTZ (required) - Last update timestamp
- `user_id`: UUID (required) - Owner user ID


**Key**: Represents a cryptographic key
- `id`: UUID (required) - Primary key
- `created_at`: TIMESTAMPTZ (required) - Creation timestamp
- `updated_at`: TIMESTAMPTZ (required) - Last update timestamp
- `user_id`: UUID (required) - Owner user ID
- `type`: TEXT (required, enum: public, private) - Type of key


**End**: Represents the end of a conversation or call
- `id`: UUID (required) - Primary key
- `created_at`: TIMESTAMPTZ (required) - Creation timestamp
- `updated_at`: TIMESTAMPTZ (required) - Last update timestamp
- `user_id`: UUID (required) - Owner user ID
- `type`: TEXT (required, enum: conversation, call) - Type of conversation or call


**Messaging**: Represents a messaging conversation
- `id`: UUID (required) - Primary key
- `created_at`: TIMESTAMPTZ (required) - Creation timestamp
- `updated_at`: TIMESTAMPTZ (required) - Last update timestamp
- `user_id`: UUID (required) - Owner user ID
- `type`: TEXT (required, enum: private, group) - Type of messaging conversation


**Voice**: Represents a voice call
- `id`: UUID (required) - Primary key
- `created_at`: TIMESTAMPTZ (required) - Creation timestamp
- `updated_at`: TIMESTAMPTZ (required) - Last update timestamp
- `user_id`: UUID (required) - Owner user ID
- `type`: TEXT (required, enum: private, group) - Type of voice call


---

## Instructions

### 1. Profiles Table

Create a **profiles** table that syncs with auth.users:

**Requirements:**
- Primary Key: `id` (UUID) - Reference to auth.users(id)
- Fields: username (unique), display_name, avatar_url, bio
- Timestamps: created_at, updated_at
- RLS: Everyone can view profiles, only owner can update
- Auto-Trigger: Automatically create profile on user signup

**Important:**
- ON DELETE CASCADE for foreign key to auth.users
- Trigger Function for auto-create on signup
- Public read access, owner-only write access

### 2. Entity Tables

Create a table for each entity:

**1. Build Table (`builds`):**
Purpose: Represents a build of the application

```sql
CREATE TABLE builds (
  -- Standard fields
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Entity-specific fields
  version TEXT NOT NULL -- Version number of the build

);

-- Indexes for performance
CREATE INDEX builds_user_id_idx ON builds(user_id);
CREATE INDEX builds_created_at_idx ON builds(created_at DESC);



-- RLS Policies (Granular)
ALTER TABLE builds ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can only view their own records
CREATE POLICY "builds_select_own"
  ON builds FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Users can only create records for themselves
CREATE POLICY "builds_insert_own"
  ON builds FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Users can only update their own records
CREATE POLICY "builds_update_own"
  ON builds FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- DELETE: Users can only delete their own records
CREATE POLICY "builds_delete_own"
  ON builds FOR DELETE
  USING (auth.uid() = user_id);
```



**2. Signal Table (`signals`):**
Purpose: Represents a signal, such as a message or call

```sql
CREATE TABLE signals (
  -- Standard fields
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Entity-specific fields
  type TEXT NOT NULL -- Type of signal,

  -- Enum constraints
  CONSTRAINT signals_type_check CHECK (type IN ('message', 'call'))
);

-- Indexes for performance
CREATE INDEX signals_user_id_idx ON signals(user_id);
CREATE INDEX signals_created_at_idx ON signals(created_at DESC);



-- RLS Policies (Granular)
ALTER TABLE signals ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can only view their own records
CREATE POLICY "signals_select_own"
  ON signals FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Users can only create records for themselves
CREATE POLICY "signals_insert_own"
  ON signals FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Users can only update their own records
CREATE POLICY "signals_update_own"
  ON signals FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- DELETE: Users can only delete their own records
CREATE POLICY "signals_delete_own"
  ON signals FOR DELETE
  USING (auth.uid() = user_id);
```



**3. Private Table (`privates`):**
Purpose: Represents a private conversation or group

```sql
CREATE TABLE privates (
  -- Standard fields
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Entity-specific fields
  type TEXT NOT NULL -- Type of private conversation or group,

  -- Enum constraints
  CONSTRAINT privates_type_check CHECK (type IN ('conversation', 'group'))
);

-- Indexes for performance
CREATE INDEX privates_user_id_idx ON privates(user_id);
CREATE INDEX privates_created_at_idx ON privates(created_at DESC);



-- RLS Policies (Granular)
ALTER TABLE privates ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can only view their own records
CREATE POLICY "privates_select_own"
  ON privates FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Users can only create records for themselves
CREATE POLICY "privates_insert_own"
  ON privates FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Users can only update their own records
CREATE POLICY "privates_update_own"
  ON privates FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- DELETE: Users can only delete their own records
CREATE POLICY "privates_delete_own"
  ON privates FOR DELETE
  USING (auth.uid() = user_id);
```



**4. Privacy Table (`privacys`):**
Purpose: Represents a user's privacy settings

```sql
CREATE TABLE privacys (
  -- Standard fields
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Entity-specific fields


);

-- Indexes for performance
CREATE INDEX privacys_user_id_idx ON privacys(user_id);
CREATE INDEX privacys_created_at_idx ON privacys(created_at DESC);



-- RLS Policies (Granular)
ALTER TABLE privacys ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can only view their own records
CREATE POLICY "privacys_select_own"
  ON privacys FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Users can only create records for themselves
CREATE POLICY "privacys_insert_own"
  ON privacys FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Users can only update their own records
CREATE POLICY "privacys_update_own"
  ON privacys FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- DELETE: Users can only delete their own records
CREATE POLICY "privacys_delete_own"
  ON privacys FOR DELETE
  USING (auth.uid() = user_id);
```



**5. Key Table (`keys`):**
Purpose: Represents a cryptographic key

```sql
CREATE TABLE keys (
  -- Standard fields
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Entity-specific fields
  type TEXT NOT NULL -- Type of key,

  -- Enum constraints
  CONSTRAINT keys_type_check CHECK (type IN ('public', 'private'))
);

-- Indexes for performance
CREATE INDEX keys_user_id_idx ON keys(user_id);
CREATE INDEX keys_created_at_idx ON keys(created_at DESC);



-- RLS Policies (Granular)
ALTER TABLE keys ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can only view their own records
CREATE POLICY "keys_select_own"
  ON keys FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Users can only create records for themselves
CREATE POLICY "keys_insert_own"
  ON keys FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Users can only update their own records
CREATE POLICY "keys_update_own"
  ON keys FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- DELETE: Users can only delete their own records
CREATE POLICY "keys_delete_own"
  ON keys FOR DELETE
  USING (auth.uid() = user_id);
```



**6. End Table (`ends`):**
Purpose: Represents the end of a conversation or call

```sql
CREATE TABLE ends (
  -- Standard fields
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Entity-specific fields
  type TEXT NOT NULL -- Type of conversation or call,

  -- Enum constraints
  CONSTRAINT ends_type_check CHECK (type IN ('conversation', 'call'))
);

-- Indexes for performance
CREATE INDEX ends_user_id_idx ON ends(user_id);
CREATE INDEX ends_created_at_idx ON ends(created_at DESC);



-- RLS Policies (Granular)
ALTER TABLE ends ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can only view their own records
CREATE POLICY "ends_select_own"
  ON ends FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Users can only create records for themselves
CREATE POLICY "ends_insert_own"
  ON ends FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Users can only update their own records
CREATE POLICY "ends_update_own"
  ON ends FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- DELETE: Users can only delete their own records
CREATE POLICY "ends_delete_own"
  ON ends FOR DELETE
  USING (auth.uid() = user_id);
```



**7. Messaging Table (`messagings`):**
Purpose: Represents a messaging conversation

```sql
CREATE TABLE messagings (
  -- Standard fields
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Entity-specific fields
  type TEXT NOT NULL -- Type of messaging conversation,

  -- Enum constraints
  CONSTRAINT messagings_type_check CHECK (type IN ('private', 'group'))
);

-- Indexes for performance
CREATE INDEX messagings_user_id_idx ON messagings(user_id);
CREATE INDEX messagings_created_at_idx ON messagings(created_at DESC);



-- RLS Policies (Granular)
ALTER TABLE messagings ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can only view their own records
CREATE POLICY "messagings_select_own"
  ON messagings FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Users can only create records for themselves
CREATE POLICY "messagings_insert_own"
  ON messagings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Users can only update their own records
CREATE POLICY "messagings_update_own"
  ON messagings FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- DELETE: Users can only delete their own records
CREATE POLICY "messagings_delete_own"
  ON messagings FOR DELETE
  USING (auth.uid() = user_id);
```



**8. Voice Table (`voices`):**
Purpose: Represents a voice call

```sql
CREATE TABLE voices (
  -- Standard fields
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  -- Entity-specific fields
  type TEXT NOT NULL -- Type of voice call,

  -- Enum constraints
  CONSTRAINT voices_type_check CHECK (type IN ('private', 'group'))
);

-- Indexes for performance
CREATE INDEX voices_user_id_idx ON voices(user_id);
CREATE INDEX voices_created_at_idx ON voices(created_at DESC);



-- RLS Policies (Granular)
ALTER TABLE voices ENABLE ROW LEVEL SECURITY;

-- SELECT: Users can only view their own records
CREATE POLICY "voices_select_own"
  ON voices FOR SELECT
  USING (auth.uid() = user_id);

-- INSERT: Users can only create records for themselves
CREATE POLICY "voices_insert_own"
  ON voices FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- UPDATE: Users can only update their own records
CREATE POLICY "voices_update_own"
  ON voices FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- DELETE: Users can only delete their own records
CREATE POLICY "voices_delete_own"
  ON voices FOR DELETE
  USING (auth.uid() = user_id);
```




### 3. Updated-At Automation

Create a **Trigger Function** that automatically sets `updated_at`:
- Function Name: `update_updated_at()`
- Trigger: BEFORE UPDATE on all tables
- Logic: SET NEW.updated_at = now()

Apply the trigger to all tables (profiles + entities).

### 4. Storage Setup

Create a **Storage Bucket** for file uploads:
- Name: "uploads"
- Visibility: Private
- Folder Structure: `{user_id}/{filename}`

Storage Policies:
- Users can only upload to their own folder
- Users can only read/delete their own files
- No public access

Implement folder-based security with storage.foldername().

### 5. Type Safety

Generate TypeScript types from the schema:
- Use Supabase CLI: `supabase gen types typescript`
- Export to: `lib/database.types.ts`
- Use the types for type-safe queries

---

## Validation Checklist

Verify that:
- [ ] profiles table exists with RLS
- [ ] Auto-create Profile Trigger works
- [ ] Build table exists with correct fields
- [ ] Signal table exists with correct fields
- [ ] Private table exists with correct fields
- [ ] Privacy table exists with correct fields
- [ ] Key table exists with correct fields
- [ ] End table exists with correct fields
- [ ] Messaging table exists with correct fields
- [ ] Voice table exists with correct fields
- [ ] All tables have RLS enabled
- [ ] Foreign Keys correctly set
- [ ] Indexes created for performance
- [ ] updated_at Trigger on all tables
- [ ] Storage Bucket configured
- [ ] TypeScript Types generated

**Test:**
- Signup new user → Profile automatically created
- Create Entity record → Only visible to owner
- Update record → updated_at automatically set
- Upload file → Only possible in own folder

---

## Troubleshooting

**RLS Issues:**
- Check if policies correctly use auth.uid()
- Test with SQL Editor: `SELECT auth.uid()`
- Policies must have USING and WITH CHECK

**Foreign Key Errors:**
- Check CASCADE on user_id
- Entities with relationships: Correct order when creating

**Storage Issues:**
- Folder structure must follow {user_id}/ pattern
- Policies use storage.foldername() for user isolation

---

**Continue to:** `03-auth.md`
