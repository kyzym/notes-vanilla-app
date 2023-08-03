export const filterActiveNotes = (notes) => {
  return notes.filter((note) => !note.isArchived);
};
