import React, { useState } from "react";
import TextInput from "../../shared/text-input/text-input";
import Button from "../../shared/button/button";
import { TiArrowRight } from "react-icons/ti";
import Navigation from "../../shared/navigation/navigation";
import { setName } from "../../../store/activate-slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./step-name.module.css";

const StepName = ({ onNext }) => {
	const { name } = useSelector((state) => state.activate);
	const {  user } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const [fullname, setFullname] = useState(user?.name || name);

	const submit = async () => {
		if (!fullname) return;
		dispatch(setName(fullname));
		onNext();
	};

	return (
		<>
			<Navigation showLoginBtn={false} />
			<div className={styles.errorScreen}>
				<div className={styles.errorCard}>
					<div className={styles.errorContent}>
						<div className={styles.logoContainer}>
							<img src={`/assets/logo.svg`} alt="logo" className={styles.largeLogo} />
							<img src={`/assets/logo.svg`} alt="logo" className={styles.logo} />
							<h1 className={styles.appTitle}>Meeting Room</h1>
						</div>
						<div className={styles.errorDetails}>
							<div className={styles.SignIn}>
								<img src={`/assets/logo.svg`} alt="logo" className={styles.largeLogo} />
								<span className={styles.errorMessage}>What’s Your Name?</span>
								<div className={styles.descriptionContainer}>
									<p className={styles.errorDescription}>We’d love to know your name! Please enter it so we can personalize your experience.</p>
								</div>
							</div>

							<form className={styles.formClass}>
								<div className={styles.textInputWrapper}>
									<TextInput style={{ height: "3.5rem", width: "100%" }} value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Abhi Arya" />
								</div>
								<div className={styles.buttonWrapper}>
									<Button onClick={submit} className={styles.buttonExtention}>
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

export default StepName;
