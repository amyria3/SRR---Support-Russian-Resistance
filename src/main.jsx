import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { fetchData } from "./api";
import localDb from "../seedDocs/localDb.js";
import initialize from "./assets/search/initialize.js";

function Loader() {
  return <div className="statusFeedback">Loading...</div>;
}

export const contextData = React.createContext([]);
export const currentIndexa = React.createContext({});

function AppWrapper() {
  const [loading, setLoading] = useState(true);
  const [cardsData, setCardsData] = useState([]);
  const [indexa, setIndexa] = useState({});
  const [dataFetchedSuccessfully, setDataFetchedSuccessfully] = useState(false);
  const [localDataLoaded, setLocalDataLoaded] = useState(false);

  useEffect(() => {
    async function fetchDataAsync() {
      setLoading(true);
      try {
        let data = undefined;
        data = await fetchData();
        setIndexa(initialize(data));
        setCardsData(data);
        setDataFetchedSuccessfully(true);
      } catch (error) {
        if (error.message === "Failed to fetch") {
          console.log(error.message);
          setCardsData(localDb);
          const localIndexa = initialize(localDb);
          setIndexa(localIndexa);
          console.log("here!");
          console.log(JSON.stringify(indexa));
          console.log(JSON.stringify(cardsData));
          setDataFetchedSuccessfully(false);
          setLocalDataLoaded(true);
          console.log("Main.jsx: Loaded local data instead of fetched data.");
        }
      } finally {
        ("Ready.");
        setLoading(false);
      }
    }
    fetchDataAsync();
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <Loader />
      ) : (
        <contextData.Provider value={cardsData}>
          {
            <div className="fixed top-0 z-50 mt-4 ml-5 mb-10">
              {!dataFetchedSuccessfully && (
                <p className="errorMessage">
                  We are having problems to reach out to the data bank
                </p>
              )}
              {localDataLoaded && (
                <p className="errorMessage">
                  We are using local Data
                </p>
              )}
            </div>
          }
          <currentIndexa.Provider value={indexa}>
            <App />
          </currentIndexa.Provider>
        </contextData.Provider>
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
