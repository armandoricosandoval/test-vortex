import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "../assets/Footer";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProfileStudents from "../pages/ProfileStudents";
import Singup from "../pages/Singup";
import Writers from "../pages/Writers";

const AppRouters = () => {
  return (
    <>
      <Router basename="/test-vortex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sing-up" element={<Singup />} />
          <Route path="/profile-students" element={<ProfileStudents />} />
          <Route path="/writers" element={<Writers />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default AppRouters;
