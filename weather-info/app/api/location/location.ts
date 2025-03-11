const getLocation = async (): Promise<string> => {
    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by this browser.");
    }

    try {
        const location = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        return `${location.coords.latitude}, ${location.coords.longitude}`;
    } catch (error) {
        throw new Error("Unable to retrieve location. Please enable location services.");
    }
};

export default getLocation;
