import { dateRegex } from '../constants/constants.js';

export const extractDates = (content) => {
  return content.match(dateRegex) || [];
};
