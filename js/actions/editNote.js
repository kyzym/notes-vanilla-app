import { extractContent } from '../utils/extractContent.js';
import { extractDates } from '../utils/extractDates.js';
import { updateNote } from '../utils/updateNote.js';

export const editNote = (notes, editingNoteId, formData) => {
  const contentData = formData.get('content').trim();
  const name = formData.get('name').trim();

  const updatedNoteData = {
    name,
    content: extractContent(contentData),
    category: formData.get('category'),
    dates: extractDates(contentData),
  };

  return updateNote(notes, editingNoteId, updatedNoteData);
};
