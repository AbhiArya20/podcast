import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@/shared/avatar/avatar";
import Button from "@/shared/button/button";
import { FaUpload } from "react-icons/fa6";
import Loader from "@/shared/page-loader/page-loader";
import Navigation from "@/shared/navigation/navigation";
import { TiArrowRight } from "react-icons/ti";
import { activate } from "@/http";
import { setAuth } from "@/store/auth-slice";
import { setAvatar } from "@/store/activate-slice";
import styles from "@/step-avatar.module.css";
import { useUpdate } from "@/hooks/useUpdate";

const avatarStyles = ["adventurer", "adventurer-neutral", "avataaars", "avataaars-neutral", "big-ears", "big-ears-neutral", "big-smile", "bottts", "bottts-neutral", "croodles", "dylan", "fun-emoji", "lorelei", "lorelei-neutral", "micah", "miniavs", "notionists", "notionists-neutral", "open-peeps", "personas", "thumbs"];

// Function to generate a random avatar URL
function generateRandomAvatar() {
	const randomStyle = avatarStyles[Math.floor(Math.random() * avatarStyles.length)];
	const randomSeed = Math.random().toString(36).substring(2, 15);
	const flip = [true, false][Math.floor(Math.random() * 2)];
	const avatarUrl = `https://api.dicebear.com/9.x/${randomStyle}/svg?seed=${randomSeed}&&flip=${flip}`;
	return avatarUrl;
}

const StepAvatar = ({ onNext }) => {
	const { name } = useSelector((state) => state.activate);
	const { user } = useSelector((state) => state.auth);


	console.log(user);
	
	// TODO: Goggle images does not works properly when authenticate using images

	const randomAvatar = user?.avatar || generateRandomAvatar();
	const [image, setImage] = useState(randomAvatar);
	const [avatarFile, setAvatarFile] = useState(randomAvatar);

	const randomAvatars = useMemo(() => {
		const avatars = [randomAvatar];
		for (let i = 0; i < 10; i++) {
			avatars.push(generateRandomAvatar());
		}
		return avatars;
	}, []);

	function captureImage(e) {
		const file = e.target.files[0];
		if (!file) return;
		setAvatarFile(file);
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = function () {
			setImage(reader.result);
			dispatch(setAvatar(reader.result));
		};
	}

	const dispatch = useDispatch();

	const submit = async () => {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("avatar", avatarFile);
		return await activate(formData);
	};

	const onSuccess = (data) => {
		if (data.auth) {
			dispatch(setAuth(data));
		}
	};

	const { error, loading, update } = useUpdate(submit, { onSuccess });

	if (loading) return <Loader message="Activation in progress..." />;

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
								<span className={styles.errorMessage}>Profile Picture</span>
								<div className={styles.descriptionContainer}>
									<p className={styles.errorDescription}>Choose a profile icon below or upload your favorite</p>
								</div>

								<div className={styles.avatarContainer}>
									{randomAvatars.map((avatar, index) => (
										<Avatar
											key={index}
											className={`${styles.avatars} ${avatar !== image && styles.avatarBorder}`}
											src={avatar}
											alt="avatar"
											onClick={() => {
												setImage(avatar);
												setAvatarFile(avatar);
											}}
										/>
									))}
								</div>
							</div>

							<form className={styles.formClass}>
								{error && (
									<div className={styles.stepEmailError}>
										{error.message && <p>{error.message}</p>}
										{error.description && <p>{error.description}</p>}
									</div>
								)}
								<input onChange={captureImage} id="avatarInput" type="file" className={styles.avatarInput} />
								<label className={styles.avatarLabel} htmlFor="avatarInput">
									<div className={styles.avatarWrapper}>
										<img className={styles.avatarImage} src={image} alt="avatar" />
										<span className={styles.uploadButton} >
											<span>{"Choose New"}</span>
											<FaUpload className={styles.actionIcon} />
										</span>
									</div>
								</label>

								<div className={styles.buttonWrapper}>
									<Button onClick={update} className={styles.buttonExtention} loading={loading}>
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

export default StepAvatar;
