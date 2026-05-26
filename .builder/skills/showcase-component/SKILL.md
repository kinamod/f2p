# Skill: showcase-component

**Trigger:** User says "add to showcase", "show in demo", "add to the page", or similar. Also called automatically as Step 3 of the `component-from-html` pipeline.

## Purpose

Add a component to the project's showcase/demo page so it renders visibly alongside the other components. Works generically — detects the showcase page by content rather than assuming a filename.

---

## Step 0 — Find the Showcase Page

Look for a page file that:
- Imports and renders multiple components side by side
- Contains section wrapper elements, component names as headings, and descriptions
- Is typically `app/page.tsx` but may differ

Read the **entire file** before editing so you match the exact section structure, JSX indentation, and import style used by existing components.

---

## Step 1 — Read the Showcase Page Structure

From the existing file, note:
- The outer wrapper element (e.g. `<div>`, `<main>`)
- The CSS module imported (e.g. `import styles from './page.module.css'`)
- The class names used for sections, section headers, descriptions, and component wrappers
- The order of existing components (header → hero → content → footer) — insert the new component in logical order, or append at the bottom if order is unclear

---

## Step 2 — Add the Import

Add an import statement at the top of the file, alongside the other component imports:

```tsx
import {ComponentName} from '@/components/{ComponentName}';
// or whatever alias/path convention the project uses
```

Match the exact import alias (`@/`, `../`, `./`) used by other imports in that file.

---

## Step 3 — Add the Showcase Section

Insert a new `<section>` block that matches the existing section structure exactly. Include:

1. A heading with the component's name (human-readable, spaced)
2. A one-sentence description of what the component does
3. The component rendered with **real, non-placeholder props** — use the default prop values defined in the component itself

```tsx
<section className={styles.showcaseSection}>
  <div className={styles.showcaseSectionHeader}>
    <h2>{Component Name}</h2>
    <p className={styles.showcaseSectionDescription}>{One sentence describing what it does.}</p>
  </div>
  <div className={styles.showcaseComponentWrapper}>
    <{ComponentName} />
  </div>
</section>
```

If the existing sections use different class names, use those instead — never invent new class names that don't already exist in the CSS module.

---

## Step 4 — Image & Logo Rule (CRITICAL)

When rendering the component in the showcase, if it accepts image props, always pass **real image URLs** as props — never empty strings or placeholder images. Use the same default value specified in the component's prop interface.

```tsx
// CORRECT — real image URL
<MyHero imageUrl="https://example.com/real-image.webp" />

// WRONG — placeholder
<MyHero imageUrl="" />
<MyHero imageUrl="https://via.placeholder.com/800x400" />
```

---

## After Adding

Confirm:
- Import added ✓
- New `<section>` block added in logical order ✓
- Component renders with real prop values ✓
