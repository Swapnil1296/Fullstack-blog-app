import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingUp from "./pages/SingUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/sign-up" Component={SingUp} />
        <Route path="/sign-in" Component={SignIn} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" Component={Dashboard} />
        </Route>
        <Route path="/projects" Component={Projects} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
