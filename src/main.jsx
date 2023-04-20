import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { fetchData } from './api'


function Loader() {
  return <div>Loading...</div>
}

function AppWrapper() {
  const [loading, setLoading] = useState(true)
  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    async function fetchDataAsync() {
      const data = await fetchData()
      setCardsData(data)
      setLoading(false)
    }
    fetchDataAsync()
  }, [])

  return (
    <>
      {loading ? <Loader /> : (
        <React.StrictMode>
          {console.log(JSON.stringify(cardsData))}
          <App cards_data={cardsData} />
        </React.StrictMode>
      )}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppWrapper />,
)
