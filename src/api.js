async function fetchData() {
  console.log("api.js, fetching data")
  const response = await fetch('http://localhost:3001/api/ngo-data')
  console.log(response)
  const data = await response.json().then( response => console.log("response : " + JSON.stringify(response))).finally()
  return data
}

export { fetchData };