export const toggleArchiveTitle = (show) => {
  const archiveTitle = document.querySelector('.archive-title');

  if (show) {
    archiveTitle.classList.remove('isHidden');
  } else {
    archiveTitle.classList.add('isHidden');
  }
};
