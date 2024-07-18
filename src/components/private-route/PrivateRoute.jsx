import { useSelector } from "react-redux";
import {  useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {  selectIsLogin } from "../../redux/reducers/authUserSlice";
const PrivateRoute = (WrappedComponent) => {
  return (props) => {
    const userIsLogin = useSelector(selectIsLogin);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
      !userIsLogin &&
        navigate("/signIn", { state: { from: `${location.pathname}` } });
    }, [userIsLogin]);
    
    return ( userIsLogin && <WrappedComponent {...props} />)
  };
};
export default PrivateRoute;
