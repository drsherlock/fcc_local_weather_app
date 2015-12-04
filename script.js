$(document).ready(function() {
  getLocation();
});

function getLocation() {
  var myCity;
  $.get("http://ipinfo.io",
    function(json) {
      myCity = json.city;
      $('#location').html(myCity);
      setBackground(myCity);
      getWeather(myCity);
    }, "jsonp"
  );
}

function getWeather(city) {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=724737d8d4c9084c2bdde34abbd9b386",
    function(json) {
      $('#weather').html(json.main.temp + "&deg;C"), $('#cel').addClass('selected'),
        $('#icon').append("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>");
    }
  );

  $('#fah').click(function() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=724737d8d4c9084c2bdde34abbd9b386",
      function(json) {
        $('#weather').html(json.main.temp + "&deg;F"), $('#fah').addClass('selected'), $('#cel').removeClass('selected');
      }
    );
  });
  $('#cel').click(function() {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=724737d8d4c9084c2bdde34abbd9b386",
      function(json) {
        $('#weather').html(json.main.temp + "&deg;C"), $('#cel').addClass('selected'), $('#fah').removeClass('selected');
      }
    );
  });
}

function setBackground(city) {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=724737d8d4c9084c2bdde34abbd9b386", function(json) {
    var jWeather = json.weather[0].main;
    if (jWeather === 'Clouds') {
      $('body').css("background-image", "url(http://www.footwa.com/wp-content/uploads/2010/05/Solitary-bird-in-the-sky.jpg)");
    } else if (jWeather === 'Thunderstorm') {
      $('body').css("background-image", "url(http://www.mrwallpaper.com/wallpapers/thunderstorm.jpg)");
    } else if (jWeather === 'Snow') {
      $('body').css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Snowing_(3980659835).jpg)");
    } else if (jWeather === 'Mist') {
      $('body').css("background-image", "url('http://vignette1.wikia.nocookie.net/demigodshaven/images/f/f5/Mist.jpg/revision/latest?cb=20110102163040')");
    } else if (jWeather === 'Haze') {
      $('body').css("background-image", "url(https://danielc5592.files.wordpress.com/2012/11/h004.jpg)");
    } else if (jWeather === 'Rain') {
      $('body').css("background-image", "url(http://wearechange.org/wp-content/uploads/2015/03/1_See_It.jpg)");
    } else if (jWeather === 'Clear') {
      $('body').css("background-image", "url(http://www.4cleanair.org/sites/default/files/committees_items/clear-sky.jpg)");
    } else if (jWeather === 'Fog') {
      $('body').css("background-image", "url(background-image", "url(http://nathanbauman.com/odysseus/wp-content/uploads/2013/01/Winter-fog-pic-8-river.jpg)");
    }
  });
}
