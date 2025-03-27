const jsonBinUrl = "https://api.jsonbin.io/v3/b/67e3ab658a456b79667ce33a ";
const apiKey = "$2a$10$Eloirc.5zAGMcqIlouqpveZLaxBPSb0M1PwM3dcMimW1XcZVXsf9m";

async function getJSONGMData() {
    try {
        const response = await fetch(jsonBinUrl, {
            headers: {
                "X-Master-Key": apiKey
            }
        });

        if (!response.ok) throw new Error("Failed to fetch data from JSONBin");

        const data = await response.json();
        return data.record || [];
    } catch (error) {
        console.error("Error fetching marker data:", error);
        return [];
    }
}

// Load markers onto the map
getJSONGMData().then(locations => {
    locations.forEach(location => addMarker(location));
});
