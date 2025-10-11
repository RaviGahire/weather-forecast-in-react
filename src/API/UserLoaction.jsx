import React, { useState } from 'react'

export const UserLoaction = () => {
    const [load, setLoad] = useState(false)
    const [error, setError] = useState('');


    const getLoaction = async () => {
        // Check browser supported to geolaction

        if (!('geolocation' in navigator)) {

            setError("Geolocation is not supported by your browser");
            setLoad(false)

            return
        }

        let watchId = null;
        let timeoutId = null;
        let hasReceivedPosition = false;

        timeoutId = setTimeout(() => {
            if (watchId !== null) {
                navigator.geolocation.clearWatch(watchId);
            }
            if (!hasReceivedPosition) {
                setError('Location request timed out. Please ensure GPS is enabled and try again.');
                setLoading(false);
            }
        }, 20000);

        watchId = navigator.geolocation.watchPosition(
            async (position) => {
                const positionTime = Date.now() - position.timestap;

                if (positionTime > 5000) {
                    console.log(`Position too old (${positionTime}) waiting for fresh loaction`)
                    return
                }

                hasReceivedPosition = true

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
                    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);

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
                    setLoad(false);
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
                setLoad(false);
            },

            {
                enableHighAccuracy: true, // Use GPS if available
                timeout: 20000,           // Wait max 20 seconds for better GPS lock
                maximumAge: 0             // Don't use cached position
            }


        )



        setError(errorMessage);
        setLoad(false);




        return (
            <>
                <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center p-5">
                    <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl">
                                📍
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800">Find My Location</h1>
                        </div>

                        <button
                            onClick={getLocation}
                            disabled={load}
                            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                        >
                            {load ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Getting Location...
                                </>
                            ) : (
                                'Get My Location & City'
                            )}
                        </button>

                        {error && (
                            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                                <p className="text-red-700">{error}</p>
                            </div>
                        )}

                        {locationData && (
                            <div className="mt-8 space-y-4">
                                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-purple-500">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">City</p>
                                    <p className="text-xl font-semibold text-gray-800">{locationData.city}</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-purple-500">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">State/Region</p>
                                    <p className="text-xl font-semibold text-gray-800">{locationData.state}</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-purple-500">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Country</p>
                                    <p className="text-xl font-semibold text-gray-800">{locationData.country}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-purple-500">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Latitude</p>
                                        <p className="text-lg font-semibold text-gray-800">{locationData.latitude}</p>
                                    </div>

                                    <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-purple-500">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Longitude</p>
                                        <p className="text-lg font-semibold text-gray-800">{locationData.longitude}</p>
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-green-500">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Accuracy</p>
                                    <p className="text-lg font-semibold text-gray-800">{locationData.accuracy}</p>
                                </div>

                                <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Last Updated</p>
                                    <p className="text-lg font-semibold text-gray-800">{locationData.timestamp}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


            </>
        )
    }

}