import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Import Helpers
import { authenticated } from "../../utils/auth";

// Import Components to show Screens
import { Home } from "../main/Index";
import { Login } from "../auth/logIn/Index";
import { SignUp } from "../auth/signUp/Index";

export const Navigation = () => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.user.auth);

  const navigate = useNavigate();
  const handleUnAuth = () => navigate("/login");

  console.log(authenticated, "Hello Nav");
  console.log(auth, "Hello Nav");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Handling the Business User Routes */}

      {user.role === 2 && authenticated && auth ? (
        <>
          <Route path="/business/dashboard" element={<div>Hello</div>} />
        </>
      ) : (
        () => handleUnAuth()
      )}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
