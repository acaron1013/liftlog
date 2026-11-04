LiftLog v4.23 — delete workouts, exercises and sets from History.
Delete workout: groups all records with the same date and workout type; deleting removes all matching exercises.
Delete exercise: marks its cloud record deleted.
Delete set: updates the parent exercise and syncs it; deleting its last set deletes the exercise.
Back up first. Sync deletions via tombstones. If multiple sessions of the same workout type are logged on one day, they are treated as one group.
