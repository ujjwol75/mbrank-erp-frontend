import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoutes = ({ redirectTo }) => {
  const navigate = useNavigate();
  const isauth = false;
  // if (!isauth) return <Navigate to={redirectTo} replace />;

  return <Outlet />;
};

ProtectedRoutes.propTypes = {
  redirectTo: PropTypes.node.isRequired, // or PropTypes.element, depending on your use case
};

export default ProtectedRoutes;
