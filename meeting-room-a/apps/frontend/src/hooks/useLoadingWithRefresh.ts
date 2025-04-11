import { useEffect, useState } from "react";

import { BiSolidError } from "react-icons/bi";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import axios from "axios";
import { setAuth } from "../store/auth-slice";
import { useDispatch } from "react-redux";

export function useLoadingWithRefresh() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`, {
					withCredentials: true,
				});
				dispatch(setAuth(data));
			} catch (err) {
				if (!err.response) {
					setError({
						Icon: MdOutlineSignalWifiStatusbarConnectedNoInternet4,
						message: "Oops! No Internet!",
						description: "It seems you’re offline. Please check your connection and try again. I’m here when you’re back!",
					});
				}
        console.log(err);
        
				if (err.status === 500) {
					const { data } = err.response;
					setError({
						Icon: BiSolidError,
						message: data?.message ?? "Oops! Something went wrong",
						description: data?.description ?? "It looks like something didn't go as planned. Please try again in a moment,  We are fixing this issue very soon.",
					});
				}
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return { loading, error };
}
