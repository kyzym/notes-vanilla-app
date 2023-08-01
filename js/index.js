import { fetchData } from '../api/fetchData.js';

(async () => {
  const data = await fetchData();
  console.log(data, 'data');
})();
