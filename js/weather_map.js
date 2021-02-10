(function (){
"use strict";
//To query the API With a object!
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OWM_TOKEN,
        lat: 29.4241,
        lon: -98.4936,
        units: "imperial",
        exclude: "minutely,hourly",
    }).done(function(data) {
        console.log(data);
        let locationIcon = document.querySelector('.weather-icon');
        let itemHTML = "";
        for (var i = 0; i < 5; i++){
            var date = data.daily[i].dt;
            var icon = data.daily[i].weather[0].icon
            var date1 = new Date (date*1000);
            var date2 = date1.toLocaleDateString("en-US")
            itemHTML += "<div class='card ' style='width: 17rem;'>"
            itemHTML += "<div class='card-header text-center'>" + date2 + "</div>";
            itemHTML += "<ul class='list-group list-group-flush'>"
            itemHTML += "<li class='list-group-item text-center'>" + data.daily[i].temp.max + "℉" + " / " + data.daily[i].temp.min + "℉" + "<br>" + "<img src='http://openweathermap.org/img/wn/" + icon + ".png'>" + "</li>";
            itemHTML += "<li class='list-group-item'>"  + "description: "+ "<strong>" + data.daily[i].weather[0].description + "</strong>" + "</li>";
            itemHTML += "<li class='list-group-item'>" + "humidty: " + "<strong>" +data.daily[i].humidity +"</strong>" +"</li>";
            itemHTML += "<li class='list-group-item'>" + "wind: " + "<strong>" +data.daily[i].wind_speed + "</strong>"+ "</li>";
            itemHTML += "<li class='list-group-item'>" + "pressure: "+ "<strong>"+ data.daily[i].pressure + "</strong>"+ "</li>";
            itemHTML += "</ul>"
            itemHTML += "</div>"
        }

        $("#post").html(itemHTML);

    });

    mapboxgl.accessToken = MAPBOX_TOKEN;
    var map = new mapboxgl.Map({
        container: 'post1', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.598600, 29.609500], // starting position [lng, lat]
        zoom: 10 // starting zoom

    });
    map.addControl(new mapboxgl.NavigationControl());
    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.598600, 29.609500])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);
}());