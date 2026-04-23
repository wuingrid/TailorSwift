# TailorSwift — Implementation Plan

## App Structure

Three separate pages accessible from a top nav:

| Page | Route | What it does |
|------|-------|-------------|
| Job Search | `/jobs` | Filter & browse TheirStack jobs |
| Resume Match | `/match` | Upload resume → AI finds matching TheirStack jobs |
| Resume Tailor | `/tailor` | Pick a TheirStack job or paste external job → AI rewrites your resume |

### `/tailor` details
- Lists jobs already fetched from TheirStack (via `/jobs` or `/match`) to pick from
- Also has a paste-a-job-description text box for external jobs

---

## Build Order

- [ ] **Step 1 — Nav layout**: Add 3-page navigation shell
- [ ] **Step 2 — TheirStack API route**: Server-side proxy at `app/api/jobs/search/route.ts` (needed by `/jobs` and `/match`)
- [ ] **Step 3 — `/jobs` page**: Filters (title, remote, country, tech stack) + job cards
- [ ] **Step 4 — `/match` page**: Resume upload/paste → AI extracts skills → TheirStack search → matched job cards
- [ ] **Step 5 — `/tailor` page**: Pick a TheirStack job or paste external description + resume → AI rewrites resume

---

## APIs Used

- **TheirStack** — job data source for `/jobs` and `/match` (see `CLAUDE.md` for API details)
- **Claude API** — AI for resume matching (step 4) and resume tailoring (step 5)
