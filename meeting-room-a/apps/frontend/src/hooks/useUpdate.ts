import { useState } from "react";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";

export function useUpdate(callback, options=[]) {
	
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	
	const { onSuccess, onError, validateFunc } = options
	const update = async () => {
		if (loading) return;
		setError(null);
		setLoading(true);
		try {
			if (validateFunc && !validateFunc()) return;
			const { data } = await callback();
			if (onSuccess) onSuccess(data);
			setData(data);
		} catch (err) {
			if (onError) onError(err);
			if (!err.response) {
				if (err.code === "ERR_NETWORK") {
					setError({
						Icon: MdOutlineSignalWifiStatusbarConnectedNoInternet4,
						message: "Oops! No Internet!",
						description: "It seems you’re offline. Please check your connection and try again. I’m here when you’re back!",
					});
				}
				setError({
					Icon: MdOutlineSignalWifiStatusbarConnectedNoInternet4,
					message:err?.message ?? "Oops! Something went wrong",
					description: err?.description ?? "It looks like something didn't go as planned. Please try again in a moment,  We are fixing this issue very soon.",
				});
			} else {
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
	};

	return { loading, error, data, update };
}
