export const displayError = (field, errorMessage) => {
  const errorElement = field.nextElementSibling;
  if (errorMessage) {
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
  } else {
    errorElement.style.display = 'none';
  }
};
