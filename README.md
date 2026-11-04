# LiftLog v4.25 — ChatGPT read-only analysis export

This update adds a read-only ChatGPT analysis export under Settings & Sync. Download the analysis JSON, then upload it to a ChatGPT conversation with the copied analysis prompt. No direct/live ChatGPT-to-Supabase connection is established. No Supabase SQL changes are needed.

Export includes workouts, sets, rest days, and training goals, but excludes API keys, passwords, account emails, tokens, and deleted records. Existing cloud sync and workout data format are unchanged.

## Deploy
Export a LiftLog backup first. Upload `index.html`, `sw.js`, and `assets/` to GitHub Pages. Confirm `index.html` has a fresh commit. Sign in, wait for cloud sync, and use Settings & Sync > Analyze with ChatGPT.
