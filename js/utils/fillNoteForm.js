export const fillNoteForm = (note) => {
  document.querySelector('.note-form input[name="name"]').value = note.name;

  const datesString = note.dates.join(' ');
  document.querySelector('.note-form textarea[name="content"]').value =
    note.content + ' ' + datesString;

  document.querySelector('.note-form select[name="category"]').value =
    note.category;

  document.querySelector('.note-form button[type="submit"]').textContent =
    'Save Changes';
};
