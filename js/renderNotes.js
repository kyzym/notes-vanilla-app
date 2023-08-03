import { icons } from './constants/icons.js';
import { getIconName } from './utils/getIconName.js';

export const renderNotes = (notes) => {
  const notesList = document.querySelector('.notes-list');

  notesList.innerHTML = '';

  notes.forEach((note) => {
    const noteItem = document.createElement('li');
    noteItem.classList.add('note-list-item');

    const noteContent = `
      <div class="note-content note-name">
        <div class="note-name-icon-wrapper">
              ${getIconName(note.category)}
        </div>
        <span>${note.name}</span>
      </div>
      <span class="note-content note-created">${note.createdAt}</span>
      <span class="note-content note-category">${note.category}</span>
      <span class="note-content note-content">${note.content}</span>
      <span class="note-content note-dates">${note.dates.join(', ')}</span>
      <div class="note-actions">
        <button type="button" class="note-button note-edit">
          ${icons.pencil}
        </button>
        <button type="button" class="note-button note-archive">
          ${icons.archive}
        </button>
        <button type="button" class="note-button note-delete">
          ${icons.trash}
        </button>
      </div>
    `;

    noteItem.setAttribute('data-id', note.id);
    noteItem.insertAdjacentHTML('beforeend', noteContent);
    notesList.append(noteItem);
  });
};
