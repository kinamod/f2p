# Skill: clear-components

**Trigger:** User says "clear components", "reset the page", "start fresh", "wipe the components", "delete all components", or similar.

## Purpose

Completely wipe all cloned components and reset the showcase page (`app/home/page.tsx`) and the registry (`builder-registry.ts`) back to empty shells, ready for a new `clone-site` run. The `app/page.tsx` launcher tool is never touched.

---

## Step 1 — Confirm before deleting

Before doing anything destructive, confirm with the user:

> "This will permanently delete all components in `components/` (except `builder.tsx`), clear `app/home/page.tsx`, and reset `builder-registry.ts`. Are you sure?"

If the user confirms (yes, go ahead, do it, clear it, etc.), proceed. If they hesitate or say no, stop.

---

## Step 2 — Delete all component folders

Delete every subdirectory inside `components/` **except `builder.tsx`** (which is infrastructure, not a cloned component).

Run:
```bash
find components -mindepth 1 -maxdepth 1 -type d -exec rm -rf {} +
```

Then confirm what was deleted by listing what remains:
```bash
ls components/
```

Expected output: only `builder.tsx` remains.

---

## Step 3 — Reset app/home/page.tsx

Overwrite `app/home/page.tsx` with an empty shell that exports a valid default component. Do not leave broken imports:

```tsx
export default function ClonedHome() {
  return null;
}
```

---

## Step 4 — Reset builder-registry.ts

Overwrite `builder-registry.ts` keeping only the `builder.init` call. Remove all component imports and `Builder.registerComponent` calls:

```ts
"use client";
import { builder, Builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
```

---

## Step 5 — Verify

After all changes:

1. Check that `components/` only contains `builder.tsx`:
   ```bash
   ls components/
   ```
2. Confirm `app/home/page.tsx` has no broken imports.
3. Confirm `builder-registry.ts` has no references to deleted components.

Report:
```
✓ Deleted components: AnnouncementBar, NavBar, Hero, Carousel, FeatureCards, Testimonials, Footer (example)
✓ app/home/page.tsx — reset to empty shell
✓ builder-registry.ts — reset to builder.init only
Ready for a new clone-site run.
```

---

## What is NEVER deleted

| File/folder | Reason |
|-------------|--------|
| `app/page.tsx` | The "Prep for Publish" launcher tool — always preserved |
| `components/builder.tsx` | Builder.io infrastructure |
| `app/[...page]/page.tsx` | Builder.io page routing |
| `app/layout.tsx` | App shell |
| `app/globals.css` | Global styles |
| `builder-registry.ts` | Kept, but emptied back to `builder.init` only |
| `scripts/render-page.js` | Puppeteer render tool |
| `.builder/skills/` | All skills |
