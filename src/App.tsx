import Loader from "./components/Loader/Loader";
import { LOGIN_ROUTE } from "./constants/routes";
import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path={LOGIN_ROUTE} element={<LoginPage />} />
        {/* <Route path="*" element={<Navigate replace to={HOME_ROUTE} />} /> */}
      </Routes>
    </Suspense>
  );
};

export default App;
