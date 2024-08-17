import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import routes from "routes";
import ProtectedRoutes from "./ProtectedRoutes";
import SignIn from "layouts/authentication/sign-in";

function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={<ProtectedRoutes redirectTo="/" />}
            key={route.key}
          />
        );
      }
      return null;
    });

  return (
    <Routes>
      {/* <Route path="/" element={<SignIn />} /> */}
      {getRoutes(routes)}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default AppRoutes;
