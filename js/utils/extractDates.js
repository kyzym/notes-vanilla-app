export const extractDates = (content) => {
  const dateRegex = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;
  return content.match(dateRegex) || [];
};
