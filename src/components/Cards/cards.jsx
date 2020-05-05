import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import { styled } from "@material-ui/core/styles";

import styles from "./cards.module.css";

//Gradient color style
const MyGrid = styled(({ color, ...other }) => <Grid {...other} />)({
  background: (props) => {
    switch (props.color) {
      case "blue":
        return "linear-gradient(45deg, #2196F3 30%, #00f3ff 90%)";
      case "green":
        return "linear-gradient(45deg, #05dc05 10%, #a9ff00 90%)";
      case "red":
        return "linear-gradient(45deg, #a9a9a9 15%, #ded8d8 100%)";
      default:
        break;
    }
  },
  boxShadow: (props) => {
    switch (props.color) {
      case "blue":
        return "0 3px 5px 2px rgba(33, 203, 243, .3)";
      case "green":
        return "0 3px 5px 2px rgba(33, 203, 243, .3)";
      case "red":
        return "0 3px 5px 2px rgba(211, 211, 211, 1)";
      default:
        break;
    }
  },
  color: "white",
});

const cards = ({ data: { cases, recovered, deaths, updated } }) => {
  if (!cases) {
    return "loading...";
  }
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Grid container justify="center">
          <Grid className={styles.datehead}>
            Last updated: {new Date(updated).toString().slice(0, 28)}
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          justify="center"
          className={styles.cardGrid}
        >
          <Grid
            component={Card}
            align="left"
            xs={12}
            md={3}
            className={cx(styles.card, styles.cases)}
          >
            <MyGrid color="blue">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Positive
                </Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={cases} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary"></Typography>
                <Typography variant="body2">
                  Total number of positive cases of covid-19
                </Typography>
              </CardContent>
            </MyGrid>
          </Grid>
          <Grid
            component={Card}
            align="left"
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <MyGrid color="green">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Recovered
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  <Typography></Typography>
                </Typography>
                <Typography variant="body2">
                  Total number of recovery cases of covid-19
                </Typography>
              </CardContent>
            </MyGrid>
          </Grid>
          <Grid
            component={Card}
            align="left"
            xs={12}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <MyGrid color="red">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Deaths
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={deaths}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  <Typography color="textSecondary"></Typography>
                </Typography>
                <Typography variant="body2">
                  Total number of death cases from covid-19
                </Typography>
              </CardContent>
            </MyGrid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default cards;
