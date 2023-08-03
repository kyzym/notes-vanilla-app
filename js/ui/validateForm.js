import { validateField } from './validateField.js';
import { displayError } from './displayError.js';

export const validateForm = (form) => {
  const nameInput = form.elements.name;
  const contentInput = form.elements.content;

  const nameError = validateField(nameInput);
  const contentError = validateField(contentInput);

  displayError(nameInput, nameError);
  displayError(contentInput, contentError);

  return !nameError && !contentError;
};
