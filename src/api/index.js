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
    let currentDay = Object.keys(data[0].timeline.cases)
      .map((e) => new Date(e))
      .reduce((acc, curr) => (acc > curr ? acc : curr))
      .getDay();

    data.forEach(function (item) {
      for (let prop in item.timeline.cases) {
        const date = new Date(prop);
        const newDate = new Date(
          date.setDate(date.getDate() - date.getDay() + currentDay)
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

export const getCountryData = async () => {
  try {
    const { data } = await axios.get(`${url}/countries?sort=cases`);

    let countryData = data.map((c) => ({
      country: c.country,
      cases: c.cases,
      todayCases: c.todayCases,
      deaths: c.deaths,
      todayDeaths: c.todayDeaths,
      recovered: c.recovered,
      active: c.active,
      critical: c.critical,
      population: c.population,
      continent: c.continent,
      updated: c.updated,
    }));

    return countryData;
  } catch (error) {}
};
