export const archiveNote = (notes, noteId) => {
  return notes.map((note) => {
    if (note.id === noteId) {
      return {
        ...note,
        isArchived: !note.isArchived,
      };
    }
    return note;
  });
};
