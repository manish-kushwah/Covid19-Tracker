import React, { useState, useEffect } from "react";
import "./App.css";
import { getResponse, getDailyIncrease } from "./api"; //it will search for index file and fetch it automatically
import { Cards, Chart, CountryTable, Skeleton } from "./components/export";
import { AppBar, Typography } from "@material-ui/core";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [dailyData, setDailyData] = useState([]);

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
          <CountryTable />
        </div>
      )}
    </div>
  );
}

export default App;
