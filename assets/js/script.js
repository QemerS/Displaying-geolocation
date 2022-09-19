function showPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMap, showError);
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}
 
// Define callback function for successful attempt
function showMap(position) {
    // Get location data
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const my_position = new google.maps.LatLng(latitude, longitude);
    
    const embedMap = document.getElementById("embedMap");
    const myOptions = {
        center: my_position,
        zoom: 16,
        mapTypeControl: true,
        navigationControlOptions: {
            style:google.maps.NavigationControlStyle.SMALL
        }
    }
    
    const map = new google.maps.Map(embedMap, myOptions);
    new google.maps.Marker({
        position:my_position,
        map:map,
        title:"You are here!"
    });
}
 
// Define callback function for failed attempt
function showError(error) {
    if(error.code == 1) {
        result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
    } else if(error.code == 2) {
        result.innerHTML = "The network is down or the positioning service can't be reached.";
    } else if(error.code == 3) {
        result.innerHTML = "The attempt timed out before it could get the location data.";
    } else {
        result.innerHTML = "Geolocation failed due to unknown error.";
    }
}

document.querySelector('#find-me').addEventListener('click', showPosition);