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
import { findNoteById } from './utils/findNoteById.js';
import { groupNotesByCategory } from './utils/groupNotesByCategory.js';

let notes = [];
let editingNoteId = null;

const updateNotes = (updatedNotes) => {
  notes = updatedNotes;
  const activeNotes = filterActiveNotes(notes);
  renderNotes(activeNotes);

  const groupedData = groupNotesByCategory(notes);
  const counts = countNotesByCategory(groupedData);

  renderSummaryTable(counts);
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

init();
