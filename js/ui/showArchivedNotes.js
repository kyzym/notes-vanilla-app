import { filterArchivedNotes } from '../utils/filterArchivedNotes.js';
import { filterActiveNotes } from '../utils/filterActiveNotes.js';
import { renderNotes } from '../renderNotes.js';
import { updateArchiveToggleText } from '../utils/toggleArchiveText.js';

export const showArchivedNotes = (notes, showArchived) => {
  const archivedNotes = filterArchivedNotes(notes);

  if (archivedNotes.length === 0) {
    showArchived = false;
  } else {
    showArchived = !showArchived;
  }

  const notesToRender = showArchived ? archivedNotes : filterActiveNotes(notes);
  renderNotes(notesToRender);

  updateArchiveToggleText(notes, showArchived);

  return showArchived;
};
