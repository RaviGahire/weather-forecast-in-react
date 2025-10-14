import { useState, useEffect } from 'react';
import DataTransfer from '../DataTransfer';
import { WeatherDashboard } from './Dashboard';
import { p } from 'motion/react-client';


export function LocationFinder() {
  const [error, setError] = useState('');
  const [locationData, setLocationData] = useState(null);



  const getLocation = async () => {

    setError('');
    // setLocationData(null);

    // Check if geolocation is supported
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by your browser");

      return;
    }

    // Get current position
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log('Location:', lat, lon);

        try {
          // Reverse geocoding using BigDataCloud API
          fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
            .then((response) => response.json())
            .then((locationData) => setLocationData(locationData))



        } catch (err) {
          console.error('Error:', err);
          setError('Failed to get city information: ' + err.message);

        }
      },
      (err) => {
        let errorMessage = 'Unable to retrieve your location. ';

        switch (err.code) {
          case err.PERMISSION_DENIED:
            errorMessage += 'Please allow location access.';
            break;
          case err.POSITION_UNAVAILABLE:
            errorMessage += 'Location information is unavailable.';
            break;
          case err.TIMEOUT:
            errorMessage += 'The request timed out.';
            break;
          default:
            errorMessage += 'An unknown error occurred.';
        }

        console.error('Geolocation error:', errorMessage);
        setError(errorMessage);

      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  useEffect(() => {
    getLocation()
  }, [])

  console.log('From Location finder', locationData)

  return (
    <DataTransfer.Provider value={{ locationData, error }}>
      {
        locationData ? (<WeatherDashboard />) : (<div className="text-center text-gray-500 mt-10">
          {error || 'Detecting your location...'}
        </div>)
      }
    </DataTransfer.Provider>
  )
}
