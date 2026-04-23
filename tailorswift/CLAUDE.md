# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

TailorSwift is an AI-powered job application copilot that tailors resumes, analyzes job fit, and streamlines applications. It is built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Commands

All commands run from `tailorswift/`:

```bash
npm run dev      # start dev server
npm run build    # production build
npm run lint     # eslint
```

There are no tests configured yet.

## Architecture

This is a Next.js App Router project. Pages and layouts live under `app/`. The root layout (`app/layout.tsx`) sets up Geist fonts and a full-height flex column body. All new routes should be added as folders under `app/` with a `page.tsx`.

Styling uses Tailwind CSS v4 (configured via `postcss.config.mjs` and `@tailwindcss/postcss`). Global styles are in `app/globals.css`.

## TheirStack API

Job data is sourced from TheirStack. Full docs: https://theirstack.com/en/docs/api-reference/jobs/search_jobs_v1

- **Endpoint:** `POST https://api.theirstack.com/v1/jobs/search`
- **Auth:** `Authorization: Bearer <token>` header
- **Cost:** 1 credit per job returned — keep `limit` conservative
- **Required:** at least one of `posted_at_max_age_days`, `posted_at_gte`, `posted_at_lte`, `company_domain_or`, `company_name_or`, or `company_linkedin_url_or` must be present or the request returns 422

The API key should be stored in an environment variable (e.g. `THEIRSTACK_API_KEY`) and accessed server-side only via a Next.js API route — never exposed to the client.

## Important: Next.js version

This project uses **Next.js 16** with **React 19** — both are newer than most training data. Before writing any Next.js-specific code, check `node_modules/next/dist/docs/` for current API conventions, as they may differ from what you know.
