# Echo

> Secure Conversations Matter

Echo is a premium, privacy-focused encrypted messaging app designed for high-stakes professionals and individuals who require absolute security. It offers end-to-end encryption, secure messaging, voice calls, video calls, and groups, all backed by a robust server infrastructure. Echo's unique selling point is its advanced security audit feature, which allows users to monitor and control their data's security.

## Features

- End-to-end encryption
- Secure messaging
- Voice and video calls
- Groups
- Advanced security audit

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Getting Started

1. Clone this repository
2. Copy `.env.example` to `.env.local` and fill in your credentials
3. Run `npm install`
4. Run `npm run dev`

## Project Structure

```
├── app/                  # Next.js App Router pages
├── components/           # React components
├── lib/                  # Utilities and helpers
├── supabase/            # Database schema
└── INSTRUCTIONS.md      # Detailed build guide for AI assistants
```

## Database

This project uses 8 main entities:
- **Build**: Represents a build of the application
- **Signal**: Represents a signal, such as a message or call
- **Private**: Represents a private conversation or group
- **Privacy**: Represents a user's privacy settings
- **Key**: Represents a cryptographic key
- **End**: Represents the end of a conversation or call

## Build Instructions

For detailed step-by-step build instructions, see [`INSTRUCTIONS.md`](./INSTRUCTIONS.md).

This file contains comprehensive guidance for building this project with AI coding assistants like Claude Code, Cursor, or Windsurf.

---

*Generated with [Claudery](https://claudery.io) - AI-powered blueprint generator*
