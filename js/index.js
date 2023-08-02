import { fetchData } from '../api/fetchData.js';
import { addNote } from './actions/addNote.js';
import { archiveNote } from './actions/archiveNote.js';
import { deleteNote } from './actions/deleteNote.js';
import { editNote } from './actions/editNote.js';
import { renderNotes } from './renderNotes.js';
import { renderSummaryTable } from './renderSummaryTable.js';
import { closeModal, openModal } from './ui/modal.js';
import { showArchivedNotes } from './ui/showArchivedNotes.js';
import { countNotesByCategory } from './utils/countNotesByCategory.js';
import { fillNoteForm } from './utils/fillNoteForm.js';
import { filterActiveNotes } from './utils/filterActiveNotes.js';
import { filterArchivedNotes } from './utils/filterArchivedNotes.js';
import { findNoteById } from './utils/findNoteById.js';
import { groupNotesByCategory } from './utils/groupNotesByCategory.js';
import { updateArchiveToggleText } from './utils/toggleArchiveText.js';

let notes = [];
let editingNoteId = null;
let showArchived = false;

const updateNotes = (updatedNotes) => {
  notes = updatedNotes;

  const archivedNotes = filterArchivedNotes(notes);
  if (archivedNotes.length === 0) {
    showArchived = false;
  }

  const notesToRender = showArchived
    ? filterArchivedNotes(notes)
    : filterActiveNotes(notes);

  renderNotes(notesToRender);

  const groupedData = groupNotesByCategory(notes);
  const counts = countNotesByCategory(groupedData);

  renderSummaryTable(counts);

  updateArchiveToggleText(notes, showArchived);
};

const init = async () => {
  try {
    notes = await fetchData();

    renderNotes(notes);

    const groupedData = groupNotesByCategory(notes);
    const counts = countNotesByCategory(groupedData);

    renderSummaryTable(counts);
  } catch (error) {
    console.error(error);
  }
};

const noteForm = document.querySelector('.note-form');
noteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  if (editingNoteId) {
    notes = editNote(notes, editingNoteId, formData);
    closeModal();
  } else {
    notes = addNote(notes, formData);
  }

  updateNotes(notes);

  noteForm.reset();
});

const notesList = document.querySelector('.notes-list');

const actionHandlers = {
  'note-delete': (notes, noteId) => deleteNote(notes, noteId),
  'note-archive': (notes, noteId) => archiveNote(notes, noteId),
  'note-edit': (notes, noteId) => {
    editingNoteId = noteId;
    const note = findNoteById(notes, editingNoteId);
    fillNoteForm(note);
    openModal();
    return notes;
  },
};

notesList.addEventListener('click', (e) => {
  const noteItem = e.target.closest('.note-list-item');
  if (!noteItem) return;

  const noteId = noteItem.getAttribute('data-id');

  const actionClass = Object.keys(actionHandlers).find((actionClass) =>
    e.target.closest(`.${actionClass}`)
  );

  if (actionClass) {
    const updatedNotes = actionHandlers[actionClass](notes, noteId);
    updateNotes(updatedNotes);
  }
});

const createNoteBtn = document.querySelector('.create-note-btn');
createNoteBtn.addEventListener('click', openModal);

const toggleArchiveButton = document.querySelector('.toggle-archive-btn');
toggleArchiveButton.addEventListener('click', () => {
  showArchived = showArchivedNotes(notes, showArchived);
});

init();
