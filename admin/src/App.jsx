import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLoadingWithRefresh as useRefresh } from './hooks/useRefreshHook';
import SplashPage from './pages/SplashPage';
import NotFound from './pages/NotFound';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
// import Admins from './pages/admins/Admins';
// import ChangePassword from './pages/ChangePassword';
import Dashboard from './pages/dashboard/Dashboard';
import ListTermsConditions from './pages/terms-conditions/ListTermsConditions';
import SingleTermsConditions from './pages/terms-conditions/SingleTermsConditions';
// import Events from './pages/events/Events';
// import Event from './pages/events/Event';
// import EventParticipants from './pages/events/EventParticipants';
import { useSelector } from 'react-redux';
import './App.css';
import NoInternet from './pages/NoInternet';
import { useOnline } from './hooks/useOnline';

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker.register('/service-worker.js', { scope: '/' }).then(
//       function (registration) {
//         console.log('Service Worker registered with scope:', registration.scope);
//       },
//       function (err) {
//         console.log('Service Worker registration failed:', err);
//       }
//     );
//   });
// }

function App() {
  const isDarkMode = useSelector((state) => state.globalSetting.isDarkMode);
  const { isOnline } = useOnline();
  const { loading } = useRefresh();

  return (
    <>
      {!isOnline ? (
        <NoInternet />
      ) : (
        <>
          {loading ? (
            <SplashPage />
          ) : (
            <div className={`${isDarkMode && 'dark'} bg-white dark:bg-slate-950 w-screen h-screen`}>
              <BrowserRouter>
                <Routes>
                  <Route path='/login' element={<Login />} replace />
                  <Route path='/forgot-password' element={<ForgotPassword />} />
                  <Route path='/' element={<Dashboard />} />
                  {/* <Route path='/admins'>
                    <Route index element={<Admins />} />
                    <Route path='change_password' element={<ChangePassword />} />
                  </Route>

                  <Route path='events'>
                    <Route index element={<Events />} />
                    <Route path=':eventId' element={<Event />} />
                    <Route path=':eventId/participant' element={<EventParticipants />} />
                  </Route> */}
                  <Route path='terms-conditions-privacy-policy'>
                    <Route index element={<ListTermsConditions />} />
                    <Route path=':termsConditionsId' element={<SingleTermsConditions />} />
                  </Route>

                  <Route path='/*' element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </div>
          )}
        </>
      )}
    </>
  );
}
export default App;
