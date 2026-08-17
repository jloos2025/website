# Launch checklist

The website is built and live. These are the steps outside the website that
decide whether anyone actually finds it.

**Progress: 0 of 6 complete.**

Nothing here is difficult. Most items take under fifteen minutes. They are listed
in order of how many phone calls they are likely to produce, highest first.

An assistant working in this repository will check this file at the start of a
session and offer to walk through the next unfinished item. Update the boxes as
you go, change `[ ]` to `[x]`, and update the progress count above. When all six
are done, the assistant stops bringing it up.

---

## [ ] 1. Google Business Profile

**This is the big one.** For a company like this, the map listing that appears
next to Google Maps produces more calls than everything else combined. Someone
searching "furnace repair near me" at nine at night is looking at that box, not
at page one of the blue links.

The website supports the profile, but it cannot replace it.

1. Go to https://business.google.com and sign in with the business Google
   account, which is loosandsons@gmail.com.
2. Search for the business name. If a listing already exists, claim it. If not,
   create one.
3. Set it up as a **service area business**, not a storefront. When it asks
   whether customers come to your location, answer no. Then **hide the address**.
   Do not enter the mailing address. It is a mailbox center, and Google suspends
   listings that use one.
4. For the service area, enter the towns the website already lists: Longmont,
   Niwot, Gunbarrel, Lyons, Berthoud, Mead, Firestone, Frederick, Dacono, Erie,
   Boulder, Louisville, Superior, Lafayette, Broomfield, Westminster, Arvada,
   Wheat Ridge, Golden, Lakewood, and Thornton. Google compares this against the
   website, so keeping them the same helps.
5. Use the exact business name as it is written elsewhere. Do not add keywords to
   it. "Loos & Sons HVAC" is correct. "Loos & Sons HVAC Furnace Repair Longmont"
   will get the listing suspended.
6. Set the website field to https://loosandsonshvac.com and the phone to
   (303) 536-8922. These must match the website exactly, character for character.
7. Choose the primary category "HVAC contractor" and add secondary categories
   that fit, for example "Heating contractor" and "Air conditioning contractor".
8. Verification usually means a postcard or a video call. Do it as soon as it is
   offered, because nothing else here matters until the listing is verified.

**Ask the assistant for:** a list of the exact town names to paste in, or help
writing the profile description in the site's voice.

---

## [ ] 2. Reviews on that profile

Once the listing is verified, reviews are the strongest ranking factor you can
influence, and the strongest thing a stranger reads before calling.

1. In the Business Profile dashboard, find the "Ask for reviews" link and copy
   the short review URL.
2. Send it to customers you have already done good work for. Text it the same
   day the job finishes, when they are still glad you came.
3. Reply to every review, good or not. Google notices, and so do the people
   reading them.

Ten honest reviews will outperform a great deal of website work. There is no
shortcut here that is worth taking. Never buy reviews or write them yourself,
which is illegal under the FTC rule on fake reviews and is exactly the kind of
thing that gets a listing removed.

**Ask the assistant for:** a short text message to send customers asking for a
review, or help writing replies to reviews.

---

## [ ] 3. Google Search Console

This tells Google the site exists rather than waiting to be found, and afterward
it shows you what people searched to reach the site. That data is how you decide
what to write next.

1. Go to https://search.google.com/search-console and sign in with the business
   Google account.
2. Choose **Domain** as the property type and enter `loosandsonshvac.com`.
3. Google gives you a TXT record to add to DNS. Sign in to Cloudflare, open the
   domain, go to DNS, and add a TXT record with the name and value Google gave
   you.
4. Back in Search Console, click Verify. If it fails, wait a few minutes and try
   again, because DNS changes take a little time.
5. Once verified, open Sitemaps in the left menu and submit:
   `sitemap-index.xml`
6. Open the URL Inspection tool, paste in `https://loosandsonshvac.com/`, and
   click "Request indexing".

**Ask the assistant for:** help with the Cloudflare DNS record if the form is
confusing. Paste in what Google gave you and it will tell you exactly which
fields to fill.

---

## [ ] 4. Bing Webmaster Tools

Smaller than Google, and worth ten minutes because it feeds Bing and, through it,
some AI assistants. If Search Console is already done, this takes almost no work.

1. Go to https://www.bing.com/webmasters and sign in.
2. Choose **Import from Google Search Console**. It copies the verification and
   the sitemap across automatically.
3. If the import does not work, add the site manually and submit the same
   sitemap: `https://loosandsonshvac.com/sitemap-index.xml`

---

## [ ] 5. The details only the owner knows

A few things on the website are written carefully around facts nobody confirmed.
Filling them in makes the site more convincing and more accurate.

- **Colorado mechanical contractor license number.** Homeowners look for this.
  It currently is not shown because a made up one was removed. Give the real
  number to the assistant and ask for it to go in the footer.
- **Years in business or the year founded.** The site deliberately makes no
  claim about company history because nobody confirmed one. A real founding year
  is worth adding.
- **Business hours,** if there are set ones. The site currently avoids stating
  hours and simply says to call.
- **Anything the competition does not do.** Certifications, brand
  authorizations, unusual equipment training. Those become real content.

**Ask the assistant to:** add each of these to the site once you have them. Never
guess at any of them.

---

## [ ] 6. The blog approval channel

Set this up when you are ready for the site to start publishing on a schedule.
See [BLOG-WORKFLOW.md](BLOG-WORKFLOW.md) for the full flow.

1. Create a private Discord channel, for example `#blog-approvals`.
2. Create a webhook for that channel and save the URL somewhere safe. Treat it
   like a password.
3. Create a Discord bot and save its token, which is what lets the assistant read
   your approval reaction. A webhook can only send messages, it cannot read them.
4. Give both to the assistant so it can set up the weekly routine.

Once this is running, a draft post appears in Discord, you react with a check
mark if you like it, and it publishes the next day. If you ignore it, nothing
happens. Silence means no.

---

## When all six are done

Change the progress count at the top to 6 of 6. The assistant will stop raising
it and you can get on with the fun part, which is writing about the work and
watching Search Console tell you what people are looking for.
