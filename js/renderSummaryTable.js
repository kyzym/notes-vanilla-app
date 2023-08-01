import { getIconName } from './utils/getIconName.js';

export const renderSummaryTable = (counts) => {
  for (let category in counts) {
    const noteItem = document.createElement('li');
    noteItem.classList.add('summary-list-item');

    const noteContent = `
      <div class="summary-list-content note-name">
        <img class="note-name-img" src="img/${getIconName(
          category
        )}.svg" alt="${category} icon" width="25" height="25">

        <span>${category}</span>
      </div>
      <span class="summary-list-content  note-active">${
        counts[category].active
      }</span>
      <span class="summary-list-content note-archived">${
        counts[category].archived
      }</span>
    `;

    noteItem.insertAdjacentHTML('beforeend', noteContent);
    document.querySelector('.summary-notes-list').append(noteItem);
  }
};
