# Entity Relationship Diagram - Echo

> **Auto-generated** from your idea analysis
> **Entities:** 8

---

## Visual Diagram

```mermaid
erDiagram
    profiles {
        uuid id PK
        text username UK
        text display_name
        text avatar_url
        timestamptz created_at
        timestamptz updated_at
    }

    builds {
        uuid id PK
        uuid user_id FK
        uuid id
        timestamptz created_at
        timestamptz updated_at
        uuid user_id FK
        text version
        timestamptz created_at
        timestamptz updated_at
    }

    signals {
        uuid id PK
        uuid user_id FK
        uuid id
        timestamptz created_at
        timestamptz updated_at
        uuid user_id FK
        text type
        timestamptz created_at
        timestamptz updated_at
    }

    privates {
        uuid id PK
        uuid user_id FK
        uuid id
        timestamptz created_at
        timestamptz updated_at
        uuid user_id FK
        text type
        timestamptz created_at
        timestamptz updated_at
    }

    privacys {
        uuid id PK
        uuid user_id FK
        uuid id
        timestamptz created_at
        timestamptz updated_at
        uuid user_id FK
        timestamptz created_at
        timestamptz updated_at
    }

    keys {
        uuid id PK
        uuid user_id FK
        uuid id
        timestamptz created_at
        timestamptz updated_at
        uuid user_id FK
        text type
        timestamptz created_at
        timestamptz updated_at
    }

    ends {
        uuid id PK
        uuid user_id FK
        uuid id
        timestamptz created_at
        timestamptz updated_at
        uuid user_id FK
        text type
        timestamptz created_at
        timestamptz updated_at
    }

    messagings {
        uuid id PK
        uuid user_id FK
        uuid id
        timestamptz created_at
        timestamptz updated_at
        uuid user_id FK
        text type
        timestamptz created_at
        timestamptz updated_at
    }

    voices {
        uuid id PK
        uuid user_id FK
        uuid id
        timestamptz created_at
        timestamptz updated_at
        uuid user_id FK
        text type
        timestamptz created_at
        timestamptz updated_at
    }

    %% Relationships
    profiles ||--o{ builds : owns
    profiles ||--o{ signals : owns
    profiles ||--o{ privates : owns
    profiles ||--o{ privacys : owns
    profiles ||--o{ keys : owns
    profiles ||--o{ ends : owns
    profiles ||--o{ messagings : owns
    profiles ||--o{ voices : owns
```

---

## Entity Details

### Build
> Represents a build of the application

**Fields:**
  - `id`: uuid (required) - Primary key
  - `created_at`: datetime (required) - Creation timestamp
  - `updated_at`: datetime (required) - Last update timestamp
  - `user_id`: uuid (required) - Owner user ID
  - `version`: string (required) - Version number of the build



### Signal
> Represents a signal, such as a message or call

**Fields:**
  - `id`: uuid (required) - Primary key
  - `created_at`: datetime (required) - Creation timestamp
  - `updated_at`: datetime (required) - Last update timestamp
  - `user_id`: uuid (required) - Owner user ID
  - `type`: enum (required) - Type of signal



### Private
> Represents a private conversation or group

**Fields:**
  - `id`: uuid (required) - Primary key
  - `created_at`: datetime (required) - Creation timestamp
  - `updated_at`: datetime (required) - Last update timestamp
  - `user_id`: uuid (required) - Owner user ID
  - `type`: enum (required) - Type of private conversation or group



### Privacy
> Represents a user's privacy settings

**Fields:**
  - `id`: uuid (required) - Primary key
  - `created_at`: datetime (required) - Creation timestamp
  - `updated_at`: datetime (required) - Last update timestamp
  - `user_id`: uuid (required) - Owner user ID



### Key
> Represents a cryptographic key

**Fields:**
  - `id`: uuid (required) - Primary key
  - `created_at`: datetime (required) - Creation timestamp
  - `updated_at`: datetime (required) - Last update timestamp
  - `user_id`: uuid (required) - Owner user ID
  - `type`: enum (required) - Type of key



### End
> Represents the end of a conversation or call

**Fields:**
  - `id`: uuid (required) - Primary key
  - `created_at`: datetime (required) - Creation timestamp
  - `updated_at`: datetime (required) - Last update timestamp
  - `user_id`: uuid (required) - Owner user ID
  - `type`: enum (required) - Type of conversation or call



### Messaging
> Represents a messaging conversation

**Fields:**
  - `id`: uuid (required) - Primary key
  - `created_at`: datetime (required) - Creation timestamp
  - `updated_at`: datetime (required) - Last update timestamp
  - `user_id`: uuid (required) - Owner user ID
  - `type`: enum (required) - Type of messaging conversation



### Voice
> Represents a voice call

**Fields:**
  - `id`: uuid (required) - Primary key
  - `created_at`: datetime (required) - Creation timestamp
  - `updated_at`: datetime (required) - Last update timestamp
  - `user_id`: uuid (required) - Owner user ID
  - `type`: enum (required) - Type of voice call



---

## Notes

- All entities have standard fields: `id`, `user_id`, `created_at`, `updated_at`
- `PK` = Primary Key, `FK` = Foreign Key, `UK` = Unique Key
- Copy the Mermaid code block to visualize in any Mermaid-compatible tool
- Relationships: `||--o{` = one-to-many, `||--||` = one-to-one, `}o--o{` = many-to-many
