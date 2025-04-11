import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return isAuth ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
