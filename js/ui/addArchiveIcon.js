import { icons } from '../constants/icons.js';

export const addArchiveIcon = () => {
  const archiveButton = document.querySelector('.toggle-archive-btn');

  archiveButton.insertAdjacentHTML('beforeend', icons.archive);
};
