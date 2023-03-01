let weather;
let currentHour;

function preload() {
  weather = loadJSON('https://api.open-meteo.com/v1/forecast?latitude=45.48&longitude=-73.61&hourly=temperature_2m,cloudcover&current_weather=true');
}

function setup() {
  createCanvas(500, 500);

  currentHour = hour();
  
  print(weather);
  print(weather.hourly.cloudcover[currentHour]);

  // print("The Weather:")
  // print("Located at: "+ weather.latitude+", "+weather.longitude);
  // print("Current temp: "+ weather.current_weather.temperature);
  // print("Current wind speed: "+ weather.current_weather.windspeed);
  // // print("The hourly temperature is (in C): ")
  // for(let i = 0; i < weather.hourly.cloudcover.length; i++){
  //   // print(weather.hourly.temperature_2m[i]+" C");
  //     print(weather.hourly.cloudcover[i]);
  // }
}

function draw() {
  
  let currentCloudcover = weather.hourly.cloudcover[currentHour];

  background(0,0, currentCloudcover + 20);

  push();
  textAlign(CENTER);
  fill(255);
  textSize(20);
  text("Current Wind Direction : " + weather.current_weather.winddirection, width/2, height/2);
  text("Current Wind Speed: " + weather.current_weather.windspeed, width/2, height/2 + 25);
  text("Current Cloud Cover: " + currentCloudcover, width/2, height/2 + 50);
  pop();


}
