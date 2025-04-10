// Initialize and add the map
function initMap() {
    // Check if we're on the JsonGMData.html page
    const mapElement = document.getElementById("map");
    if (!mapElement) {
        console.log("Map element not found, skipping map initialization");
        return;
    }
    
    // The location of the center point (coords are for Rowan :D)
    const location = { lat: 39.7065, lng: -75.1177 };
    
    // The map
    const map = new google.maps.Map(mapElement, {
        zoom: 10,
        center: location,
    });
    
    // Only add default markers if we're not on the JsonGMData.html page
    if (!window.location.pathname.includes("JsonGMData.html")) {
        // The marker
        const marker = new google.maps.Marker({
            position: location,
            map: map,
        });

        const location2 = { lat: 40.1234, lng: -76.1782 };
        const marker1 = new google.maps.Marker({
            position: location2,
            map: map,
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const userNav = document.getElementById("userNav");

    // Retrieve logged-in user from local storage
    const username = localStorage.getItem("username");

    if (username) {
        userNav.innerHTML = `<a href="#" id="logout">Welcome, ${username} (Logout)</a>`;

        document.getElementById("logout").addEventListener("click", function () {
            localStorage.removeItem("username"); // Clear login info
            location.reload(); // Refresh the page
        });
    }
});
