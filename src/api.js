async function fetchData() {
  try {
    // console.log("Api.js, fetching data");
    const response = await fetch('http://localhost:3001/api/ngo-data');
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json();
    // console.log("Api.js running, response : " + JSON.stringify(data));
    return data;
  } catch (error) {
    // console.log('Error occurred while fetchData, probably no connection to server:', error);
    throw error;
  }
}

export { fetchData };