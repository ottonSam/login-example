import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { PrivateRoutes } from "./privateRoutes";
import Home from "../pages/Home";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
