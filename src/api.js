async function fetchData() {
  console.log("api.js, line2")
  const response = await fetch('http://localhost:3001/api/ngo-data')
  const data = await response.json()
  console.log(data)
  return data
}

export { fetchData };