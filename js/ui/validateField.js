export const validateField = (field, minLength = 5) => {
  return field.value.length < minLength
    ? `Field must be at least ${minLength} characters long.`
    : null;
};
