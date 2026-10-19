# Smiley Family — Household Hub

A dark, phone-first household app for Mike and Kelly, hosted on GitHub Pages.
**Sign-in required** — only Mike's and Kelly's invited accounts can get in.

## What's inside (all on one page, behind the login)
- **Live ticker** — Solon weather, AQI/pollen, UV, sunrise/sunset, alerts + sports/deal/headline extras
- **Shopping List & To-Dos** — real, editable, shared between Mike and Kelly (private database)
- **Family Calendar** — upcoming events, add right on the page
- **Deals** — Meijer, Giant Eagle Market District, Heinen's, Miles Farmers Market (tap a store to expand)
- **Recipe ideas** — built from that week's ads, pregnancy-friendly
- **Saved Recipes** — recipes Mike & Kelly save right in the app (Discover tab), with a paste-a-link box; stored in the Supabase `recipes` table
- **This Week Around Us** — Solon / Chagrin Falls / Cleveland events
- **Daily Headlines** — world, politics, tech, U.S., Cleveland & Ohio (tap to expand)
- **Baby Checklist** — shared check-off list with starter items
- **Photos** — private Moose & family photo grid with uploads (login-only storage)

## How it works
- This repo holds the page (`index.html`) and curated content (`content.json`).
- Accounts and private data live in a Supabase project (free tier) created 2026-10-18:
  tables `shopping_items`, `todos`, `events`, `baby_items`, `recipes` with row-level security
  (authenticated users only), plus the private `household-photos` storage bucket.
- The Google Sheet "Household Board — Smiley Family" and the "Smiley Family" Google
  Calendar remain in place as a backup; the app no longer depends on them.

Content (`content.json`) is refreshed by Muse: headlines daily, deals/recipes/events weekly.
