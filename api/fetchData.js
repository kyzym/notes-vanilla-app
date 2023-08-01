export const fetchData = async () => {
  try {
    const response = await fetch('./data/users.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('We have a problem with fetching the data:', error);
  }
};
