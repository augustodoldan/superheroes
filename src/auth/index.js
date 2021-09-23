import { Redirect } from "react-router-dom";

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token && token !== "") {
    return true;
  } else {
    return false;
  }
};

export const authGuard = (props, Component) => {
  if (isLoggedIn()) {
    return <Component {...props} />;
  } else {
    return <Redirect to={"/login"} />;
  }
};
