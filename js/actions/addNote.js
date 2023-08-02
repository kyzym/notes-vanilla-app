import { dateFormat } from '../utils/dateFormat.js';
import { extractContent } from '../utils/extractContent.js';
import { extractDates } from '../utils/extractDates.js';

export const addNote = (notes, formData) => {
  const contentData = formData.get('content');
  const dates = extractDates(contentData);

  const newNote = {
    id: new Date().getTime().toString(),
    name: formData.get('name'),
    content: extractContent(contentData),
    category: formData.get('category'),
    createdAt: dateFormat(new Date()),
    isArchived: false,
    dates,
  };

  return [newNote, ...notes];
};
