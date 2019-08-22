var apiKey = "70317cafb764db84a165ea51cf5c045c";
var country = "ua";
var oneDayForecastTemplate = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

$(document).ready(function() {
    $.get(oneDayForecastTemplate, (data) => {
        
    })
})