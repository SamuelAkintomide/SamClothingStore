import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import Home from "./pages/home";
import Model from "./pages/model";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Test from "./pages/test";
import Account from "./pages/account";
// Components
import Header from "./components/header";
import Footer from "./components/Footer";
import RandomBackground from './components/RandomBackground';

// Styles
import "./App.scss";

function App() {

  return (
    <>
      <RandomBackground />
      <Router>
        <Route
          render={({ location, history }) => (
            <AnimatePresence initial={false} mode="wait">
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" render={() => (
                  <>
                    <Header />
                    <Home />
                    <Footer />
                  </>
                )} />
                <Route path="/model/:id" render={( ) => (
                  <>
                    <Header />
                    <Model />
                    <Footer />
                  </>
                )} />
                <Route exact path="/signup" render={() => (
                  <>
                    <Signup />
                    <Footer />
                  </>
                )} />
                <Route exact path="/login" render={() => (
                  <>
                    <Login />
                    <Footer />
                  </>
                )} />
                <Route exact path="/test" render={() => (
                  <>
                    <Test />
                  </>
                )} />
                 <Route exact path="/account" render={() => (
                  <>
                    <Header />
                    <Account />
                    <Footer />
                  </>
                )} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </>
  );
}

export default App;
