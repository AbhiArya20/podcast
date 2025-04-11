import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Activate from "./pages/activate/activate";
import Authenticate from "./pages/authenticate/authenticate";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import PageError from "./components/shared/page-error/page-error";
import PageLoader from "./components/shared/page-loader/page-loader";
import PrivacyPolicy from "./pages/privacy-policy/privacy-policy";
import Room from "./pages/room/room";
import Rooms from "./pages/rooms/rooms";
import { Toaster } from "react-hot-toast";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import { useSelector } from "react-redux";

function App() {
	const { loading, error } = useLoadingWithRefresh();

	return (
		<BrowserRouter>
			{loading ? (
				<PageLoader message="Loading, please wait..." />
			)
			
			// : error ? (
			// 	<PageError error={error} type={"retry"} />
			// )
			 :
			 (
				<>
					<Routes>
						<Route
							path="/"
							element={
								<GuestRoute>
									<Home />
								</GuestRoute>
							}
						/>
						<Route
							path="/authenticate"
							element={
								<GuestRoute>
									<Authenticate />
								</GuestRoute>
							}
						/>
						<Route
							path="/activate"
							element={
								<SemiProtectedRoute>
									<Activate />
								</SemiProtectedRoute>
							}
						/>
						<Route
							path="/meetings"
							element={
								<ProtectedRoute>
									<Rooms />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/:id"
							element={
								<ProtectedRoute>
									<Room />
								</ProtectedRoute>
							}
						/>
						<Route path="/profile" element={<h1>Profile</h1>} /> 
						<Route path="/settings" element={<h1>Settings</h1>} /> 
						<Route path="/privacy-policy/" element={<PrivacyPolicy />} />
					</Routes>
					<Toaster />
				</>
			)}
		</BrowserRouter>
	);
}



const GuestRoute = ({ children }) => {
	const { isAuth } = useSelector((state) => state.auth);
	return isAuth ? <Navigate to="/meetings" /> : children;
};

const SemiProtectedRoute = ({ children }) => {
	const { user, isAuth } = useSelector((state) => state.auth);
	if (!isAuth) {
		return <Navigate to="/" />;
	}
	return user.activated ? <Navigate to="/meetings" /> : children;
};

const ProtectedRoute = ({ children }) => {
	const { user, isAuth } = useSelector((state) => state.auth);
	if (!isAuth) {
		return <Navigate to="/" />;
	}
	return user.activated ? children : <Navigate to="/activate" />;
};

export default App;

// TODO UPDATE README
// TODO UPDATE package.json for auther & repository and more
// TODO ADD License
// TODO UPDATE .env files
