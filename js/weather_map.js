(function () {
    "use strict";
    //Created global variables to use whenever needed
    var lat = 29.4241;
    var long = -98.4936;
    let searchInput = $("#input")
    weatherMap();//Calling the ajax get request function to get weathermap

    //created a function for ajax get request so when needed call the function
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

    //rendering weathermap data to html
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
            itemHTML += "<li class='list-group-item text-center'>" + data.daily[i].temp.max + "°F" + " / " + data.daily[i].temp.min + "°F" + "<br>" + "<img src='http://openweathermap.org/img/wn/" + icon + ".png'>" + "</li>";
            itemHTML += "<li class='list-group-item'>" + "description: " + "<strong>" + data.daily[i].weather[0].description + "</strong>" + "</li>";
            itemHTML += "<li class='list-group-item'>" + "humidty: " + "<strong>" + data.daily[i].humidity + "</strong>" + "</li>";
            itemHTML += "<li class='list-group-item'>" + "wind: " + "<strong>" + data.daily[i].wind_speed + "</strong>" + "</li>";
            itemHTML += "<li class='list-group-item'>" + "pressure: " + "<strong>" + data.daily[i].pressure + "</strong>" + "</li>";
            itemHTML += "</ul>"
            itemHTML += "</div>"
        }
        $("#post").html(itemHTML);
    }

    //Mapbox access token
    mapboxgl.accessToken = MAPBOX_TOKEN;
    let coordinates = document.getElementById('coordinates');
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [long, lat],
        zoom: 8
    });

    let marker = new mapboxgl.Marker({
        draggable: true
    })

        .setLngLat([long, lat])
        .addTo(map);

    // Marker dragging function
    function onDragEnd() {
        let lngLat = marker.getLngLat();
        long = lngLat.lng
        lat = lngLat.lat
        reverseGeocode(lngLat, MAPBOX_TOKEN).then(function (result) { //result represents what reversegeocode is doing
            searchInput.val(result);
            $("#currentCity").text(searchInput.val());
            searchInput.val(result);
        })

        weatherMap();
    }

    //search input function
    function searchPlace() {
        geocode(searchInput.val(), MAPBOX_TOKEN).then(function (result) {
            long = result[0];
            lat = result[1];
            marker.setLngLat([long, lat])
            $("#currentCity").text(searchInput.val());
            map.flyTo({
                center: [long, lat],
                zoom: 9,
            });
            weatherMap();
        })
    }


    //when clicked clear default value and assign searchplace function
    $("#button").click(function (e) {
        e.preventDefault();
        searchPlace();
    });

    map.addControl(new mapboxgl.NavigationControl()); // MAp Control feature
    marker.on('dragend', onDragEnd);


}());