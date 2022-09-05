import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetch(url).then((res) => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        });
        setData(result);
        setError("");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return [data, isLoading, error];
};
export default useFetch;
