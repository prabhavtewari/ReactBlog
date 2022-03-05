import { useState, useEffect } from "react";

const useFetch = (link) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(link, { signal: abortCont.signal })
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
        if (error.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setIsLoading(false);
          setData(null);
          setError(error.message);
        }
      });

    return () => {
      abortCont.abort();
    };
  }, [link]);

  return { data, isLoading, error };
};

export default useFetch;
