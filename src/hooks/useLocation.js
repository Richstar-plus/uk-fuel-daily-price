import { useEffect, useState } from "react";

export function useLocation() {
  const [coords, setCoords] = useState({
    lat: null,
    lng: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          loading: false,
          error: null,
        });
      },
      (error) => {
        setCoords((prev) => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    );
  }, []);

  return coords;
}