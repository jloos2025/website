# Working on this site as an AI assistant

Read this file before changing anything. It exists so that any assistant, in any
tool, can pick this project up and improve it without undoing work that is
already paying off.

If you are a person and not an assistant, this file is still the fastest way to
understand how the site works. Start with `docs/ARCHITECTURE.md` instead if you
want the plumbing first.

## What this is

The public website for Loos & Sons HVAC, a family owned heating and air
conditioning company in Longmont, Colorado. It is a static site. Every page is
built ahead of time and served as plain HTML, which is why it loads fast and why
search engines and AI assistants can read all of it.

The site exists to make the phone ring. Every design and content decision should
be judged against that, not against how modern or clever the page looks.

## The rule that matters most

**When you are asked to make a change that would hurt the site's search
performance, say so before you make it.**

Explain the tradeoff in a sentence or two, then offer a way to get what the
person actually wants without the damage. If they still want it after hearing
the tradeoff, do it. They own the site. But do not quietly comply with a change
that undoes work that took real effort to get right, and do not assume a request
is uninformed just because it conflicts with this file. Ask what problem they
are trying to solve. There is usually a version of the idea that works.

This applies most often to the structure described below, because that structure
is doing more work than it looks like it is.

## Rules for anything you write

These are not stylistic preferences. Text that reads as machine generated makes
a small local business look untrustworthy, which costs calls.

1. **Never use em dashes or en dashes.** Not in page copy, not in blog posts, not
   in commit messages. Use a period and start a new sentence, or use a comma.
   This is the single most reliable tell of AI writing and it is a hard rule.
2. **Avoid the standard AI vocabulary.** No "crucial", "vibrant", "seamless",
   "robust", "showcase", "foster", "delve", "testament", "landscape" as a
   metaphor, "elevate", "unlock", or "leverage" as a verb.
3. **Avoid rule-of-three lists.** "Licensed, insured, and local" is a tell.
   Two items or four items read as human. Three reads as generated.
4. **Avoid these constructions:** "It is not just X, it is Y", tailing negations
   like "no guesswork" tacked onto a sentence, and aphorisms in the shape of
   "X is not a Y, it is a Z".
5. **Do not signpost.** Never write "let's dive in" or "here's what you need to
   know". Just say the thing.
6. **Vary sentence length.** Uniform, mid length sentences are the giveaway.
7. **Never invent facts about the business.** No made up founding year, no
   invented certifications, no fabricated customer reviews, no specific response
   time promises. If a claim needs a real number, ask the owner for it or write
   the sentence without it. Fabricated testimonials in particular are illegal
   under the FTC rule on fake reviews.

Write like a person who knows the trade explaining something to a neighbor.

## The structure, and why it is this way

Do not reorganize this without reading this section.

### One page per service

Each service lives at `/services/<slug>/` with its own H1 naming the service and
the city. Someone searching "boiler repair Longmont" needs a page whose headline
says exactly that. A single combined services page cannot rank for ten different
searches, because it only has one headline and one title.

Service content lives in `src/data/services.ts`. Add a service by adding an entry
there and a matching entry in `src/data/business.ts`. The page builds itself.

### One page per city

Each town lives at `/hvac/<slug>/`, with content in `src/data/cities.ts`.

**Every city page says something specific and true about that town.** This is not
decoration. Google's spam policy explicitly names the pattern of many city pages
that are identical except for the town name, calls it doorway pages, and
penalizes it. That penalty can affect the whole site, not just those pages.

If you add a city, write real content about its housing stock, its climate, or
its local building rules. If you cannot write something genuinely specific, do
not add the page.

### Structured data on every page

Every page includes JSON-LD schema: `HVACBusiness` on the homepage, about page,
and city pages, `Service` plus `FAQPage` on service pages, and `Article` on blog
posts. This is what lets Google show rich results and what lets AI assistants
extract facts about the business when someone asks them for an HVAC company in
Longmont.

Keep it accurate. Wrong schema is worse than no schema.

### No street address anywhere

This is deliberate. The business is a service area business that goes to
customers, and its mailing address is a mailbox center. Publishing a mailbox
address is grounds for a Google Business Profile suspension, and the profile is
the single biggest source of calls for a company like this. Publish the city and
state only. Schema uses `addressLocality` and `addressRegion` with no
`streetAddress`.

### The phone number is the whole point

A call button appears in the header, in the hero, at the bottom of every page,
and in a bar fixed to the bottom of the screen on mobile. The call button is the
only element on the site allowed to use the red accent color, so it is always
the most visually urgent thing on screen.

Do not add competing calls to action. Do not replace the phone number with a
contact form as the primary action. People with no heat call, they do not fill
out forms.

### Things not to add

- A navigation menu with many items. The current nav is short on purpose.
  Every item added makes the others less likely to be clicked.
- Carousels, sliders, popups, chat bubbles, or cookie banners. Each one slows
  the page and gets in the way of the phone number.
- Web fonts. The site uses fonts already on the device, which is why it loads
  instantly. Adding a font from a CDN would also break under the site's content
  security rules.
- Client side JavaScript frameworks for things CSS already does.

## How to make common changes

**Change the phone number, email, or service area:** edit
`src/data/business.ts`. It flows everywhere automatically. Never hardcode the
phone number in a page.

**Add or edit a service:** `src/data/services.ts` plus `src/data/business.ts`.

**Add a city:** `src/data/cities.ts`, with genuinely specific local content.

**Add a blog post:** add a markdown file to `src/content/blog/`. See
`docs/BLOG-WORKFLOW.md`.

**Add photos:** put resized images in `src/assets/gallery/` and register them in
`src/data/gallery.ts` with real alt text describing the actual work. Resize to
1600 pixels wide before committing. Never commit a 5 MB phone photo.

## Before you finish

Run the build and make sure it passes:

```
npm run build
```

Then check your work:

- Search your changes for em dashes. Any hit means you are not done.
- Confirm no fabricated facts about the business.
- If you touched layout, check it at a narrow phone width and a wide desktop
  width. A logo or heading that looks right on one screen can be cut off on
  another.

Committing to the `main` branch publishes to the live website within about a
minute. There is no separate publish step. See `docs/ARCHITECTURE.md`.
