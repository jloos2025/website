# How this website is put together

Written for whoever maintains this next, human or assistant. It covers where the
domain lives, how the site gets published, and what would actually break things.

## The short version

You edit files in this repository. When a change lands on the `main` branch,
GitHub automatically builds the site and pushes it to Cloudflare, which serves it
to the world at loosandsonshvac.com. The whole trip takes about a minute.

There is no separate publish button and no login to a website editor. The code in
`main` is the live site.

## The domain and DNS

This part has three companies in it for historical reasons, so it is worth being
precise.

**IONOS** is the registrar. That means IONOS is who the domain
`loosandsonshvac.com` is actually registered with and who gets paid to renew it
each year. Do not let it lapse. Everything below stops working if the
registration expires.

**Cloudflare** runs the DNS. In August 2026 the domain's nameservers were changed
at IONOS to point at Cloudflare (`cesar.ns.cloudflare.com` and
`tegan.ns.cloudflare.com`). From that point on, Cloudflare decides where traffic
for this domain goes. If you need to change a DNS record, you do it in the
Cloudflare dashboard, not at IONOS.

**Squarespace** is not involved. An earlier assumption that the domain was at
Squarespace turned out to be wrong. If you find instructions referencing
Squarespace, they are obsolete.

### Email

Email for the domain runs through IONOS, not Cloudflare. The MX records, the SPF
record, and the `autodiscover`, `_dmarc`, and `_domainconnect` entries in
Cloudflare DNS all point back to IONOS.

**Those records must stay set to "DNS only" in Cloudflare, not "Proxied."**
Proxying them breaks mail delivery and mail client setup. If email suddenly stops
working, this is the first thing to check.

## Hosting and deployment

The site is a **Cloudflare Worker serving static assets**, configured in
`wrangler.jsonc`. The build output in `dist/` is what gets uploaded.

The pipeline is defined in `.github/workflows/deploy.yml` and runs on every push
to `main`:

1. GitHub checks out the code
2. Installs dependencies with `npm ci`
3. Builds the site with `npm run build`
4. Deploys with the Cloudflare Wrangler action

Two secrets in the GitHub repository settings make step 4 work:
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. If deploys start failing with
an authentication error, the token has probably been rotated or revoked and needs
replacing in the repository's secrets.

The domain is attached to the Worker as a custom domain for both
`loosandsonshvac.com` and `www.loosandsonshvac.com`.

## Why this setup is hard to break

This matters if you are nervous about touching it.

- **Every change is recorded.** Git keeps the full history. Any change can be
  undone by reverting the commit that made it.
- **A broken build does not reach the site.** If the code has an error, the
  build fails and the deploy step never runs. The previous version stays live.
  A bad commit means the site does not update. It does not mean the site breaks.
- **There is no database to corrupt** and no plugins to conflict. The worst
  realistic outcome of a bad edit is a page that looks wrong until it is fixed.

The genuinely risky actions are outside this repository: letting the domain
expire at IONOS, changing nameservers, deleting DNS records, or revoking the
Cloudflare API token. Be careful in those dashboards. Be relatively fearless in
this repo.

## The technology, and why

**Astro** builds the site. It was chosen because it outputs plain HTML with
almost no JavaScript, which makes pages fast and completely readable to search
engines and AI assistants. Page speed is a ranking factor and a conversion factor,
and a homeowner with no heat is often on a phone with bad signal.

**SolidJS** is available for interactive pieces and is currently used only for
the gallery filter. Interactive components load separately from the page, so one
interactive widget does not slow down everything else. Use it sparingly. Most
things do not need JavaScript.

**Images** are processed at build time into modern formats at several sizes, so a
phone downloads a small image and a desktop downloads a large one. This is why
source images go in `src/assets/` rather than `public/`. Files in `public/` are
copied as is with no optimization.

## Repository map

```
src/
  data/            The facts. Edit these, not the pages.
    business.ts    Phone, email, service list, towns. Used everywhere.
    services.ts    Full content for each service page.
    cities.ts      Full content for each city page.
    gallery.ts     Photo list, categories, alt text.
  content/blog/    Blog posts as markdown files.
  pages/           URL structure. A file here becomes a page.
  components/      Reusable pieces of page.
  layouts/Base.astro  The shared page wrapper: head tags, header, footer.
  assets/          Images that get optimized at build time.
  styles/legacy.css   All site styling, in one file.
public/            Files served as is: logo, favicon, robots.txt.
docs/              This documentation.
AGENTS.md          Rules for AI assistants working on the site.
```

## Adding third party widgets

At some point this site will likely need a lead capture or reviews widget, for
example Podium. Notes for whoever does that:

- Third party scripts are the most common cause of a fast site becoming slow.
  Add one at a time and check the site's speed afterward.
- Load them so they do not block the page from rendering. In Astro, put the
  script tag at the end of `Base.astro` and use the `defer` or `async`
  attribute.
- **A widget must never cover or replace the call button**, including the
  mobile call bar fixed to the bottom of the screen. Chat bubbles habitually
  land in exactly that spot. Check on a phone, not just a laptop.
- Keep any account keys out of the repository. Ask about environment variables
  and repository secrets rather than pasting a private key into a file.

## Where things live outside this repo

- **Domain registration and email:** IONOS
- **DNS and hosting:** Cloudflare, under the account owned by the business
- **Code and deploys:** this GitHub repository
- **Search performance:** Google Search Console and Bing Webmaster Tools, once
  verified
- **The map listing:** Google Business Profile, which is separate from this
  website and is usually the largest source of calls
