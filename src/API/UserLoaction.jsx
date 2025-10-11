import { useState } from 'react';
import { createContext } from 'react';
import { WeatherDashboard } from '../components/Dashboard';
const LocationContext = createContext();
export default function LocationFinder() {



    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [locationData, setLocationData] = useState(null);

    const getLocation = async () => {
        setLoading(true);
        setError('');
        setLocationData(null);

        // Check if geolocation is supported
        if (!("geolocation" in navigator)) {
            setError("Geolocation is not supported by your browser");
            setLoading(false);
            return;
        }

        let watchId = null;
        let timeoutId = null;
        let hasReceivedPosition = false;

        // Set a manual timeout
        timeoutId = setTimeout(() => {
            if (watchId !== null) {
                navigator.geolocation.clearWatch(watchId);
            }
            if (!hasReceivedPosition) {
                setError('Location request timed out. Please ensure GPS is enabled and try again.');
                setLoading(false);
            }
        }, 20000);

        // Function to get fresh location with watchPosition for better accuracy
        watchId = navigator.geolocation.watchPosition(
            async (position) => {
                // Check if position is fresh (not cached)
                const positionAge = Date.now() - position.timestamp;

                // Only accept positions that are very recent (less than 3 seconds old)
                if (positionAge > 5000) {
                    console.log(`Position too old (${positionAge}ms), waiting for fresh GPS fix...`);
                    return; // Keep watching for a fresher position
                }

                hasReceivedPosition = true;

                // Clear the watch and timeout
                if (watchId !== null) {
                    navigator.geolocation.clearWatch(watchId);
                }
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                }

                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const accuracy = position.coords.accuracy;

                try {
                    // Reverse geocoding using BigDataCloud API
                    const response = await fetch(
                        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
                    );

                    if (!response.ok) {
                        throw new Error('Failed to fetch location data');
                    }

                    const data = await response.json();

                    setLocationData({
                        city: data.city || data.locality || 'Not available',
                        state: data.principalSubdivision || 'Not available',
                        country: data.countryName || 'Not available',
                        latitude: lat.toFixed(6),
                        longitude: lon.toFixed(6),
                        accuracy: `±${Math.round(accuracy)}m`,
                        timestamp: new Date(position.timestamp).toLocaleTimeString()
                    });
                } catch (err) {
                    setError('Failed to get city information: ' + err.message);
                } finally {
                    setLoading(false);
                }
            },
            (err) => {
                hasReceivedPosition = true;

                if (watchId !== null) {
                    navigator.geolocation.clearWatch(watchId);
                }
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                }

                let errorMessage = 'Unable to retrieve your location. ';

                switch (err.code) {
                    case err.PERMISSION_DENIED:
                        errorMessage += 'Please allow location access and refresh the page.';
                        break;
                    case err.POSITION_UNAVAILABLE:
                        errorMessage += 'Location information is unavailable. Make sure GPS is enabled.';
                        break;
                    case err.TIMEOUT:
                        errorMessage += 'The request timed out. Move to an area with better GPS signal.';
                        break;
                    default:
                        errorMessage += 'An unknown error occurred.';
                }

                setError(errorMessage);
                setLoading(false);
            },
            {
                enableHighAccuracy: true, // Use GPS if available
                timeout: 20000,           // Wait max 20 seconds for better GPS lock
                maximumAge: 0             // Don't use cached position
            }
        );
    };
 

    return (
        <>
            <div>  <button
                onClick={getLocation}
                disabled={loading}
                className="w-50 bg-gradient-to-r from-purple-500 to-purple-700 text-white  rounded-xl font-semibold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 cursor-pointer"
            >
                {loading ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Getting Location...
                    </>
                ) : (
                    'Get Location'
                )}
            </button>

                {error && (
                    <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                        <p className="text-red-700">{error}</p>
                    </div>
                )}</div>

            {
                 locationData ? <LocationContext.Provider value={locationData}></LocationContext.Provider >: 'Wait'
               

            }

        </>

    );
}

export { LocationContext }