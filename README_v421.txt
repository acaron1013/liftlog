LiftLog v4.21 automatic cloud synchronization

Deploy index.html, sw.js and assets/ together to GitHub Pages. Export a backup before updating.

When signed in, sync runs on sign-in, startup (per tab session), returning online, returning to app, and every 60 seconds. Local edits are queued and merged by record ID and updated_at. Records are never automatically deleted from cloud. Local rest-day settings and profile preferences are not cloud synced in this release.

IMPORTANT: Verify counts and a test entry on two devices. Existing browser storage key unchanged.
