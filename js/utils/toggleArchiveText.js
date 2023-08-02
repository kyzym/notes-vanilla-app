import { filterArchivedNotes } from '../utils/filterArchivedNotes.js';

export const updateArchiveToggleText = (notes, showArchived) => {
  const hasArchivedNotes = filterArchivedNotes(notes).length > 0;
  const toggleTextElement = document.querySelector('.archive-toggle-text');

  if (!hasArchivedNotes || !showArchived) {
    toggleTextElement.textContent = hasArchivedNotes ? 'Show archive' : '';
  } else {
    toggleTextElement.textContent = 'Hide archive';
  }
};
