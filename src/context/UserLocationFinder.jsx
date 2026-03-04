import { useState, useEffect, useCallback } from 'react';
import { UserLocationContext } from './UserLocationContext';
import axios from 'axios';

export function UserLocationFinder({children}) {
  const [error, setError] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);


  const getCoordinates = () => {
    return new Promise((res, rej) => {
      if (!("geolocation" in navigator)) {
        rej(new Error("Geolocation is not supported by your browser"));
        setError("Geolocation is not supported by your browser")
      }

      navigator.geolocation.getCurrentPosition((position) => {
        res({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });

      },
        (error) => rej(error), {
        enableHighAccuracy: true, timeout: 10000
      });
    })
  }

  const fetchCityData = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
      return response.data

    } catch (error) {
      setError("Failed to fetch city details");
      throw new Error("Failed to fetch city details");

    }
  }

  const getUserLocation = useCallback(async () => {
    setLoading(true);
    try {
      const userCoords = await getCoordinates();

      const data = await fetchCityData(userCoords.lat, userCoords.lon)
      
      setLocationData(data);

    } catch (error) {
      let msg = err.message || "An unknown error occurred";
      if (err.code === 1) msg = "Please allow location access.";
      setError(msg);
      console.error("Location Error:", msg);
    } finally {
      setLoading(false);
    }

  }, [])


  useEffect(() => {
    getUserLocation();
  }, [getUserLocation]);


  return (
    <UserLocationContext.Provider value={{ locationData, getUserLocation, error, loading }}>
      {locationData ? (
        children
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-800 text-center p-4">
          {error ? (
            <p className="text-xl text-red-400 font-semibold">{error}</p>
          ) : (
            <p className="text-2xl text-gray-200 font-semibold animate-pulse">
              Please wait, detecting your location...
            </p>
          )}
        </div>
      )}
    </UserLocationContext.Provider>
  )
}
