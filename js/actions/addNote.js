import { dateFormat } from '../utils/dateFormat.js';
import { extractDates } from '../utils/extractDates.js';

export const addNote = (notes, formData) => {
  const newNote = {
    id: new Date().getTime().toString(),
    name: formData.get('name'),
    content: formData.get('content'),
    category: formData.get('category'),
    createdAt: dateFormat(new Date()),
    isArchived: false,
    dates: extractDates(formData.get('content')),
  };

  return [newNote, ...notes];
};
