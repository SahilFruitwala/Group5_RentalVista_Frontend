import React, { useState, useEffect } from "react";
import "./utilities/FontAwesome";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from 'history';

import ScrollToTop from "./components/scrollToTop";
import NavigationBar from "./components/navigation/navbar/Navbar";
import Footer from "./components/navigation/footer/Footer";
import LandingPage from "./components/landing/index";
import EditProfile from "./components/profile/index";
import BlogPage from "./components/blog/index";
import HousePage from "./components/house/index";
import Page404 from "./components/404/index";
import AboutUsPage from "./components/about/index";
import LoginPage from "./components/login/index";
import PaymentPage from "./components/payment/index";
import FAQPage from "./components/faq/FAQ";
import AddPost from "./components/post";
import SignupPage from "./components/signup/index";
import ViewRoom from "./components/house/View_Room/ViewRoom";


function App(props) {
  // const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const history = createBrowserHistory();
  const [isTokenExist, setIsTokenExist] = useState(false);

  // const handleSignUpClick = (bool) => {
  //   setIsSignUpOpen(bool);
  //   document.body.style.overflow = bool ? "hidden" : "scroll";
  // };

  useEffect(() => {
    localStorage.getItem("token")
      ? setIsTokenExist(true)
      : setIsTokenExist(false);
  }, []);

  /* 
  TODO: logout was not working
  TODO: ask Sneh why I need to reload every-time after login or logout to reflect navbar change
  */

  return (
    <div className="page-container">
      <Router history={history}>
          <NavigationBar  />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/blog" exact component={BlogPage} />
            <Route path="/edit" exact component={EditProfile} />
            <Route path="/house" exact component={HousePage} />
            <Route path="/view-room" exact component={ViewRoom} />
            <Route path="/aboutus" exact component={AboutUsPage} />
            <Route path="/faq" exact component={FAQPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/payment" exact component={PaymentPage} />
            <Route path="/post" exact component={AddPost} />
            <Route path="/404" component={Page404} />
            <Redirect from="*" to="/404" />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
