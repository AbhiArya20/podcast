import "@/styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  GuestRoute,
  ProtectedRoute,
  SemiProtectedRoute,
} from "@/routes-wrappers";
import Activate from "@/pages/activate/activate";
import Authenticate from "@/pages/authenticate/authenticate";
import { BiSolidError } from "react-icons/bi";
import { HiRefresh } from "react-icons/hi";
import Home from "@/pages/home/home";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import PageError from "@/components/page-error/page-error";
import PageLoader from "@/components/page-loader/page-loader";
import Room from "@/pages/room/room";
import Rooms from "@/pages/rooms/rooms";
import { useLoadingWithRefresh } from "@/hooks/use-loading-with-refresh";
import PrivacyPolicy from "@/components/privacy-policy/privacy-policy";

function App() {
  const { loading, error } = useLoadingWithRefresh();

  if (loading)
    return <PageLoader isLoading={loading} message="Loading, please wait..." />;

  if (error)
    return (
      <PageError
        error={error}
        buttonTxt="Try Again"
        buttonIcon={<HiRefresh size={"1.5rem"} />}
        onButtonClick={() => window.location.reload()}
        icon={
          error.code === 500 ? (
            <BiSolidError />
          ) : (
            <MdOutlineSignalWifiStatusbarConnectedNoInternet4 />
          )
        }
      />
    );

  return (
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
  );
}

export default App;
