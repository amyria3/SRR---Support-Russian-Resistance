async function fetchData() {
  try {
    console.log("api.js, fetching data");
    const response = await fetch('http://localhost:3001/api/ngo-data');
    console.log(response);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json();
    console.log("response : " + JSON.stringify(data));
    return data;
  } catch (error) {
    console.log('Error occurred in fetchData:', error);
    throw error;
  }
}

export { fetchData };
