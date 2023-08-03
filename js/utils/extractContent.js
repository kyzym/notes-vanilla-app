import { dateRegex } from '../constants/constants.js';

export const extractContent = (content) => {
  return content.replace(dateRegex, '').trim();
};
