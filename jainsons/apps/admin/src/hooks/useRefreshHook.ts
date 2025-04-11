"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/auth_slice";
import { useRouter } from "next/navigation";

export function useLoadingWithRefresh() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/admin/refresh-token`,
          {
            withCredentials: true,
          }
        );
        dispatch(setUser(data?.data));
        router.replace("/");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading };
}
