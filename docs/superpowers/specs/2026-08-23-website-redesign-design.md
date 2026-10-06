# Baruch UCLA Website Redesign — Design Spec

Date: 2026-08-23
Status: Approved for planning

## Goal

Modernize the Baruch UCLA website with a full visual overhaul, richer motion, and a
dedicated page per team member personalized by that member's board position. The
existing brand colors are preserved; typography changes.

## Constraints

- No new dependencies. Use what is installed: Next.js 15 (App Router), React 19,
  Tailwind CSS v4, DaisyUI 5, `motion` v12, `lucide-react`, `next/font/google`.
- Brand colors `#e9a033` (gold) and `#992933` (maroon) remain the primary identity.
- Bios contain CJK characters (Chinese and Japanese). The body font stack must
  cover them.
- All 24 member photos already exist in `public/team/`. No new assets or
  written content are required.

## Decisions

| Question | Decision |
| --- | --- |
| Redesign scope | Full visual overhaul on a shared design-token foundation |
| Position personalization | Role identity kit: per-position icon, accent, and role blurb |
| Team navigation | Homepage teaser → `/team` directory → `/team/[slug]` detail |
| Existing modal | Deleted |
| Typography | Fraunces (display) + Inter (body) + Noto Sans SC (CJK fallback) |
| Motion level | Tasteful; reveals fire once; honors `prefers-reduced-motion` |
| Accent palette | Warm family derived between gold and maroon |
| Implementation strategy | Design tokens and shared primitives first, then rebuild sections |

## 1. Design System Foundation

All tokens live in a Tailwind v4 `@theme` block in `app/globals.css`. No config
file, no new dependencies.

### Color tokens

```css
@theme {
  /* Brand */
  --color-gold: #e9a033;
  --color-maroon: #992933;

  /* Warm neutrals — replace pure white/black */
  --color-parchment: #fdfbf7;
  --color-parchment-deep: #f7f2e9;
  --color-ink: #1a1416;
  --color-ink-muted: #5c5054;
  --color-hairline: #e8ded1;

  /* Position accents — warm ramp between gold and maroon */
  --color-honey: #d98c2b;
  --color-bronze: #b8762e;
  --color-ochre: #a86b2c;
  --color-copper: #c2712f;
  --color-terracotta: #b8532f;
  --color-rust: #a8452e;
  --color-sienna: #9c4a3c;
  --color-clay: #8f4436;
  --color-brick: #a83a34;
  --color-wine: #8a2f3d;
  --color-plum: #7b3446;
  --color-mulberry: #6d3850;
}
```

Rationale for warm neutrals: pure `#ffffff` and `#000000` against gold and maroon
is the main reason the current site reads as templated. Warming both ends makes the
palette cohere without introducing new brand colors.

### Typography

- Display and headings: **Fraunces** (variable serif, real weight range — needed
  because headings span section titles through hero display sizes).
- Body: **Inter**.
- CJK fallback: **Noto Sans SC**, placed after Inter in the sans stack so the
  Chinese and Japanese characters in bios render in a matched face rather than a
  system fallback.

```css
@theme {
  --font-display: var(--font-fraunces), Georgia, serif;
  --font-sans: var(--font-inter), var(--font-noto-sc), system-ui, sans-serif;

  --text-display-xl: clamp(2.75rem, 7vw, 6rem);
  --text-display-lg: clamp(2.25rem, 5vw, 4rem);
  --text-display-md: clamp(1.75rem, 3.5vw, 2.75rem);
  --text-display-sm: clamp(1.375rem, 2.5vw, 1.875rem);
}
```

Fluid `clamp()` sizing replaces the current stepped `text-5xl md:text-6xl lg:text-8xl`
pattern so headings scale continuously instead of jumping at breakpoints.

### Motion and elevation tokens

```css
@theme {
  --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);
  --shadow-card: 0 1px 2px rgb(26 20 22 / 0.04), 0 8px 24px -8px rgb(26 20 22 / 0.10);
  --shadow-card-hover: 0 2px 4px rgb(26 20 22 / 0.06), 0 16px 40px -12px rgb(26 20 22 / 0.18);
}
```

## 2. Data Model

`TeamData/data.ts` is restructured. Three changes:

1. **`slug`** — an explicit, stable URL identifier. Replaces deriving URLs at
   runtime via `name.toLowerCase().replace(/\s+/g, "-")`.
2. **`position`** — a typed union, replacing free-text `title: string`. A typo
   currently fails silently; with a union it fails at compile time.
3. **`tier`** — `"eboard" | "board"`. `Team.tsx` currently hardcodes the roster
   twice (four named E-board references plus a 20-entry board list). Both lists
   become filters over one array.

```ts
export type Position =
  | "President"
  | "Vice President"
  | "Treasurer"
  | "Secretary"
  | "Assistant Treasurer"
  | "Graphics"
  | "Membership"
  | "Philanthropy"
  | "Media Production"
  | "Fundraising"
  | "Marketing"
  | "CLP"
  | "Public Relations"
  | "Events";

export type Tier = "eboard" | "board";

export interface TeamMember {
  slug: string;
  name: string;
  position: Position;
  tier: Tier;
  image: string;
  bio: string;
  linkedin?: string;
  instagram?: string;
}

export const teamMembers: TeamMember[];
export function getMemberBySlug(slug: string): TeamMember | undefined;
export function getMembersByTier(tier: Tier): TeamMember[];
export function getMembersByPosition(position: Position): TeamMember[];
```

The `(m: any)` cast in the current `getMemberBySlug` is removed.

Peiling Luo's `linkedin` is an empty string in the current data. It becomes
`undefined` (field omitted), and all social links render conditionally.

### Roster mapping

E-board (4): Anthony Zhang (President), Michael Jiang (Vice President),
Jacky Mei (Treasurer), Jamie Wu (Secretary).

Board (20): Jessie Tam, Victoria Sung, Tiffany Lung (Graphics); Anna Deng,
Puspita Esha (Membership); Kaylin Zhou, Bin Lu (Philanthropy); Kenny Cen,
Iven Yang (Media Production); Hinson Dong, Justin Liu (Fundraising); Ivan Tan,
Mina Chen (Marketing); Stuart Xu, Mingshuo Zhang (CLP); Peiling Luo,
Johnson Guo (Assistant Treasurer); Anson Wat (Public Relations); Fiona Cheng,
Bryan Ang (Events).

## 3. Position Registry

New file `TeamData/positions.ts`. This is the single source of truth for the role
identity kit.

```ts
export type AccentToken =
  | "gold" | "honey" | "bronze" | "ochre" | "copper"
  | "terracotta" | "rust" | "sienna" | "clay"
  | "brick" | "maroon" | "wine" | "plum" | "mulberry";

export interface PositionMeta {
  label: string;
  icon: LucideIcon;
  accent: AccentToken;
  blurb: string;    // what this role does
}

export const positions: Record<Position, PositionMeta>;
```

`accent` is a union of token names rather than a bare `string`, for the same
compile-time-safety reason `position` is a union.

Typing it as `Record<Position, PositionMeta>` means adding a position to the union
without supplying metadata is a compile error.

| Position | Tier | Icon | Accent | Blurb |
| --- | --- | --- | --- | --- |
| President | eboard | `Crown` | `maroon` | Leads the executive board, sets the year's vision, and represents UCLA across Baruch College. |
| Vice President | eboard | `Shield` | `wine` | Supports the president, coordinates the board, and steps in to lead when needed. |
| Treasurer | eboard | `Coins` | `plum` | Manages the club budget, tracks spending, and keeps every event financially on track. |
| Secretary | eboard | `NotebookPen` | `mulberry` | Keeps records of meetings, handles internal communication, and keeps the board organized. |
| Assistant Treasurer | board | `Calculator` | `brick` | Works alongside the treasurer on budgeting, reimbursements, and financial records. |
| Graphics | board | `Palette` | `gold` | Designs the posters, social posts, and visual identity that give every UCLA event its look. |
| Media Production | board | `Clapperboard` | `honey` | Shoots and edits the photo and video that document club life and reach new members. |
| Marketing | board | `Megaphone` | `bronze` | Grows UCLA's audience and plans the campaigns that get students through the door. |
| Public Relations | board | `Handshake` | `ochre` | Represents UCLA to other clubs and organizations and builds outside partnerships. |
| Events | board | `PartyPopper` | `copper` | Plans and runs the socials, mixers, and celebrations that bring the club together. |
| Membership | board | `UserPlus` | `terracotta` | Welcomes new members, tracks engagement, and makes sure nobody feels like a stranger. |
| Fundraising | board | `PiggyBank` | `rust` | Raises the funds that make UCLA's events and programming possible. |
| Philanthropy | board | `HeartHandshake` | `sienna` | Organizes volunteering and service so the club gives back to New York City. |
| CLP | board | `Languages` | `clay` | Runs the Cultural Learning Program, teaching Chinese language, traditions, and heritage. |

E-board positions take the deep maroon-to-mulberry end of the ramp to signal
seniority; board positions spread across gold through clay. All fourteen accents
sit between the two existing brand colors on the color wheel.

"CLP" expands to "Cultural Learning Program", matching the existing label in
`Events.tsx`.

## 4. Routes

| Route | Type | Contents |
| --- | --- | --- |
| `/` | Static | Homepage. Team section becomes a 4-card E-board teaser with a "Meet the full team" CTA. |
| `/team` | Static | Full directory, grouped by position, each group headed by its accent and icon. |
| `/team/[slug]` | Static (24 pages) | Member page. |

- `generateStaticParams` prerenders all 24 member pages at build time.
- `generateMetadata` per member produces titles like
  `Anthony Zhang — President | Baruch UCLA`, so shared links preview correctly
  instead of using the generic site title.
- `app/team/[slug]/not-found.tsx` handles unknown slugs.
- Note: in Next.js 15, `params` in a page is a Promise and must be awaited.

## 5. Member Page Anatomy

Top to bottom:

1. **Accent header band.** To be unambiguous: the band background is the position's
   accent at roughly 8% opacity over parchment, with a 3px solid rule of the accent
   at full strength along its bottom edge. The accent is used at full strength only
   for the icon, the rule, and link hover states — never as a large flat fill, which
   would fight the gold and maroon brand colors.
2. **Eyebrow**: position icon and label, plus a tier badge (E-board / Board).
3. **Name** set in Fraunces at `--text-display-lg`.
4. **Portrait**, sized generously. The current card crops to `w-64 h-52`, which is
   tight on faces; the detail page uses a larger, taller crop.
5. **Role blurb** from the position registry — this is the "personalized by
   position" content.
6. **Bio** at a reading measure of roughly 65 characters, replacing the cramped
   modal column.
7. **Social links** — LinkedIn and Instagram, rendered conditionally.
8. **Prev/next navigation** through the canonical roster order (defined below),
   wrapping at both ends.
9. **Back to `/team`**.

### Canonical roster order

Both the `/team` directory grouping and the prev/next navigation derive from one
ordering, so they never disagree: E-board first in the order President, Vice
President, Treasurer, Secretary; then board positions in the order Assistant
Treasurer, Graphics, Media Production, Marketing, Public Relations, Events,
Membership, Fundraising, Philanthropy, CLP; and members within a position in the
order they appear in `teamMembers`.

Prev/next walks this flat order rather than staying within a position, because
five positions (President, Vice President, Treasurer, Secretary, Public Relations)
have exactly one member and within-position navigation would render nothing for
them.

## 6. Motion System

A single `Reveal` component centralizes the scroll-reveal pattern that is currently
duplicated across roughly 30 inline `motion` calls.

- `initial={{ opacity: 0, y: 16 }}`, `whileInView`, and critically
  `viewport={{ once: true, margin: "-10%" }}`. The current code omits `once`, so
  every section re-animates each time it scrolls into view.
- Calls `useReducedMotion()` from `motion/react`; when set, transforms are dropped
  and content appears without movement.
- A `stagger` variant lets a grid parent cascade its children, replacing
  per-element hardcoded delays. This structurally prevents bugs like the one in
  `Culture.tsx`, where the button has `delay: 0.5` while the paragraph above it has
  `delay: 0.9`, so the button currently animates in before the text it follows.
- **Hero** switches from `whileInView` to `animate`, since it is above the fold and
  already in view on load. Delays tighten from the current 0.5–1.3s to
  approximately 0.05–0.35s.
- Route transitions use `app/template.tsx` with a fade.
- Explicitly **not** doing cross-route shared-element morphing of the portrait via
  `layoutId`; it is unreliable across App Router boundaries.

## 7. Homepage Sections

### Hero
Keeps its background image and copy. Gains the fluid type scale, the timing fix
above, and a gradient scrim to guarantee contrast for the white text.

### Navbar
Scroll-aware: transparent over the hero, solid with a backdrop blur once scrolled.
Adds a `/team` link. Its two duplicated nav lists (desktop and mobile) collapse
into one array rendered twice.

### Pillars
Four copy-pasted blocks become a data-driven map. Bare circles gain card treatment.

### BestMoments
Rebuilt. Current problems being fixed:
- Imperative DOM manipulation via `sliderRef.current.style.transform` and
  measurement of `children[0].clientWidth`, which fights React and breaks if the
  layout changes. Replaced by `motion` driving the transform from state.
- The autoplay `setInterval` is re-created on every slide change because
  `currentSlide` is in its dependency array.
- `totalSlides` is hardcoded to `4` while the four images are hardcoded inline;
  the count will be derived from the image array.
- Adds dot indicators and pause-on-hover.

### About and Culture
These are the same mirrored two-column layout. Both are extracted into one shared
`FeatureSplit` component with an `align` prop controlling which side the image sits
on. Both images currently carry `hidden md:block`, meaning mobile visitors never
see them; the shared component shows the image on mobile above the text.

### Events
Rebuilt. The three cards currently use inline
`style={{ backgroundImage: "url(...)" }}`, bypassing `next/image` entirely, so
those photos ship unoptimized. They become real `Image` components with a gradient
scrim for legibility (white text currently sits directly on photos), driven from an
array rather than three copy-pasted divs. The section has no animation today and
gains a reveal.

### Footer
Structure retained. The dead `href="#"` links on Privacy and Terms are left
non-functional rather than styled as working links, and flagged for the user to
supply destinations.

### Chatbot
Not redesigned. It inherits the new fonts and color tokens so it does not clash,
but its behavior and layout are unchanged.

## 8. File Plan

**New**

- `TeamData/positions.ts`
- `app/components/ui/Reveal.tsx`
- `app/components/ui/Section.tsx`
- `app/components/ui/SectionHeading.tsx`
- `app/components/ui/Button.tsx`
- `app/components/ui/FeatureSplit.tsx`
- `app/components/PositionBadge.tsx`
- `app/components/TeamDirectory.tsx`
- `app/components/MemberProfile.tsx`
- `app/components/MemberNav.tsx`
- `app/team/page.tsx`
- `app/team/[slug]/page.tsx`
- `app/team/[slug]/not-found.tsx`
- `app/template.tsx`

**Modified**

- `TeamData/data.ts`
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `app/components/Hero.tsx`
- `app/components/Navbar.tsx`
- `app/components/Pillars.tsx`
- `app/components/BestMoments.tsx`
- `app/components/About.tsx`
- `app/components/Events.tsx`
- `app/components/Culture.tsx`
- `app/components/Team.tsx`
- `app/components/TeamCard.tsx`
- `app/components/Footer.tsx`

**Deleted**

- `app/components/TeamModal.tsx`

## 9. Suggested Phasing

This is a large change surface. It should be implemented in three phases, each of
which leaves the site in a working, buildable state:

1. **Foundation** — `globals.css` tokens, `layout.tsx` fonts, and the shared `ui/`
   primitives (`Reveal`, `Section`, `SectionHeading`, `Button`). Nothing visually
   final yet, but everything downstream depends on it.
2. **Team** — data model, position registry, the `/team` and `/team/[slug]` routes,
   the homepage teaser, and deletion of `TeamModal.tsx`.
3. **Homepage sections** — Hero, Navbar, Pillars, BestMoments, About/Culture via
   `FeatureSplit`, Events, Footer.

## 10. Verification

No test framework is installed, and a static marketing site does not warrant
adding one. The gate is:

1. `npm run build` passes. This is meaningful here: the `Position` union and the
   `Record<Position, PositionMeta>` registry turn role-metadata coverage into a
   compile-time check, and the build also confirms all 24 static member pages
   generate.
2. `npm run lint` clean.
3. Browser walkthrough at mobile and desktop widths: homepage sections render,
   `/team` groups correctly, a sample of member pages across different positions
   show the right icon, accent, and blurb, and prev/next navigation works.
4. Confirm the reduced-motion path by enabling the OS setting.
5. Confirm CJK characters in Jacky Mei's and Puspita Esha's bios render in the
   intended font rather than a system fallback.

## 11. Out of Scope

- Dark mode.
- Chatbot redesign beyond inheriting tokens.
- New per-member content such as portfolios, event histories, or media galleries
  (the role identity kit was chosen specifically to avoid requiring this).
- Adding a test framework.
- Privacy and Terms page content.
- Changes to `app/api/chatbot/route.ts`, `package.json`, or `tsconfig.json`, which
  have pre-existing uncommitted modifications unrelated to this work.
