import { useState, useEffect } from "react";

export function useGeolocation() {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  const { latitude, longitude } = coords ? coords : {};

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords(pos.coords),
      (err) => setError(err.message),
    );
  }, []);

  return { latitude, longitude, error };
}
