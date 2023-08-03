import { getIconName } from '../utils/getIconName.js';

const categories = ['Task', 'Random Thought', 'Idea'];

export const renderSummaryTable = (counts) => {
  const summaryList = document.querySelector('.summary-notes-list');

  summaryList.innerHTML = '';

  categories.forEach((category) => {
    if (!counts.hasOwnProperty(category)) return;

    const noteItem = document.createElement('li');

    noteItem.classList.add('summary-list-item');

    const noteContent = `
      <div class="summary-list-content note-name">
       <div class="note-name-icon-wrapper">
       ${getIconName(category)}
        </div>
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
    summaryList.append(noteItem);
  });
};
