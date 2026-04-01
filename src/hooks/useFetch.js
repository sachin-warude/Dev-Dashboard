import React, { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!url) return;
    let ignore = false;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        if (!ignore) setData(result);

        setError("");
      } catch (err) {
        console.log(err);
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };
    fetchData();
    return () => (ignore = true);
  }, [url]);
  return { data, error, isLoading };
}
