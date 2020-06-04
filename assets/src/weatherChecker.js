function getWeatherP() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=paris&appid=fc33fdb0ab909d33be87681a9f67aaba")
      .then(response => {
          return response.json();
        })
      .then(newJson => {
        //document.getElementById("MandP").innerHTML= newJson.weather[0].description;
        console.log(newJson.weather[0].description);
    })
    }