import React, { useState, useEffect } from "react";
import "./App.css";
import { getResponse, getDailyIncrease } from "./api"; //it will search for index file and fetch it automatically
import { Cards, Chart, CountryTable } from "./components/export";
import { AppBar, Typography, Badge } from "@material-ui/core";
import { Poll } from "@material-ui/icons";

function App() {
  const [data, setData] = useState({});
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      setData(await getResponse());
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
          <Typography variant="h6">
            <Poll fontSize="large" />
            &nbsp;COVID&nbsp;&nbsp;&nbsp;
            <Badge className="badge" badgeContent={19} color="secondary" />
            &nbsp;&nbsp;&nbsp;STATS
          </Typography>
        </AppBar>
      </div>

      <div className="App-body">
        <Cards data={data} />
        <Chart data={dailyData} />
        <CountryTable />
      </div>
    </div>
  );
}

export default App;
