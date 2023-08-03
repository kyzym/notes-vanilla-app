export const countNotesByCategory = (groupedNotes) => {
  let counts = {};

  for (let category in groupedNotes) {
    counts[category] = {
      active: groupedNotes[category].filter((note) => !note.isArchived).length,
      archived: groupedNotes[category].filter((note) => note.isArchived).length,
    };
  }

  return counts;
};
