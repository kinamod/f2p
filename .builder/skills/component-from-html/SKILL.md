# Skill: component-from-html

**Trigger:** User pastes raw HTML/CSS from a design handoff, browser export, or screenshot tool (e.g. Builder.io Smart Export). Also triggered by phrases like "convert this HTML", "turn this into a component", "build from this markup".

## Purpose

Full pipeline: analyse pasted HTML → create a TypeScript + CSS Module component → register it with Builder.io → add it to the showcase page and the full clone page → verify.

This skill composes the three atomic skills (`create-component`, `register-component`, `showcase-component`) into a single automated flow.

---

## Step 0 — Analyse the HTML

Before writing any code:

### 0a — Name the component
Determine a clear PascalCase name from the HTML's apparent purpose. Examples:
- A `<header>` with nav links → `SiteHeader`
- A `<section>` with a large image and headline → `HeroBanner`
- A `<footer>` with links → `SiteFooter`
- A grid of service cards → `ServicesGrid`

### 0b — Extract all image and logo URLs (CRITICAL — do this first)

Scan the entire HTML for every `<img src="...">` and CSS `background-image: url(...)`. List them all **before writing any JSX**. These URLs are not optional — they are part of the faithful reproduction requirement.

**Priority order for image URLs:**
1. **Use the exact `src` from the provided HTML verbatim.** Do not modify, shorten, or replace it.
2. **If no URL exists in the HTML** (e.g. the image is referenced by class name only), use web search to find the official asset URL from the brand's own website.
3. **If no URL can be found**, stop and ask the user to provide the image file or URL before continuing.

**What is NEVER acceptable:**
- A `<span>` or styled text in place of a logo image
- An SVG drawn from scratch approximating the logo shape
- A placeholder (`via.placeholder.com`, coloured div, empty `src=""`)
- Guessing a URL without verifying it resolves correctly

### 0c — Identify props
Every hardcoded value that should be editable in Builder.io becomes a prop:
- Text strings (headings, body copy, button labels, taglines)
- Image URLs and alt text
- Link hrefs
- Boolean flags (e.g. `showSearch`, `isFixed`)

Do not turn CSS values into props — those stay in the CSS module.

### 0d — Identify interactivity
Note any click handlers, toggle state, or browser APIs. These require `'use client'`.

---

## Step 1 — Create the Component

Follow the `create-component` skill rules exactly.

**Converting HTML → JSX:**
- Change `class=` to `className=`
- Self-close void elements: `<img />`, `<input />`, `<br />`
- Replace all inline `style="..."` attributes with CSS module classes
- Convert every hardcoded content value to a `{prop}` expression, using the original value as the default
- Preserve HTML structure faithfully — do not simplify or reorganise the layout

**CSS Module:**
- One class per visual element with a descriptive camelCase name
- Preserve all original CSS property values exactly (colours, sizes, transitions)
- Use shorthand CSS where applicable (`padding: 10px 15px` not four declarations)
- Preserve all media queries at the same breakpoints

**Image props:**
- The `defaultValue` of any image prop must be the exact URL extracted in Step 0b
- Never leave image `src` as `""` or a placeholder

---

## Step 2 — Register with Builder.io

Follow the `register-component` skill rules exactly.

Find the registry file (contains `builder.init(` and `Builder.registerComponent(`), then:
1. Add the import
2. Add a `Builder.registerComponent()` call with a fully typed `inputs` array

Type mapping quick reference:
- Short text → `"string"`
- Long body text / description → `"longText"`
- Link URL → `"url"`
- Image URL → `"file"` with `allowedFileTypes: ["jpeg","png","webp","svg"]`
- Boolean → `"boolean"`
- Number → `"number"`
- Union literals → `"string"` with `enum`

Every input must include a `defaultValue` matching the component's defaults.

---

## Step 3 — Add to both page files

This step updates **two** files:

### 3a — Component showcase (`app/page.tsx`)

`app/page.tsx` is the component showcase. Each component gets its own `<section>` block so it can be viewed in isolation.

1. Add the import at the top alongside other component imports.
2. Add a `<section className={styles.showcaseSection}>` block in logical page order (header → hero → content → footer). Append at the bottom if order is unclear.
3. The section must contain:
   - `<div className={styles.showcaseSectionHeader}>` with an `<h2>` (component name, human-readable) and a `<p className={styles.showcaseSectionDescription}>` (one sentence describing what it does)
   - `<div className={styles.showcaseComponentWrapper}>` wrapping the component rendered with its **real default props** (never empty strings or placeholders)

Example section shape:
```tsx
<section className={styles.showcaseSection}>
  <div className={styles.showcaseSectionHeader}>
    <h2>Nav Bar</h2>
    <p className={styles.showcaseSectionDescription}>Top navigation with logo, links, and CTA button.</p>
  </div>
  <div className={styles.showcaseComponentWrapper}>
    <NavBar />
  </div>
</section>
```

Also ensure the `emptyState` div is removed from `app/page.tsx` once the first component is added — do not leave the "No components yet" message alongside real components.

### 3b — Full clone page (`app/home/page.tsx`)

`app/home/page.tsx` is the full assembled page clone. Components go here **without** name/description wrappers — just the raw component in page order.

1. Add the import.
2. Render the component directly inside the page's return, in the correct position (navbar first, footer last).
3. No `<section>` wrappers, no headings, no descriptions — just the component tag.

Example:
```tsx
export default function ClonedHome() {
  return (
    <>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
}
```

---

## Step 4 — Verify

After all three steps:

1. Check the component file for TypeScript errors:
   - All props in the interface are used in JSX
   - No missing imports
   - JSX is valid (no unclosed tags, no `class=` instead of `className=`)

2. Check the registry file:
   - Import resolves to the correct file
   - `inputs` array covers every prop

3. Check both page files:
   - `app/page.tsx`: import added, section block renders the component with real props
   - `app/home/page.tsx`: import added, raw component rendered in page order

4. **Summarise** what was created:
   ```
   ✓ Created: components/{ComponentName}/index.tsx
   ✓ Created: components/{ComponentName}/styles.module.css
   ✓ Registered: builder-registry.ts — N inputs
   ✓ Showcased: app/page.tsx — section added
   ✓ Full page: app/home/page.tsx — component added
   ```

---

## Image & Logo Accuracy — Final Checklist

Before submitting any output, verify:

- [ ] Every `<img src>` in the original HTML has been preserved verbatim in the component's prop default
- [ ] No logo has been replaced with text, an SVG approximation, or a placeholder
- [ ] Every image URL actually appears in the generated component file
- [ ] The showcase renders the component with real image URLs, not empty strings

If any item on this checklist is unchecked, fix it before reporting completion.
