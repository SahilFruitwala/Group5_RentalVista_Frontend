// 1. Author: Sahil Fruitwala - B00844489
import React from "react";
import "./utilities/FontAwesome";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";

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
import AppointmentBook from "./components/appointment/AppointmentBook";
import MyAppointment from "./components/appointment/MyAppointments";
import RescheduleAppointment from "./components/appointment/RescheduleAppointment";
import AddPost from "./components/post";
import SignupPage from "./components/signup/index";
import ViewRoom from "./components/house/View_Room/viewroom";
import Comments from "./components/house/View_Room/comments";
import ContactUs from "./components/contactus";

function App(props) {
  const history = createBrowserHistory();

  // const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  // const [isTokenExist, setIsTokenExist] = useState(false);

  // const handleSignUpClick = (bool) => {
  //   setIsSignUpOpen(bool);
  //   document.body.style.overflow = bool ? "hidden" : "scroll";
  // };

  // useEffect(() => {
  //   localStorage.getItem("token")
  //     ? setIsTokenExist(true)
  //     : setIsTokenExist(false);
  // }, []);

  /* 
  TODO: logout was not working
  TODO: ask Sneh why I need to reload every-time after login or logout to reflect navbar change
  */

  return (
    <div className="page-container">
      <Router history={history}>
        <NavigationBar />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/blog" exact component={BlogPage} />
            <Route path="/edit" exact component={EditProfile} />
            <Route path="/house" exact component={HousePage} />
            {/* <Route path="/view-room" exact component={ViewRoom} /> */}
            <Route
              exact
              path="/view-room/:rent,:date,:bedroom,:bathroom,:description,:roomID"
              component={ViewRoom}
            />
            <Route path="/comments" exact component={Comments} />
            <Route path="/aboutus" exact component={AboutUsPage} />
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/faq" exact component={FAQPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/payment" exact component={PaymentPage} />
            <Route path="/post" exact component={AddPost} />
            <Route path="/appointment-book" exact component={AppointmentBook} />
            <Route
              path="/appointment-reschedule/:id"
              exact
              component={RescheduleAppointment}
            />
            <Route path="/myapps" exact component={MyAppointment} />
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
