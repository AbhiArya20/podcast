import { useState, useCallback } from 'react';

const useFetch = (fetchCallback) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await fetchCallback();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [fetchCallback]);

  return { fetchData, loading, error, data };
};

export default useFetch;
