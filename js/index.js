import { fetchData } from '../api/fetchData.js';
import { addNote } from './actions/addNote.js';
import { archiveNote } from './actions/archiveNote.js';
import { deleteNote } from './actions/deleteNote.js';
import { editNote } from './actions/editNote.js';
import { renderNotes } from './renderNotes.js';
import { renderSummaryTable } from './renderSummaryTable.js';
import { closeModal, openModal } from './ui/modal.js';
import { countNotesByCategory } from './utils/countNotesByCategory.js';
import { fillNoteForm } from './utils/fillNoteForm.js';
import { filterActiveNotes } from './utils/filterActiveNotes.js';
import { filterArchivedNotes } from './utils/filterArchivedNotes.js';
import { findNoteById } from './utils/findNoteById.js';
import { groupNotesByCategory } from './utils/groupNotesByCategory.js';

let notes = [];
let editingNoteId = null;
let showArchived = false;

const updateArchiveToggleText = () => {
  const hasArchivedNotes = filterArchivedNotes(notes).length > 0;
  const toggleTextElement = document.querySelector('.archive-toggle-text');

  if (!hasArchivedNotes || !showArchived) {
    toggleTextElement.textContent = hasArchivedNotes ? 'Show archive' : '';
  } else {
    toggleTextElement.textContent = 'Hide archive';
  }
};

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

  updateArchiveToggleText();
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

notesList.addEventListener('click', (e) => {
  const noteItem = e.target.closest('.note-list-item');

  const noteId = noteItem.getAttribute('data-id');

  if (e.target.closest('.note-delete')) {
    const updatedNotes = deleteNote(notes, noteId);

    updateNotes(updatedNotes);
  } else if (e.target.closest('.note-archive')) {
    const updatedNotes = archiveNote(notes, noteId);

    updateNotes(updatedNotes);
  } else if (e.target.closest('.note-edit')) {
    editingNoteId = noteId;

    const note = findNoteById(notes, editingNoteId);

    fillNoteForm(note);
    openModal();
  }
});

const createNoteBtn = document.querySelector('.create-note-btn');

createNoteBtn.addEventListener('click', openModal);

const toggleArchiveButton = document.querySelector('.toggle-archive-btn');

const showArchivedNotes = () => {
  const archivedNotes = filterArchivedNotes(notes);

  if (archivedNotes.length === 0) {
    showArchived = false;
  } else {
    showArchived = !showArchived;
  }

  const notesToRender = showArchived ? archivedNotes : filterActiveNotes(notes);
  renderNotes(notesToRender);

  updateArchiveToggleText();
};

toggleArchiveButton.addEventListener('click', showArchivedNotes);

init();
