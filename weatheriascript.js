var x = document.getElementById("weatherdetail");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=030c379618707cd9de6a4582dcdc3b05';
    $.getJSON(api, weathercall);
}


function showdetail() {
    var place = document.getElementById("textview").value;
    var apicall = 'http://api.openweathermap.org/data/2.5/weather?q=' + place + '&appid=030c379618707cd9de6a4582dcdc3b05';

    $.getJSON(apicall, weathercall);
}

function weathercall(data) {
    document.getElementById("intro").style.display = "none";
    document.getElementById("data").style.display = "block";
    $("#cityname").empty();
    document.getElementById("cityname").innerHTML = "<h1>CITY NAME:-</h1><br>"
    $("#cityname").append(data.name);

    $("#temp").empty();
    document.getElementById("temp").innerHTML = "<h1>TEMPERATURE:-</h1><br>"
    $("#temp").append(((data.main.temp) - 273.15) + String.fromCharCode(176) + "C");

    $("#wind").empty();
    document.getElementById("wind").innerHTML = "<h1>WIND:-</h1><br>>"
    $("#wind").append(data.wind.speed + " m/s");

    $("#weather").empty();
    document.getElementById("weather").innerHTML = "<h1>WEATHER:-</h1><br>"
    $("#weather").append(data.weather[0].main);
}