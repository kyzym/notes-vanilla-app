export const updateArchiveButtonState = (showArchived) => {
  const toggleArchiveButton = document.querySelector('.toggle-archive-btn');

  if (showArchived) {
    toggleArchiveButton.classList.add('archived');
  } else {
    toggleArchiveButton.classList.remove('archived');
  }
};
