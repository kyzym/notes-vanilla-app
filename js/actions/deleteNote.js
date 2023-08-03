export const deleteNote = (notes, noteId) => {
  return notes.filter((note) => note.id !== noteId);
};
