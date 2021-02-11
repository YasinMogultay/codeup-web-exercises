(function () {
    "use strict";
    var lat = 29.4241;
    var long = -98.4936;
    let searchInput = $("#input")
//To query the API With a object!
    weatherMap();

    function weatherMap() {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: OWM_TOKEN,
            lat: lat,
            lon: long,
            units: "imperial",
            exclude: "minutely,hourly",
        }).done(function (data) {
            handleResponse(data)
        });
    }

    function handleResponse(data) {
        let itemHTML = "";
        for (let i = 0; i < 5; i++) {
            let icon = data.daily[i].weather[0].icon
            let date = data.daily[i].dt;
            let date1 = new Date(date * 1000);
            let date2 = date1.toLocaleDateString("en-US")
            itemHTML += "<div class='card ' style='width: 17rem;'>"
            itemHTML += "<div class='card-header text-center'>" + date2 + "</div>";
            itemHTML += "<ul class='list-group list-group-flush'>"
            itemHTML += "<li class='list-group-item text-center'>" + data.daily[i].temp.max + "℉" + " / " + data.daily[i].temp.min + "℉" + "<br>" + "<img src='http://openweathermap.org/img/wn/" + icon + ".png'>" + "</li>";
            itemHTML += "<li class='list-group-item'>" + "description: " + "<strong>" + data.daily[i].weather[0].description + "</strong>" + "</li>";
            itemHTML += "<li class='list-group-item'>" + "humidty: " + "<strong>" + data.daily[i].humidity + "</strong>" + "</li>";
            itemHTML += "<li class='list-group-item'>" + "wind: " + "<strong>" + data.daily[i].wind_speed + "</strong>" + "</li>";
            itemHTML += "<li class='list-group-item'>" + "pressure: " + "<strong>" + data.daily[i].pressure + "</strong>" + "</li>";
            itemHTML += "</ul>"
            itemHTML += "</div>"
        }
        $("#post").html(itemHTML);
    }


    mapboxgl.accessToken = MAPBOX_TOKEN;
    let coordinates = document.getElementById('coordinates');
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [long, lat],
        zoom: 5
    });

    let marker = new mapboxgl.Marker({
        draggable: true
    })

        .setLngLat([long, lat])
        .addTo(map);

    function onDragEnd() {
        let lngLat = marker.getLngLat();
        long = lngLat.lng
        lat = lngLat.lat
        reverseGeocode(lngLat, MAPBOX_TOKEN).then(function (result) {
            searchInput.val(result);
        })
        weatherMap();
    }

    function searchPlace() {
        geocode(searchInput.val(), MAPBOX_TOKEN).then(function (result) {
            long = result[0];
            lat = result[1];
            marker.setLngLat([long, lat])
            weatherMap();
        })
    }

    $("#button").click(function (e) {
        e.preventDefault();
        searchPlace();
    });

    map.addControl(new mapboxgl.NavigationControl()); // Control
    marker.on('dragend', onDragEnd);


}());