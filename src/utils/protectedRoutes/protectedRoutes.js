import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { helperFunction } from "../helperFunctions";
import { Toast } from "../../config/config";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = async () => {
    const userToken = helperFunction.getToken();
    const permissionRole = auth.permission;
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return window.location.replace("/"); //to reset other presistant redux states
    } else if (permissionRole[props.children.props.permission] !== true) {
      Toast.fire({
        icon: "error",
        title: "Unauthorized Access!",
      });
      return navigate("/");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [props, auth.isLoggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{isLoggedIn ? props.children : null}</>;
};
export default ProtectedRoute;