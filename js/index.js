import { fetchData } from '../api/fetchData.js';
import { renderNotes } from './renderNotes.js';

(async () => {
  try {
    const data = await fetchData();

    renderNotes(data);
  } catch (error) {
    console.error(error);
  }
})();
