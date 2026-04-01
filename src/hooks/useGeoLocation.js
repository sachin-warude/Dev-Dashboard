import { useState, useEffect } from "react";

export function useGeolocation() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [position, setPosition] = useState({});
  // const [error, setError] = useState(null);
  // const { lat, lng } = position;

  // function getPosition() {
  //   if (!navigator.geolocation)
  //     return setError("Your browser does not support geolocation");

  //   setIsLoading(true);
  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       setPosition({
  //         lat: pos.coords.latitude,
  //         lng: pos.coords.longitude,
  //       });
  //       setIsLoading(false);
  //     },
  //     (error) => {
  //       setError(error.message);
  //       setIsLoading(false);
  //     },
  //   );
  // }
  // console.log(position);
  // return { isLoading, error, lat, lng, position };

  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);
  const { latitude, longitude } = coords ? coords : {};

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords(pos.coords),
      (err) => setError(err.message),
    );
  }, []);
  return { latitude, longitude, error };
}
