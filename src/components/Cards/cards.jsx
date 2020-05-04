import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./cards.module.css";

const cards = ({ data: { cases, recovered, deaths, updated } }) => {
  if (!cases) {
    return "loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" className={styles.cardGrid}>
        <Grid
          iten
          component={Card}
          align="left"
          xs={12}
          md={3}
          className={cx(styles.card, styles.cases)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Positive
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={cases} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toString().slice(0, 24)}
            </Typography>
            <Typography variant="body2">
              Total number of positive cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          iten
          component={Card}
          align="left"
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toString().slice(0, 24)}
            </Typography>
            <Typography variant="body2">
              Total number of recovery cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          iten
          component={Card}
          align="left"
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(updated).toString().slice(0, 24)}
            </Typography>
            <Typography variant="body2">
              Total number of death cases from covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default cards;
