const backdrop = document.querySelector('.backdrop');
const closeModalBtn = document.querySelector('.close-modal-btn');

export const openModal = () => {
  backdrop.classList.remove('isHidden');

  document.addEventListener('keydown', handleEscapePress);

  backdrop.addEventListener('click', handleBackdropClick);

  closeModalBtn.addEventListener('click', closeModal);
};

export const closeModal = () => {
  backdrop.classList.add('isHidden');

  document.removeEventListener('keydown', handleEscapePress);

  backdrop.removeEventListener('click', handleBackdropClick);

  closeModalBtn.removeEventListener('click', closeModal);
};

export const handleEscapePress = (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

export const handleBackdropClick = (e) => {
  if (e.target === backdrop) {
    closeModal();
  }
};
