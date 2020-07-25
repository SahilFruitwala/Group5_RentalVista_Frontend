import React from "react";
import "./utilities/FontAwesome";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
import ViewRoom from "./components/house/View_Room/viewroom";
import AppointmentBook from "./components/appointment/AppointmentBook";

function App() {
  return (
    <div className="page-container">
      <Router>
        <NavigationBar />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/blog" exact component={BlogPage} />
            <Route path="/edit" exact component={EditProfile} />
            <Route path="/house" exact component={HousePage} />
            <Route path="/view-room" component={ViewRoom} />
            <Route path="/aboutus" exact component={AboutUsPage} />
            <Route path="/faq" exact component={FAQPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/payment" exact component={PaymentPage} />
            <Route path="/404" component={Page404} />
            <Route path="/appointment-book" component={AppointmentBook} />
            <Redirect from="*" to="/404" />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
