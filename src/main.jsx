import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { fetchData } from "./api";
import updateData from "../seedDocs/updateData.js";
import initialize from "./assets/search/initialize.js";

function Loader() {
  return <div>Loading...</div>;
}

export const contextData = React.createContext([]);
export const currentIndexa = React.createContext({});

function AppWrapper() {
  const [loading, setLoading] = useState(true);
  const [cardsData, setCardsData] = useState([]);
  const [indexa, setIndexa] = useState({});

  useEffect(() => {
    async function fetchDataAsync() {
      const data = await fetchData();
      if (data) {
        setCardsData(data);
        setIndexa(initialize(data));
      }
      if (!data || data === "Failed to fetch") {
        setCardsData(updateData);
        setIndexa(initialize(updateData));
      }
      setLoading(false);
    }
    fetchDataAsync();
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <Loader />
      ) : (
        <contextData.Provider value={cardsData}>
          <currentIndexa.Provider value={indexa}>
            <App />
          </currentIndexa.Provider>
        </contextData.Provider>
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);