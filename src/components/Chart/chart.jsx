import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ArgumentScale, Animation } from "@devexpress/dx-react-chart";
import { curveCatmullRom, line } from "d3-shape";
import { scalePoint } from "d3-scale";

const Line = (props) => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

const titleStyles = {
  title: {
    textAlign: "center",
    width: "100%",
    margin: "10px 0px",
  },
};
const Text = withStyles(titleStyles)((props) => {
  const { text, classes } = props;
  const [mainText, subText] = text.split("\\n");
  return (
    <div className={classes.title}>
      <Typography component="h1" variant="h5">
        {mainText}
      </Typography>
      <Typography variant="subtitle1">{subText}</Typography>
    </div>
  );
});

const legendStyles = () => ({
  root: {
    display: "flex",
    margin: "auto",
    flexDirection: "row",
  },
});
const legendLabelStyles = (theme) => ({
  label: {
    marginBottom: theme.spacing(1),
    whiteSpace: "nowrap",
  },
});
const legendItemStyles = () => ({
  item: {
    flexDirection: "column-reverse",
  },
});

const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(
  legendLabelBase
);
const Item = withStyles(legendItemStyles, { name: "LegendItem" })(
  legendItemBase
);
const GraphStyles = () => ({
  chart: {
    padding: "0px 30px",
    width: "-webkit-fill-available",
  },
  paper: {
    width: "63%",
    margin: "30px 0",
    boxShadow:
      "10px 10px 50px rgba(55, 84, 128, 0.1), 2px 2px 20px rgb(255, 255, 255, 0.7)",
    backgroundColor: "rgb(252, 252, 252) !important",
  },
});

const Graph = (props) => {
  const { data } = props;

  if (!data.length) {
    return "";
  }

  const chartData = [...data].sort(
    (a, b) => parseInt(a.cases) - parseInt(b.cases)
  );

  const { classes } = props;

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Chart data={chartData} className={classes.chart}>
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries
            name="Positive"
            valueField="cases"
            argumentField="date"
            seriesComponent={Line}
          />
          <LineSeries
            name="Deaths"
            valueField="deaths"
            argumentField="date"
            seriesComponent={Line}
          />
          <LineSeries
            name="Recovered"
            valueField="recovered"
            argumentField="date"
            seriesComponent={Line}
          />
          <Legend
            position="bottom"
            rootComponent={Root}
            itemComponent={Item}
            labelComponent={Label}
          />
          <Title
            text="Corona virus spread worldwide\nCases increase per week worldwide(last 15 week)"
            textComponent={Text}
          />
          <Animation />
        </Chart>
      </Paper>
    </React.Fragment>
  );
};

export default withStyles(GraphStyles, { name: "Graph" })(Graph);
