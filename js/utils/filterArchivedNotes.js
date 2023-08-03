export const filterArchivedNotes = (notes) => {
  return notes.filter((note) => note.isArchived);
};
