import axios from "axios";

const url = "https://corona.lmao.ninja/v2";

export const getResponse = async () => {
  try {
    const {
      data: { cases, recovered, deaths, updated },
    } = await axios.get(`${url}/all?today=true`);

    return { cases, recovered, deaths, updated };
  } catch (error) {}
};

export const getDailyIncrease = async () => {
  try {
    const { data } = await axios.get(`${url}/historical?lastdays=119`);

    let modifiedData = {};
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const yesterdayString = `${
      yesterday.getMonth() + 1
    }/${yesterday.getDate()}/${yesterday.getFullYear() % 2000}`;

    let currDay = new Date().getDay();
    if (data[0].timeline.cases.hasOwnProperty(yesterdayString)) currDay -= 1;
    else currDay -= 2;

    data.forEach(function (item) {
      for (let prop in item.timeline.cases) {
        const date = new Date(prop);
        const newDate = new Date(
          date.setDate(date.getDate() - date.getDay() + currDay)
        );

        if (modifiedData.hasOwnProperty(prop)) {
          modifiedData[prop].cases =
            item.timeline.cases[prop] + modifiedData[prop].cases;
          modifiedData[prop].deaths =
            item.timeline.deaths[prop] + modifiedData[prop].deaths;
          modifiedData[prop].recovered =
            item.timeline.recovered[prop] + modifiedData[prop].recovered;
        } else {
          if (
            new Date(prop).toLocaleDateString() === newDate.toLocaleDateString()
          )
            modifiedData[prop] = {
              cases: item.timeline.cases[prop],
              deaths: item.timeline.deaths[prop],
              recovered: item.timeline.recovered[prop],
              date: prop,
            };
        }
      }
    });

    return Object.values(modifiedData);
  } catch (error) {}
};
