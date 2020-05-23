import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import { styled } from "@material-ui/core/styles";

import styles from "./cards.module.css";

//Gradient color style
const MyGrid = styled(({ color, ...other }) => <Grid {...other} />)({
  color: (props) => {
    switch (props.color) {
      case "blue":
        return "#007bff";
      case "green":
        return "#28a745";
      case "red":
        return "#ff073a";
      default:
        break;
    }
  },
});

const cards = ({ data: { cases, recovered, deaths, updated } }) => {
  if (!cases) {
    return "";
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
            className={cx(styles.card)}
          >
            <MyGrid color="blue">
              <CardContent className={styles.cardContent}>
                <Typography gutterBottom>Positive</Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={cases} duration={2.5} separator="," />
                </Typography>
                <Typography className={styles.cardBottomText}>
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
            className={cx(styles.card)}
          >
            <MyGrid color="green">
              <CardContent className={styles.cardContent}>
                <Typography gutterBottom>Recovered</Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography className={styles.cardBottomText}>
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
            className={cx(styles.card)}
          >
            <MyGrid color="red">
              <CardContent className={styles.cardContent}>
                <Typography gutterBottom>Deaths</Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={deaths}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography className={styles.cardBottomText}>
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
