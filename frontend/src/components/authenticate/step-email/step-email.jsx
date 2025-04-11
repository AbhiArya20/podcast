import React, { useState } from "react";

import Button from "../../shared/button/button";
import CustomError from "../../../utils/custom-error";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navigation from "../../shared/navigation/navigation";
import TextInput from "../../shared/text-input/text-input";
import { TiArrowRight } from "react-icons/ti";
import { sendOtp } from "../../../http";
import { setOtp } from "../../../store/auth-slice";
import styles from "./step-email.module.css";
import { useDispatch } from "react-redux";
import { useUpdate } from "../../../hooks/useUpdate";
import { validate } from "email-validator";

const StepEmail = ({ onNext }) => {
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	const submit = async () => {
		return await sendOtp({ email: email.trim().toLowerCase() });
	};

	const onSuccess = (data) => {
		dispatch(setOtp({ email: data.email, hash: data.hash }));
		onNext();
	};

	const validateFunc = () => {
		if (!email) return false;
		if (!validate(email)) {
			throw new CustomError({
				message: "Invalid Email Address",
				description: "Please check your email and try again.",
			});
		}
		return true;
	};

	const { error, loading, update } = useUpdate(submit, { validateFunc, onSuccess });

	const handleEnterClickEvent = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			update();
		}
	};

	const gUpdate = () => {
		window.open("http://localhost:5500/auth/google", "_self");
	};
	const fUpdate = () => {
		window.open("http://localhost:5500/auth/facebook", "_self");
	};

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
								<span className={styles.errorMessage}>Sign In</span>
								<div className={styles.descriptionContainer}>
									<p className={styles.errorDescription}>
										By Sign-In or Sign-Up, you’re agreeing to our <Link to="/privacy-policy">Terms of Service &nbsp;</Link> and
										<Link to="/privacy-policy">&nbsp; Privacy Policy </Link>.
									</p>
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
									<TextInput style={{ height: "3.5rem", width: "100%" }} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abhyarya.2.0@gmail.com" />
								</div>
								<div className={styles.buttonWrapper}>
									<Button onClick={fUpdate} className={styles.facebookButtonExtention}>
										<FaFacebookF className={styles.actionIcon} />
									</Button>
									<Button onClick={gUpdate} className={styles.googleButtonExtention}>
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

export default StepEmail;
