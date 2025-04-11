import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/slices/AuthSlice';
import { ADMIN_SERVICE_API_URL } from '../envConfig';

export function useLoadingWithRefresh() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          `${ADMIN_SERVICE_API_URL}/refresh-token`,
          {},
          {
            withCredentials: true
          }
        );
        dispatch(setAuth(data));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading };
}
