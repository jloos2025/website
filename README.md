# loosandsonshvac.com

The website for Loos & Sons HVAC in Longmont, Colorado.

## Start here

| If you want to | Read |
| --- | --- |
| Understand how the site is hosted and published | [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| Work on this site with an AI assistant | [AGENTS.md](AGENTS.md) |
| Publish a blog post | [docs/BLOG-WORKFLOW.md](docs/BLOG-WORKFLOW.md) |
| Find something to write about | [docs/BLOG-IDEAS.md](docs/BLOG-IDEAS.md) |
| Get the site running on your computer | Below |

## The one thing to know

**Committing to the `main` branch publishes to the live website.** There is no
separate publish step. A change merged to `main` is on loosandsonshvac.com about
a minute later.

If a change has a mistake in the code, the build fails and the deploy never runs,
so the old version stays up. You cannot take the site down with a bad edit. Every
change is also recorded in git and can be undone.

## Running it on your computer

You need [Node.js](https://nodejs.org) version 20 or newer.

```bash
npm install
```

```bash
npm run dev
```

That starts the site at http://localhost:4321. Edit a file and the browser
updates by itself. Nothing you do here touches the live site.

To check that a change will build cleanly before committing:

```bash
npm run build
```

## Where to change things

Almost everything is data rather than code. You usually do not need to touch a
page file.

| To change | Edit |
| --- | --- |
| Phone number, email, service list, towns | `src/data/business.ts` |
| A service page's content | `src/data/services.ts` |
| A city page's content | `src/data/cities.ts` |
| Photos and their captions | `src/data/gallery.ts` |
| Blog posts | `src/content/blog/` |
| Colors, spacing, fonts | `src/styles/legacy.css` |

The phone number lives in exactly one place and flows to every page. Never type
it into a page directly.

## House rules

Two that are not negotiable, both explained in [AGENTS.md](AGENTS.md):

1. **No em dashes anywhere.** They are the clearest sign of AI written text and
   they make a local business look less trustworthy.
2. **Never invent facts about the business.** No made up dates, credentials,
   response times, or customer reviews.
