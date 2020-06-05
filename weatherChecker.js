function getWeatherP() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=paris&appid=fc33fdb0ab909d33be87681a9f67aaba")
      .then(response => {
          return response.json();
        })
      .then(newJson => {
        document.getElementById("MandP").innerHTML= newJson.weather[0].description;
                  console.log(newJson.weather[0].description);
       // document.getElementById('MandP').innerHTML = <% "The weather is" %> <%= newJson.weather[0].description =%>
        })
        }

        function getWeatherN(){
          fetch("https://api.openweathermap.org/data/2.5/weather?q=nice&appid=fc33fdb0ab909d33be87681a9f67aaba")
            .then(response => {
                return response.json();
              })
            .then(newJson => {
              document.getElementById("NandF").innerHTML= newJson.weather[0].description;
          })
      }
      
      function getWeatherF(){
          fetch("https://api.openweathermap.org/data/2.5/weather?q=french-riviera&appid=fc33fdb0ab909d33be87681a9f67aaba")
            .then(response => {
                return response.json();
              })
            .then(newJson => {
              document.getElementById("NandF").innerHTML= newJson.weather[0].description;
          })
      }
      
      function getWeatherM(){
          fetch("https://api.openweathermap.org/data/2.5/weather?q=marseille&appid=fc33fdb0ab909d33be87681a9f67aaba")
            .then(response => {
                return response.json();
              })
            .then(newJson => {
              document.getElementById("MandP").innerHTML= newJson.weather[0].description;
          })
      }
      
      function getweatherB(){
          fetch("https://api.openweathermap.org/data/2.5/weather?q=bordeaux&appid=fc33fdb0ab909d33be87681a9f67aaba")
            .then(response => {
                return response.json();
              })
            .then(newJson => {
              document.getElementById("BandC").innerHTML= newJson.weather[0].description;
          })
      }
      
      function getweatherC(){
          fetch("https://api.openweathermap.org/data/2.5/weather?q=chamonix-mont-blanc&appid=fc33fdb0ab909d33be87681a9f67aaba")
            .then(response => {
                return response.json();
              })
            .then(newJson => {
              document.getElementById("BandC").innerHTML= newJson.weather[0].description;
          })
      }
      
      