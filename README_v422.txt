LiftLog v4.22 — flexible exercise logging, history deletion and pending-workout rotation.
Deploy index.html, sw.js and the full assets directory to the existing GitHub Pages repository.
Changes:
- Log any exercise from Library > exercise detail > Log this exercise.
- Add exercise from Today's workout, opening the library.
- Delete individual exercise records from History after confirmation.
- Deletions synchronize using tombstones (deleted rows remain in Supabase to prevent reappearance; filter payload->>'deleted' when counting active records).
- Pending-workout recommendation tracks outstanding cycle categories and ignores manually added extras.
- Existing localStorage key, Supabase table, 85 library entries and images retained.
Backup local history before deploying. Verify deletion and edit synchronization on both devices before relying on them.
