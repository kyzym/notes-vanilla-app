export const groupNotesByCategory = (notes) => {
  return notes.reduce((groupedNotes, note) => {
    const key = note.category;

    if (!groupedNotes[key]) {
      groupedNotes[key] = [];
    }

    groupedNotes[key].push(note);

    return groupedNotes;
  }, {});
};
