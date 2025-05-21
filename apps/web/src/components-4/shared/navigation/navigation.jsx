import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@/avatar/avatar";
import { BeatLoader } from "react-spinners";
import Button from "@/button/button";
import { FaLock } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import Logo from "@/logo/logo";
import { MdAccountCircle } from "react-icons/md";
import { logout } from "@/http";
import { setAuth } from "@/store/auth-slice";
import styles from "@/navigation.module.css";
import { useNavigate } from "react-router-dom";

const Navigation = ({ showLoginBtn = true }) => {
	const [showOption, setShowOption] = useState(false);
	const [spinnerColor, setSpinnerColor] = useState("red");
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const { isAuth, user } = useSelector((state) => state.auth);
	async function logoutUser() {
		if (loading) return;
		try {
			setLoading(true);
			try {
				const { data } = await logout();
				dispatch(setAuth(data));
			} catch (err) {
				console.log("Failed to logout from server");
			}
			setLoading(false);
			setShowOption(false);
		} catch (err) {
			console.log(err);
		}
	}
	const navigate = useNavigate();

	return (
		<nav className={`${styles.navbarWrapper}`}>
			<div className={`${styles.container} ${styles.navbar}`}>
				<div className={styles.logoWrapper} to="/">
					<Logo onClick={() => navigate("/")} />
				</div>
				{isAuth && user.activated ? (
					<div className={styles.userBtn}>
						<div className={styles.userWrapper}>
							<span className={styles.userName}>{user.name}</span>
							<Avatar src={user.avatar} onClick={() => setShowOption((prev) => !prev)} />
						</div>
						{showOption && (
							<div className={styles.options}>
								<button>
									<span>{user.name}</span>
									<MdAccountCircle fontWeight={"bold"} fontSize={"24px"} />
								</button>
								<button>
									<span>Settings</span>
									<IoSettings fontWeight={"bold"} fontSize={"24px"} />
								</button>
								<button className={styles.logoutButton} onClick={logoutUser} onMouseEnter={() => setSpinnerColor("white")} onMouseLeave={() => setSpinnerColor("red")}>
									{loading ? (
										<>
											<div className={styles.loggingOut}>
												<BeatLoader color={spinnerColor} />
												<span>Logging Out</span>
											</div>
											<FiLogOut fontWeight={"bold"} fontSize={"24px"} />
										</>
									) : (
										<>
											<span>Logout</span>
											<FiLogOut fontWeight={"bold"} fontSize={"24px"} />
										</>
									)}
								</button>
							</div>
						)}
					</div>
				) : (
					showLoginBtn && (
						<div className={styles.loginBtn}>
							<Button onClick={() => navigate("/authenticate")}>
								<span>Login</span>
								<FaLock className={styles.buttonIcon} />
							</Button>
						</div>
					)
				)}
			</div>
		</nav>
	);
};

export default Navigation;
