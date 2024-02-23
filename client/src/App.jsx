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
import OnlyAdminPrivatRoute from "./components/OnlyAdminPrivatRoute";
import CreatePost from "./components/CreatePost";
import FooterComp from "./components/Footer";
import UpdatePost from "./components/UpdatePost";

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
        <Route element={<OnlyAdminPrivatRoute />}>
          <Route path="/create-post" Component={CreatePost} />
          <Route path="/update-post/:postId" Component={UpdatePost} />
        </Route>
        <Route path="/projects" Component={Projects} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
