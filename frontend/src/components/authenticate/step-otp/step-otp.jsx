import React, { useEffect, useState } from "react";
import { sendOtp, verifyOtp } from "../../../http";

import { BeatLoader } from "react-spinners";
import Button from "../../shared/button/button";
import CustomError from "../../../utils/custom-error";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Navigation from "../../shared/navigation/navigation";
import TextInput from "../../shared/text-input/text-input";
import { TiArrowRight } from "react-icons/ti";
import { setAuth } from "../../../store/auth-slice";
import { setOtp as setHash } from "../../../store/auth-slice";
import styles from "./step-otp.module.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useUpdate } from "../../../hooks/useUpdate";

const StepOTP = ({ onNext }) => {
	const [otp, setOtp] = useState("");
	const { hash, email } = useSelector((state) => state.auth.otp);
	const [timer, setTimer] = useState(30);

	const dispatch = useDispatch();

	const submit = async () => {
		return await await verifyOtp({ email, otp, hash });
	};

	const onSuccess = (data) => {
		dispatch(setAuth(data));
	};

	const validateFunc = () => {
		if(!otp) return false;
		if (otp.length === 6) return true;
		throw new CustomError({ message: "Looks like the OTP is incorrect.", description: "Please check your email for correct OTP" });
	};
	const { error, loading, update } = useUpdate(submit, { validateFunc, onSuccess });

	const handleEnterClickEvent = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			update();
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (timer <= 0) return;
			setTimer(timer - 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	const resendOtp = async () => {

		

		return await sendOtp({ email: email.trim().toLowerCase() });
	};

	const onSuccessResend = (data) => {
		dispatch(setHash({ email: data.email, hash: data.hash }));
		setTimer(30)
	};

	const { error: resendOTPError, loading: resendOTPLoading, data: resendData, update: resendOTPupdate } = useUpdate(resendOtp, { onSuccess: onSuccessResend });

	return (
		<>
			<Navigation showLoginBtn={false} />
			<div className={styles.errorScreen}>
				<div className={styles.errorCard}>
					{loading && <div className={styles.progressBarWrapper}></div>}
					<div className={styles.errorContent}>
						<div className={styles.logoContainer}>
							<img src={`/assets/logo.svg`} alt="logo" className={styles.largeLogo} />
							<img src={`/assets/logo.svg`} alt="logo" className={styles.logo} />
							<h1 className={styles.appTitle}>Meeting Room</h1>
						</div>
						<div className={styles.errorDetails}>
							<div className={styles.SignIn}>
								<img src={`/assets/logo.svg`} alt="logo" className={styles.largeLogo} />
								<span className={styles.errorMessage}>Check Your Email</span>
								<span className={styles.errorEmail}>{email}</span>
								<div className={styles.descriptionContainer}>
									<p className={styles.errorDescription}>We’ve sent a One-Time Password (OTP) to your email address. Please check your inbox (and spam folder) and enter the OTP to continue</p>
								</div>
							</div>

							<form className={styles.formClass} onKeyDown={handleEnterClickEvent}>
								{error && (
									<div className={styles.stepEmailError}>
										{error.message && <p>{error.message}</p>}
										{error.description && <p>{error.description}</p>}
									</div>
								)}

								<div className={styles.textInputWrapper}>
									<TextInput style={{ height: "3.5rem", width: "100%" }} value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="000000" />
									<div className={styles.resetClockWrapper}>
										{resendOTPLoading ? (
											<BeatLoader color="#0077ff" />
										) : timer ? (
											<p>{`Resend OTP in ${timer}s`}</p>
										) : (
											<p className={styles.resetBtn} onClick={resendOTPupdate}>
												Resend
											</p>
										)}
									</div>
								</div>
								<div className={styles.buttonWrapper}>
									<Button className={styles.facebookButtonExtention}>
										<FaFacebookF className={styles.actionIcon} />
									</Button>
									<Button className={styles.googleButtonExtention}>
										<FcGoogle className={styles.actionIcon} />
									</Button>
									<Button onClick={update} className={styles.buttonExtention} loading={loading} loaderColor="white">
										<span>{"Next"}</span>
										<TiArrowRight className={styles.actionIcon} />
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StepOTP;
