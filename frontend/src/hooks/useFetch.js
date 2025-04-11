import { useState, useEffect } from "react";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";

export function useFetch(callback, dependencies) {
  if (!Array.isArray(dependencies))
    throw new Error("Dependencies must be an array");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setError(null);
      setLoading(true);
      try {
        const { data } = await callback();
        setData(data);
      } catch (err) {
        console.log(err);
        if (!err.response) {
          setError({
            Icon: MdOutlineSignalWifiStatusbarConnectedNoInternet4,
            message: "Oops! No Internet!",
            description:
              "It seems you’re offline. Please check your connection and try again. I’m here when you’re back!",
          });
        } else {
          const { data } = err.response;
          setError({
            Icon: BiSolidError,
            message: data?.message ?? "Oops! Something went wrong",
            description:
            data?.description ??
              "It looks like something didn't go as planned. Please try again in a moment,  We are fixing this issue very soon.",
          });
        }
      } finally {
        setLoading(false);
      }
    })();
  }, dependencies ?? []);

  return { loading, data, error };
}
