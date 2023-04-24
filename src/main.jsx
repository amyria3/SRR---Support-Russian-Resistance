import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { fetchData } from "./api";
import initialize from "./assets/search/initialize.js";

function Loader() {
  return <div>Loading...</div>;
}

//initialize  context-variable
export const contextData = React.createContext([]);
export const currentIndexa = React.createContext({});

function AppWrapper() {
  const [loading, setLoading] = useState(true);
  const [cardsData, setCardsData] = useState([]);
  const [indexa, setIndexa] = useState({});

  useEffect(() => {
    async function fetchDataAsync() {
      const data = await fetchData();
      setCardsData(data);
      setLoading(false);
      setIndexa(initialize(data));
      console.log(setIndexa);
    }
    fetchDataAsync();
  }, []);

  return (
    <>
      {/* provide contextBinding with the value of indexa */}
      <contextData.Provider value={cardsData}>
        <currentIndexa.Provider value={indexa}>
              {loading ? (
                <Loader />
              ) : (
                <React.StrictMode>
                  <App cards_data={cardsData} />
                </React.StrictMode>
              )}
        </currentIndexa.Provider>
      </contextData.Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
