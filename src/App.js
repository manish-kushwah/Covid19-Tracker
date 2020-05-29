import React, { useState, useEffect } from "react";
import "./App.css";
import { getResponse, getDailyIncrease, getCountryData } from "./api"; //it will search for index file and fetch it automatically
import { Cards, Chart, CountryTable, Skeleton } from "./components/export";
import { AppBar, Typography } from "@material-ui/core";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [dailyData, setDailyData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    setLoading(true);
    (async function fetchData() {
      setData(await getResponse());
      setLoading(false);
    })();
  }, [data.updated]);

  useEffect(() => {
    (async function fetchDailyData() {
      setDailyData(await getDailyIncrease());
    })();
  }, [dailyData.date]);

  useEffect(() => {
    (async function fetchCountryData() {
      setCountryData(await getCountryData());
    })();
  }, [countryData.updated]);

  return (
    <div className="App">
      <div>
        <AppBar position="static">
          <Typography variant="h6" className="brand-logo">
            <img src="../../logo192.png" alt="" />
            &nbsp;COVID<span>19</span>&nbsp;STATS
          </Typography>
        </AppBar>
      </div>
      {loading && <Skeleton />}
      {!loading && (
        <div className="App-body">
          <Cards data={data} />
          <Chart data={dailyData} />
          <CountryTable data={countryData} />
        </div>
      )}
    </div>
  );
}

export default App;
