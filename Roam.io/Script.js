// Initialize and add the map
function initMap() {
    
    // The location of the center point (coords are for Rowan :D)

    const location = { lat: 39.7065, lng: -75.1177 };
    const location2 = { lat: 40.1234, lng: -76.1782 };
    
    // The map

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
    });
    
    // The marker

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });

    const marker1 = new google.maps.Marker({
        position: location2,
        map: map,
    });
}