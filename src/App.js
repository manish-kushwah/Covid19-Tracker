import React, { useState, useEffect } from "react";
import "./App.css";
import { getResponse } from "./api"; //it will search for index file and fetch it automatically
import { Cards, Chart, CountrySelector } from "./components/export";
import { AppBar, Typography, Badge } from "@material-ui/core";
import { Poll } from "@material-ui/icons";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async function fetchData() {
      const fetchedData = await getResponse();
      setData(fetchedData);
    })();
  }, [data.updated]);

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
        <CountrySelector />
        <Chart />
      </div>
    </div>
  );
}

export default App;
