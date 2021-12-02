const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=xxxxxxxxxxxxxxxxxx&units=metric";
  https.get(url, function (weatherResp) {
    console.log(weatherResp.statusCode);

    weatherResp.on("data", function (data) {
      const weatherData = JSON.parse(data);
      //   console.log(weatherData);
      res.write("<p>weather is " + weatherData.weather[0].description + "</p>");

      const iconId = weatherData.weather[0].icon;
      const iconUrl = "//openweathermap.org/img/wn/" + iconId + "@2x.png";
      res.write("<img src=" + iconUrl + ">");
      http: res.send();
    });

    weatherResp.on("error", function (error) {
      console.log(error);
      res.send(error);
    });
  });
});

app.listen(3000, function () {
  console.log("server running on port 3000");
});
