# Publishing blog posts, with approval before anything goes live

The blog exists because every useful post is another page that can answer a
search and another reason for Google and AI assistants to treat this site as a
real source. A steady trickle beats a burst and then silence.

**Target: one post every one or two weeks. Never more than one a week.**

Ten thoughtful posts a year will do more than forty thin ones. Search engines
reward the first pattern and discount the second.

## The approval loop

Nothing publishes without a human saying yes. The flow is:

1. The assistant drafts a post and posts the draft to a Discord channel.
2. A person reads it and reacts with a specific emoji to approve.
3. The next day, the assistant checks for that emoji. If it is there, the post
   goes live. If it is not, nothing happens.

Silence means no. That is deliberate. A post nobody looked at should not publish
itself.

### Setting up the Discord side

1. In Discord, create a private channel, for example `#blog-approvals`.
2. Channel settings, then Integrations, then Webhooks, then New Webhook.
3. Copy the webhook URL. Anyone with that URL can post to the channel, so treat
   it like a password. Store it as a secret, never in this repository.
4. Decide the approval emoji and write it down here. The current convention is
   a white check mark reaction, `:white_check_mark:`.

Reading reactions needs more than a webhook, because webhooks can only send. Two
ways to handle that:

- **Simplest:** the person replies in the channel with the word `approve` and the
  post filename, and the assistant reads the channel. This needs a bot token with
  permission to read message history.
- **Emoji version:** as described above, which also needs a bot token with the
  Read Message History permission and the Message Content intent enabled.

Either way you need a Discord bot token stored as a secret. The webhook alone is
enough to post drafts, but not to read approvals.

## Instructions to give ChatGPT Codex

Paste this into Codex as a recurring task, once you have filled in the two
secrets.

> Every Monday morning, do the following in the loosandsonshvac website
> repository.
>
> First read `AGENTS.md` in the repository root and follow every writing rule in
> it, especially the rule against em dashes and the rule against inventing facts
> about the business.
>
> Check `src/content/blog/` for posts published in the last 10 days. If there is
> one, stop and do nothing this week. We publish at most one post every week or
> two.
>
> Otherwise, pick a topic from `docs/BLOG-IDEAS.md` that has not been written
> yet, preferring one that suits the current season on the Colorado Front Range.
> Write a post of roughly 700 to 1200 words that genuinely helps a homeowner,
> including when the honest answer is that they do not need to call anyone.
>
> Create the file at `src/content/blog/<slug>.md` with this frontmatter:
> `h1`, `title`, `description`, `date`, and `draft: true`. Keep `draft: true` for
> now. A draft does not appear on the live site.
>
> The `h1` must name the specific problem and, where it fits naturally, the city
> or region. "Five Things to Check on Your Furnace Before the First Cold Night"
> works. "Winter HVAC Tips" does not.
>
> Commit the draft to a branch named `blog/<slug>` and push it. Do not merge it.
>
> Then post to the Discord webhook stored in the DISCORD_WEBHOOK_URL secret: the
> proposed headline, the description, the first two paragraphs, and the branch
> name. Ask for a white check mark reaction to approve.
>
> The next day, check the Discord channel for a white check mark reaction on that
> message. If it is there, change `draft: true` to `draft: false` in the post,
> merge the branch into `main`, and confirm in Discord that it published. If it
> is not there, do nothing and leave the branch alone. Do not ask again and do
> not publish without the reaction.

## Writing a post by hand

Create a file in `src/content/blog/` named for its URL. A file called
`furnace-making-noise.md` becomes `/blog/furnace-making-noise/`.

```markdown
---
h1: The headline readers see on the page
title: The shorter title for browser tabs and search results
description: One or two sentences describing the post for search results.
date: 2026-09-15
draft: false
---

Your first paragraph. Get to the point immediately, without a warm up.

## A subheading

More content. Use `##` for sections and `###` under those.
```

Set `draft: true` to keep it off the live site. Set it to `false` to publish.

That is the whole process. Commit the file to `main` and it publishes.

## What makes a post worth publishing

- **It answers a question a homeowner actually types.** "Why is my furnace
  blowing cold air" is a real search. "The importance of HVAC maintenance" is
  not.
- **It is specific to here.** Colorado winters, Front Range summers, elevation,
  hard water, the housing stock in these towns. Generic advice is already on a
  thousand other sites.
- **It tells people what they can check themselves.** Giving away the easy fixes
  builds more trust than withholding them, and the people whose problem is not
  an easy fix are the ones who call.
- **It has one clear headline** that names the actual problem.
- **It ends with a call to action** and the phone number.
- **It does not read as machine written.** See `AGENTS.md`.

## What not to do

- Do not publish several posts at once to catch up. It looks automated because
  it is.
- Do not write about a service the business does not offer.
- Do not invent statistics, studies, or customer stories. If a number is not
  verifiable, leave it out.
- Do not rewrite or delete old posts to "refresh" them without a reason. Old
  posts accumulate value over time.
