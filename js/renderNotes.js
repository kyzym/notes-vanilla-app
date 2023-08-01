export const renderNotes = (notes) => {
  const notesList = document.querySelector('.notes-list');

  notes.forEach((note) => {
    const noteItem = document.createElement('li');
    noteItem.classList.add('note-list-item');

    const noteContent = `
      <div class="note-content note-name">
        <div class="note-name-icon-wrapper">
          <img class="note-name-icon" src="img/cart.svg" alt="Note icon" width="25" height="25">
        </div>
        <span>${note.name}</span>
      </div>
      <span class="note-content note-created">${note.createdAt}</span>
      <span class="note-content note-category">${note.category}</span>
      <span class="note-content note-content">${note.content}</span>
      <span class="note-content note-dates">${note.dates.join(', ')}</span>
      <div class="note-actions">
        <button type="button" class="note-edit">
          <img src="img/pencil.svg" alt="Edit"  width="25" height="25">
        </button>
        <button type="button" class="note-archive">
          <img src="img/archive.svg" alt="Archive" width="25" height="25">
        </button>
        <button type="button" class="note-delete">
          <img src="img/trash.svg" alt="Delete" width="25" height="25">
        </button>
      </div>
    `;

    noteItem.insertAdjacentHTML('beforeend', noteContent);
    notesList.append(noteItem);
  });
};
