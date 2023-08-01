import { fetchData } from '../api/fetchData.js';
import { addNote } from './actions/addNote.js';
import { renderNotes } from './renderNotes.js';
import { renderSummaryTable } from './renderSummaryTable.js';

import { countNotesByCategory } from './utils/countNotesByCategory.js';
import { groupNotesByCategory } from './utils/groupNotesByCategory.js';

let notes = [];

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

  notes = addNote(notes, formData);

  renderNotes(notes);
  const groupedData = groupNotesByCategory(notes);
  const counts = countNotesByCategory(groupedData);
  renderSummaryTable(counts);

  noteForm.reset();
});

init();
