import { useState, useEffect } from "react";

const useFetch = (link) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(link)
      .then((res) => {
        if (!res.ok) throw Error("Could not get resource.");
        else return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setData(null);
        setError(error.message);
      });
  }, [link]);

  return { data, isLoading, error };
};

export default useFetch;