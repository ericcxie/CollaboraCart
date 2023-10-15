import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import BusinessForm from "./pages/BusinessForm";
import ItemForm from "./pages/ItemForm";
import SignUp from "./pages/auth/signup";
import SignIn from "./pages/auth/signin";
import MatchPage from "./pages/match";
import Dashboard from "./pages/dashboard";
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/BusinessSignUp" element={<BusinessForm />} />
        <Route path="/ItemSubmission" element={<ItemForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
