export const updateNote = (notes, id, updatedNote) => {
  return notes.map((note) =>
    note.id === id ? { ...note, ...updatedNote } : note
  );
};
