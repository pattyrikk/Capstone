async function putJSONGMData() {
    const jsonBinUrl = "https://api.jsonbin.io/v3/b/67e3ab658a456b79667ce33a ";
    const apiKey = "$2a$10$Eloirc.5zAGMcqIlouqpveZLaxBPSb0M1PwM3dcMimW1XcZVXsf9m";

    const about = document.getElementById("about").value;
    const city = document.getElementById("city").textContent;
    const state = document.getElementById("state").textContent;
    const coordinates = document.getElementById("coordinates").textContent.split(", ");
    const imageUrl = document.getElementById("imagePreview").src;

    if (!coordinates[0] || !coordinates[1]) {
        console.error("Invalid coordinates");
        return;
    }

    const newMarker = {
        lat: parseFloat(coordinates[0]),
        lng: parseFloat(coordinates[1]),
        city: city,
        state: state,
        about: about,
        imageUrl: imageUrl.includes("http") ? imageUrl : "" // Ensure it's a valid URL
    };

    try {
        // Fetch existing data
        let response = await fetch(jsonBinUrl, {
            headers: { "X-Master-Key": apiKey }
        });
        let data = await response.json();
        let locations = data.record || [];

        // Add new marker
        locations.push(newMarker);

        // Save updated data
        response = await fetch(jsonBinUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": apiKey
            },
            body: JSON.stringify(locations)
        });

        if (!response.ok) throw new Error("Failed to save data to JSONBin");

        console.log("Markers saved successfully!");
        toggleModal(false);
    } catch (error) {
        console.error("Error saving marker data:", error);
    }
}

document.getElementById("save").addEventListener("click", putJSONGMData);
