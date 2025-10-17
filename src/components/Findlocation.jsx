import { useState, useEffect, useCallback } from 'react';
import { User_Location_Data } from "../DataContexts"
import { WeatherDashboard } from "./Dashboard"



export function LocationFinder() {
  const [error, setError] = useState('');
  const [locationData, setLocationData] = useState(null);


  const getLocation = useCallback(async () => {

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
          const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
          const data = await response.json();
          setLocationData(data);



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
  }, [])



  useEffect(() => {
    getLocation()
  }, [getLocation])

  // console.log('From Location finder', locationData)

  return (

    <User_Location_Data.Provider value={ locationData }>
      {
        locationData ? (<WeatherDashboard />) : (<div className="flex items-center justify-center h-screen bg-gray-800 text-center  ">
          {error ? (<p className='text-xl md:text-2xl text-gray-200 font-semibold  tracking-wide'>Unable to retrieve your location. Please allow location access.</p>) : (<p className='text-2xl text-gray-200 font-semibold tracking-wide'>Please wait detecting your location...</p>) }
        </div>)
      }

    
    </User_Location_Data.Provider>
  )
}
