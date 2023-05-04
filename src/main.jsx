import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { fetchData } from "./api";
import localDb from "../seedDocs/localDb.js";
import initialize from "./assets/search/initialize.js";

function Loader() {
  return <div className="statusReport">Loading...</div>;
}

export const contextData = React.createContext([]);
export const currentIndexa = React.createContext({});

function AppWrapper() {
  const [loading, setLoading] = useState(true);
  const [cardsData, setCardsData] = useState([]);
  const [indexa, setIndexa] = useState({});
  const [dataFetchedSuccessfully, setDataFetchedSuccessfully] = useState(false);

  useEffect(() => {
    async function fetchDataAsync() {
      const data = await fetchData();
      if (data) {
        setCardsData(data);
        setIndexa(initialize(data));
        setDataFetchedSuccessfully(true);
        setLoading(false);
      }
      !dataFetchedSuccessfully && loading;
      setCardsData(localDb);
      setIndexa(initialize(localDb));
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
            {/* {console.log(cardsData)&&dataFetchedSuccessfully} */}
            {!dataFetchedSuccessfully && (
              <div className="statusReport">
                We are having problems to reach out to the data bank
              </div>
            )}
          </currentIndexa.Provider>
        </contextData.Provider>
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
