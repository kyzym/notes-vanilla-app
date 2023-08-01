import { extractDates } from '../utils/extractDates.js';

export const addNote = (notes, formData) => {
  const newNote = {
    name: formData.get('name'),
    content: formData.get('content'),
    category: formData.get('category'),
    createdAt: new Date().toLocaleString(),
    status: 'active',
    dates: extractDates(formData.get('content')),
  };

  return [newNote, ...notes];
};
