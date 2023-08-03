import { dateFormat } from '../utils/dateFormat.js';
import { extractContent } from '../utils/extractContent.js';
import { extractDates } from '../utils/extractDates.js';

export const addNote = (notes, formData) => {
  const contentData = formData.get('content').trim();
  const dates = extractDates(contentData);
  const name = formData.get('name').trim();

  if (!name || !contentData) return;

  const newNote = {
    id: new Date().getTime().toString(),
    name,
    content: extractContent(contentData),
    category: formData.get('category'),
    createdAt: dateFormat(new Date()),
    isArchived: false,
    dates,
  };

  return [newNote, ...notes];
};
