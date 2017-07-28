var latitude = 0;
var longitude = 0;
var changed = false;
var weatherData = new Object();

$(document).ready(function(){
  
  setDivHeights();			
  getLocationAndWeather();
	
});

// function that gets the user location and updates html
function getLocationAndWeather(){
  //todo: remember the else part
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getPositionAndWeather);
    return true;
  }
  else{
    return false;
  }
}

//wraps the two function calls
function getPositionAndWeather(position){
  getPosition(position);
  getWeather();
}
// processes the data returned by navigator.geolocation.getCurrentPosition
function getPosition(position){
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log(typeof(latitude) + "  " + longitude);
}
//async call to get the weather data
function getWeather(){
   $.getJSON( "https://fcc-weather-api.glitch.me/api/current?lon=" + longitude +"&lat="+ latitude, getDataAndUpdateUI);
}

function getDataAndUpdateUI(data){
  getWeatherData(data);
  updateUI();
}
function getWeatherData(data){
  // data from the weather api
  console.log(JSON.stringify(data));
  weatherData.temp = data.main.temp;
  weatherData.maxTemp = data.main.temp_max;
  weatherData.minTemp = data.main.temp_min;  
  weatherData.weatherDescr = data.weather[0].description;
  weatherData.icon = data.weather[0].icon;
  weatherData.name = data.name;
  weatherData.humidity = data.main.humidity;
  // seconds to milliseconds
  weatherData.sunset = getTime(data.sys.sunset * 1000);
  weatherData.sunrise = getTime(data.sys.sunrise * 1000);
  weatherData.date = getDate(data.sys.sunrise * 1000);   
}

// the time used here comes from the weather api
function getTime(milliseconds){
  var date = new Date(milliseconds);
  var hour = parseInt(date.getHours());
  if(hour > 12) hour -= 12;
  return "" + hour + ":"+ date.getMinutes();
}


function getDate(milliseconds){
  var date = new Date(milliseconds);
  return "" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
}



// css for the three vertical sections in the html container-fluid
function setDivHeights(){
  var h = window.innerHeight;
  $(".top").css("height", h/4);
  $(".bottom").css("height", h/4);  
  $(".middle").css("height", h/2);
}

// fills in the html with the data from the weather api
function updateUI(){

  $(".one").html("<img class= \"img-responsive\" src=\"" +weatherData.icon + "\">");
  $(".temp").html(weatherData.temp);
  $(".min").html("min:      " + weatherData.minTemp);
  $(".max").html("max:      " + weatherData.maxTemp);
  $(".descr").html(weatherData.weatherDescr);
  $(".humidity").html("humidity: " + weatherData.humidity + "%");
  $(".rise p").html("sunrise:  " + weatherData.sunrise + " AM");
  $(".set p").html(" sunset: " + weatherData.sunset + "PM");
  $(".location").html("This the the local weather at " + weatherData.name + " on " + weatherData.date + ".");
}
//listeners on the temperature conversion buttons
$(".cls").on("click", convertToCls);
$(".fhr").on("click", convertToFhr);

//converts to celcius
function convertToCls(){
  $(".temp").html(weatherData.temp);
  $(".min").html("min:      " + weatherData.minTemp);
  $(".max").html("max:      " + weatherData.maxTemp);
  $(".fhr").css("background", "black");
  $(".cls").css("background", "blue");
}
//converts to fahreneits
function convertToFhr(){
  
  $(".temp").html(toFahr(weatherData.temp));
  $(".min").html("min:      " + toFahr(weatherData.minTemp));
  $(".max").html("max:      " + toFahr(weatherData.maxTemp));
  $(".fhr").css("background", "blue");
  $(".cls").css("background", "black");
}
function toFahr(c){
  return c * 9/5 + 32;
}


