import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectRoute(props) {
  if (localStorage.getItem("token")) {
    // eslint-disable-next-line react/prop-types
    return props.children;
  } else {
    return <Navigate to={"./Login"} />;
  }
}
