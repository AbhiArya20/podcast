import { Route, Routes } from "react-router-dom";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
import { HiRefresh } from "react-icons/hi";
import Activate from "@/pages/activate/activate";
import Authenticate from "@/pages/authenticate/authenticate";
import Home from "@/pages/home/home";
import PageError from "@/components/page-error/page-error";
import PageLoader from "@/components/page-loader/page-loader";
import Room from "@/pages/room/room";
import Rooms from "@/pages/rooms/rooms";
import { useLoadingWithRefresh } from "@/hooks/use-loading-with-refresh";
import PrivacyPolicy from "@/components/privacy-policy/privacy-policy";
import {
  GuestRoute,
  ProtectedRoute,
  SemiProtectedRoute,
} from "@/routes-wrappers";
import "@/styles.css";
import NotFound from "./components/not-found/not-found";

function App() {
  const { isLoading, error } = useLoadingWithRefresh();

  if (isLoading)
    return (
      <PageLoader isLoading={isLoading} message="Loading, please wait..." />
    );

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
        path="/meetings/:id"
        element={
          <ProtectedRoute>
            <Room />
          </ProtectedRoute>
        }
      />
      <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
