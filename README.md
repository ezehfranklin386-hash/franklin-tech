# Franklin Tech

Portfolio website for Franklin Tech, the professional brand of Franklin Eze,
a full-stack web developer. Built with Next.js, React, TypeScript, Three.js,
Tailwind CSS and shadcn/ui.

## Stack

- **Next.js** (App Router) — pages, server components and server actions
- **React 19** + **TypeScript**
- **Three.js** via @react-three/fiber and @react-three/drei — hero scene
- **Tailwind CSS v4** with shadcn/ui components
- **Space Grotesk** (headings) and **Inter** (body)

## Brand

Dark, modern interface: near-black background (#0B0F0C), deep charcoal
surfaces (#151C17), light green accent (#A8E6A1), soft white text (#F4F7F4)
and grey green muted text (#A5B0A7). See `app/globals.css` for the tokens.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/             pages (Home, About, Services, Portfolio, Contact) + contact action
components/      ui primitives (shadcn) and site components (header, footer,
                 hero scene, cards, contact form)
lib/             site config, services data, projects data, utils
public/          static assets (portrait)
data/messages/   locally stored contact form submissions (gitignored)
```

## Before launch

1. **Contact email** — set `email` in `lib/site.ts`, or replace the form
   action in `app/actions.ts` with real email delivery (Resend, Nodemailer,
   or a database). Submissions are currently stored in `data/messages/`
   on the local filesystem only.
2. **Portfolio projects** — fill in real, verified project details in
   `lib/projects.ts`. GInterior is a placeholder until details are confirmed.
3. **Domain** — replace `metadataBase` in `app/layout.tsx`.
4. **Social links** — add active professional profiles to the footer.
5. **About details** — confirm biography, education and location wording.

## Deploying

`npm run build && npm start`, or deploy to Vercel. On serverless hosts the
local file storage for contact messages will not persist; wire up email
delivery (step 1) first.
