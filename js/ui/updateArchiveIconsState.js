export const updateArchiveIconsState = (showArchived) => {
  const archiveIcons = document.querySelectorAll('.note-archive');

  archiveIcons.forEach((icon) => {
    if (showArchived) {
      icon.classList.add('archived');
    } else {
      icon.classList.remove('archived');
    }
  });
};
