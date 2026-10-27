# Smiley Family — Household Hub

A dark, phone-first household app for Mike and Kelly, hosted on GitHub Pages.
**Sign-in required** — only Mike's and Kelly's invited accounts can get in.

## What's inside (six tabs: Home · Lists · Calendar · News · Discover · Photos)
- **Live ticker** — Solon weather, AQI/pollen, UV, sunrise/sunset, alerts + sports/deal/headline extras
- **Shopping List & To-Dos** — real, editable, shared between Mike and Kelly (private database)
- **Family Calendar** — upcoming events, add right on the page; a Sports on/off toggle keeps the 258 Cavs/Browns/Ohio State/Guardians fixtures from swamping family plans
- **Deals** — Meijer, Giant Eagle Market District, Heinen's, Miles Farmers Market (tap a store to expand)
- **Recipe ideas** — built from that week's ads, pregnancy-friendly
- **Saved Recipes** — recipes Mike & Kelly save right in the app (Discover tab), with a paste-a-link box; stored in the Supabase `recipes` table; expanded recipes render as a structured card (ingredient checklist, numbered steps)
- **Solon Eats** — Solon-area restaurant deals (kids-eat-free nights, happy hours), with ♥ favorites shared between both phones
- **At the Movies** — the big theatrical releases of the next few weeks
- **Now Streaming** — new movies & shows landing on the big streaming services
- **This Week Around Us** — Solon / Chagrin Falls / Cleveland events
- **Daily Headlines** — world, politics, tech, U.S., Cleveland & Ohio (tap to expand), refreshed three times a day with an in-app ⟳ Refresh button
- **Baby Checklist** — shared check-off list with starter items
- **Photos** — private Moose & family photo grid with uploads (login-only storage)
- **Themes** — four looks (Midnight, Hearth, Daylight, Aurora), switchable per phone

## How it works
- This repo holds the page (`index.html`) and curated content (`content.json`).
- Accounts and private data live in a Supabase project (free tier) created 2026-10-18:
  tables `shopping_items`, `todos`, `events`, `baby_items`, `recipes` with row-level security
  (authenticated users only), plus the private `household-photos` storage bucket.
- The Google Sheet "Household Board — Smiley Family" and the "Smiley Family" Google
  Calendar remain in place as a backup; the app no longer depends on them.

Content (`content.json`) is refreshed by Muse: headlines three times daily; deals, recipes, events, movies, eats and streaming weekly.
