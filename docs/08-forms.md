# 08 - Forms & Validation

> **Agent:** Forms Agent 📝
> **Goal:** Create forms with react-hook-form + Zod

---

## Context

**Product:** Echo
**Entities with Forms:** Build, Signal, Private, Privacy, Key, End, Messaging, Voice

---

## Instructions

### 1. Check Dependencies

Ensure the following dependencies are installed:
- `react-hook-form` - Form State Management
- `@hookform/resolvers` - Zod Integration

If not present, install them.

**Important:**
- Zod should already be installed from Setup
- Schemas should already exist in lib/schemas/ (from Phase 06)


### 2. Build Form

Create **BuildForm Component** (`components/build/BuildForm.tsx`):

**Props Interface:**
- `build?`: Build Object (if provided = Edit Mode)
- `onSuccess?`: Callback after successful submit

**Functionality:**
- Client Component ("use client")
- react-hook-form with zodResolver
- Use CreateBuildSchema for Validation
- Distinguish Create vs Edit Mode (based on build prop)
- useCreateBuild() Hook for Create
- useUpdateBuild(id) Hook for Edit
- Loading State during Submit
- Error Handling with Alert
- After Success: onSuccess Callback + Router Push to List + Router Refresh

**Form Fields:**
- `id` (text) - Required: Primary key
- `created_at` (text) - Required: Creation timestamp
- `updated_at` (text) - Required: Last update timestamp
- `user_id` (text) - Required: Owner user ID
- `version` (text) - Required: Version number of the build

**Layout:**
- Card Container
- CardHeader: Title ("New Build" or "Edit Build")
- CardContent: Form Fields (space-y-4)
- CardFooter: Actions (justify-end gap-2)
  - Cancel Button (variant="outline", onClick → router.back())
  - Submit Button (type="submit", disabled during Loading)

**Field Layout (per field):**
- Container with space-y-2
- Label with htmlFor
- Input with register()
- Error Message (if errors.fieldName)

**Important:**
- register() with valueAsNumber for Number fields
- defaultValues from build prop (for Edit Mode)
- Proper Error Display under each field

---

Create **New Build Page** (`app/(app)/builds/new/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Render BuildForm Component

**Layout:**
- Container with max-w-2xl + py-8
- Centered Form Layout



### 3. Signal Form

Create **SignalForm Component** (`components/signal/SignalForm.tsx`):

**Props Interface:**
- `signal?`: Signal Object (if provided = Edit Mode)
- `onSuccess?`: Callback after successful submit

**Functionality:**
- Client Component ("use client")
- react-hook-form with zodResolver
- Use CreateSignalSchema for Validation
- Distinguish Create vs Edit Mode (based on signal prop)
- useCreateSignal() Hook for Create
- useUpdateSignal(id) Hook for Edit
- Loading State during Submit
- Error Handling with Alert
- After Success: onSuccess Callback + Router Push to List + Router Refresh

**Form Fields:**
- `id` (text) - Required: Primary key
- `created_at` (text) - Required: Creation timestamp
- `updated_at` (text) - Required: Last update timestamp
- `user_id` (text) - Required: Owner user ID
- `type` (text) - Required: Type of signal

**Layout:**
- Card Container
- CardHeader: Title ("New Signal" or "Edit Signal")
- CardContent: Form Fields (space-y-4)
- CardFooter: Actions (justify-end gap-2)
  - Cancel Button (variant="outline", onClick → router.back())
  - Submit Button (type="submit", disabled during Loading)

**Field Layout (per field):**
- Container with space-y-2
- Label with htmlFor
- Input with register()
- Error Message (if errors.fieldName)

**Important:**
- register() with valueAsNumber for Number fields
- defaultValues from signal prop (for Edit Mode)
- Proper Error Display under each field

---

Create **New Signal Page** (`app/(app)/signals/new/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Render SignalForm Component

**Layout:**
- Container with max-w-2xl + py-8
- Centered Form Layout



### 4. Private Form

Create **PrivateForm Component** (`components/private/PrivateForm.tsx`):

**Props Interface:**
- `private?`: Private Object (if provided = Edit Mode)
- `onSuccess?`: Callback after successful submit

**Functionality:**
- Client Component ("use client")
- react-hook-form with zodResolver
- Use CreatePrivateSchema for Validation
- Distinguish Create vs Edit Mode (based on private prop)
- useCreatePrivate() Hook for Create
- useUpdatePrivate(id) Hook for Edit
- Loading State during Submit
- Error Handling with Alert
- After Success: onSuccess Callback + Router Push to List + Router Refresh

**Form Fields:**
- `id` (text) - Required: Primary key
- `created_at` (text) - Required: Creation timestamp
- `updated_at` (text) - Required: Last update timestamp
- `user_id` (text) - Required: Owner user ID
- `type` (text) - Required: Type of private conversation or group

**Layout:**
- Card Container
- CardHeader: Title ("New Private" or "Edit Private")
- CardContent: Form Fields (space-y-4)
- CardFooter: Actions (justify-end gap-2)
  - Cancel Button (variant="outline", onClick → router.back())
  - Submit Button (type="submit", disabled during Loading)

**Field Layout (per field):**
- Container with space-y-2
- Label with htmlFor
- Input with register()
- Error Message (if errors.fieldName)

**Important:**
- register() with valueAsNumber for Number fields
- defaultValues from private prop (for Edit Mode)
- Proper Error Display under each field

---

Create **New Private Page** (`app/(app)/privates/new/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Render PrivateForm Component

**Layout:**
- Container with max-w-2xl + py-8
- Centered Form Layout



### 5. Privacy Form

Create **PrivacyForm Component** (`components/privacy/PrivacyForm.tsx`):

**Props Interface:**
- `privacy?`: Privacy Object (if provided = Edit Mode)
- `onSuccess?`: Callback after successful submit

**Functionality:**
- Client Component ("use client")
- react-hook-form with zodResolver
- Use CreatePrivacySchema for Validation
- Distinguish Create vs Edit Mode (based on privacy prop)
- useCreatePrivacy() Hook for Create
- useUpdatePrivacy(id) Hook for Edit
- Loading State during Submit
- Error Handling with Alert
- After Success: onSuccess Callback + Router Push to List + Router Refresh

**Form Fields:**
- `id` (text) - Required: Primary key
- `created_at` (text) - Required: Creation timestamp
- `updated_at` (text) - Required: Last update timestamp
- `user_id` (text) - Required: Owner user ID

**Layout:**
- Card Container
- CardHeader: Title ("New Privacy" or "Edit Privacy")
- CardContent: Form Fields (space-y-4)
- CardFooter: Actions (justify-end gap-2)
  - Cancel Button (variant="outline", onClick → router.back())
  - Submit Button (type="submit", disabled during Loading)

**Field Layout (per field):**
- Container with space-y-2
- Label with htmlFor
- Input with register()
- Error Message (if errors.fieldName)

**Important:**
- register() with valueAsNumber for Number fields
- defaultValues from privacy prop (for Edit Mode)
- Proper Error Display under each field

---

Create **New Privacy Page** (`app/(app)/privacys/new/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Render PrivacyForm Component

**Layout:**
- Container with max-w-2xl + py-8
- Centered Form Layout



### 6. Key Form

Create **KeyForm Component** (`components/key/KeyForm.tsx`):

**Props Interface:**
- `key?`: Key Object (if provided = Edit Mode)
- `onSuccess?`: Callback after successful submit

**Functionality:**
- Client Component ("use client")
- react-hook-form with zodResolver
- Use CreateKeySchema for Validation
- Distinguish Create vs Edit Mode (based on key prop)
- useCreateKey() Hook for Create
- useUpdateKey(id) Hook for Edit
- Loading State during Submit
- Error Handling with Alert
- After Success: onSuccess Callback + Router Push to List + Router Refresh

**Form Fields:**
- `id` (text) - Required: Primary key
- `created_at` (text) - Required: Creation timestamp
- `updated_at` (text) - Required: Last update timestamp
- `user_id` (text) - Required: Owner user ID
- `type` (text) - Required: Type of key

**Layout:**
- Card Container
- CardHeader: Title ("New Key" or "Edit Key")
- CardContent: Form Fields (space-y-4)
- CardFooter: Actions (justify-end gap-2)
  - Cancel Button (variant="outline", onClick → router.back())
  - Submit Button (type="submit", disabled during Loading)

**Field Layout (per field):**
- Container with space-y-2
- Label with htmlFor
- Input with register()
- Error Message (if errors.fieldName)

**Important:**
- register() with valueAsNumber for Number fields
- defaultValues from key prop (for Edit Mode)
- Proper Error Display under each field

---

Create **New Key Page** (`app/(app)/keys/new/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Render KeyForm Component

**Layout:**
- Container with max-w-2xl + py-8
- Centered Form Layout



### 7. End Form

Create **EndForm Component** (`components/end/EndForm.tsx`):

**Props Interface:**
- `end?`: End Object (if provided = Edit Mode)
- `onSuccess?`: Callback after successful submit

**Functionality:**
- Client Component ("use client")
- react-hook-form with zodResolver
- Use CreateEndSchema for Validation
- Distinguish Create vs Edit Mode (based on end prop)
- useCreateEnd() Hook for Create
- useUpdateEnd(id) Hook for Edit
- Loading State during Submit
- Error Handling with Alert
- After Success: onSuccess Callback + Router Push to List + Router Refresh

**Form Fields:**
- `id` (text) - Required: Primary key
- `created_at` (text) - Required: Creation timestamp
- `updated_at` (text) - Required: Last update timestamp
- `user_id` (text) - Required: Owner user ID
- `type` (text) - Required: Type of conversation or call

**Layout:**
- Card Container
- CardHeader: Title ("New End" or "Edit End")
- CardContent: Form Fields (space-y-4)
- CardFooter: Actions (justify-end gap-2)
  - Cancel Button (variant="outline", onClick → router.back())
  - Submit Button (type="submit", disabled during Loading)

**Field Layout (per field):**
- Container with space-y-2
- Label with htmlFor
- Input with register()
- Error Message (if errors.fieldName)

**Important:**
- register() with valueAsNumber for Number fields
- defaultValues from end prop (for Edit Mode)
- Proper Error Display under each field

---

Create **New End Page** (`app/(app)/ends/new/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Render EndForm Component

**Layout:**
- Container with max-w-2xl + py-8
- Centered Form Layout



### 8. Messaging Form

Create **MessagingForm Component** (`components/messaging/MessagingForm.tsx`):

**Props Interface:**
- `messaging?`: Messaging Object (if provided = Edit Mode)
- `onSuccess?`: Callback after successful submit

**Functionality:**
- Client Component ("use client")
- react-hook-form with zodResolver
- Use CreateMessagingSchema for Validation
- Distinguish Create vs Edit Mode (based on messaging prop)
- useCreateMessaging() Hook for Create
- useUpdateMessaging(id) Hook for Edit
- Loading State during Submit
- Error Handling with Alert
- After Success: onSuccess Callback + Router Push to List + Router Refresh

**Form Fields:**
- `id` (text) - Required: Primary key
- `created_at` (text) - Required: Creation timestamp
- `updated_at` (text) - Required: Last update timestamp
- `user_id` (text) - Required: Owner user ID
- `type` (text) - Required: Type of messaging conversation

**Layout:**
- Card Container
- CardHeader: Title ("New Messaging" or "Edit Messaging")
- CardContent: Form Fields (space-y-4)
- CardFooter: Actions (justify-end gap-2)
  - Cancel Button (variant="outline", onClick → router.back())
  - Submit Button (type="submit", disabled during Loading)

**Field Layout (per field):**
- Container with space-y-2
- Label with htmlFor
- Input with register()
- Error Message (if errors.fieldName)

**Important:**
- register() with valueAsNumber for Number fields
- defaultValues from messaging prop (for Edit Mode)
- Proper Error Display under each field

---

Create **New Messaging Page** (`app/(app)/messagings/new/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Render MessagingForm Component

**Layout:**
- Container with max-w-2xl + py-8
- Centered Form Layout



### 9. Voice Form

Create **VoiceForm Component** (`components/voice/VoiceForm.tsx`):

**Props Interface:**
- `voice?`: Voice Object (if provided = Edit Mode)
- `onSuccess?`: Callback after successful submit

**Functionality:**
- Client Component ("use client")
- react-hook-form with zodResolver
- Use CreateVoiceSchema for Validation
- Distinguish Create vs Edit Mode (based on voice prop)
- useCreateVoice() Hook for Create
- useUpdateVoice(id) Hook for Edit
- Loading State during Submit
- Error Handling with Alert
- After Success: onSuccess Callback + Router Push to List + Router Refresh

**Form Fields:**
- `id` (text) - Required: Primary key
- `created_at` (text) - Required: Creation timestamp
- `updated_at` (text) - Required: Last update timestamp
- `user_id` (text) - Required: Owner user ID
- `type` (text) - Required: Type of voice call

**Layout:**
- Card Container
- CardHeader: Title ("New Voice" or "Edit Voice")
- CardContent: Form Fields (space-y-4)
- CardFooter: Actions (justify-end gap-2)
  - Cancel Button (variant="outline", onClick → router.back())
  - Submit Button (type="submit", disabled during Loading)

**Field Layout (per field):**
- Container with space-y-2
- Label with htmlFor
- Input with register()
- Error Message (if errors.fieldName)

**Important:**
- register() with valueAsNumber for Number fields
- defaultValues from voice prop (for Edit Mode)
- Proper Error Display under each field

---

Create **New Voice Page** (`app/(app)/voices/new/page.tsx`):

**Functionality:**
- Server Component for Auth Check
- Redirect to /login if not authenticated
- Render VoiceForm Component

**Layout:**
- Container with max-w-2xl + py-8
- Centered Form Layout


---

## Validation Checklist

Verify for EACH Entity:
- [ ] Form Component created
- [ ] New Page created with Auth Check
- [ ] react-hook-form integrated
- [ ] Zod Validation works
- [ ] Create Mode works
- [ ] Edit Mode works (when build is passed)
- [ ] Loading State during Submit
- [ ] Error Messages are displayed
- [ ] Redirect after Success

**Test per Entity:**
1. **Create Test:**
   - Go to /[entity]s/new
   - Leave field empty → Validation Error displayed
   - Fill all fields → Submit
   - Redirected to list
   - New entry appears in list

2. **Validation Test:**
   - Required fields empty → Error
   - Number field with text → Error (if applicable)
   - Correct input → No Error

3. **Edit Test (if Detail Page exists):**
   - Open Entity Detail
   - Click Edit
   - Fields are pre-filled
   - Change value → Submit
   - Changes saved

---

## Troubleshooting

**Form submitted but nothing happens:**
- handleSubmit correctly passed to form onSubmit?
- async/await in onSubmit Handler?
- Errors being logged?

**Validation not working:**
- zodResolver correctly imported?
- Schema correctly passed to zodResolver?
- Schema exported from lib/schemas?

**Register not working:**
- Field Name exactly like in Schema?
- Input has {...register("fieldName")} spread?
- For Number: valueAsNumber Option?

**defaultValues being ignored:**
- useForm with defaultValues option?
- build prop being passed?
- Object spread correct?

**No redirect after Submit:**
- router.push() called?
- router.refresh() for SSR Update?
- No Error in try/catch?

**TypeScript Errors:**
- CreateBuildSchema imported?
- Type Inference from Zod: type CreateBuild = z.infer<typeof CreateBuildSchema>
- useForm Generic: useForm<CreateBuild>()

---

**Continue to:** `09-landing.md`
