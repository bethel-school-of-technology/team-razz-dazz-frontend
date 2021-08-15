import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import GalleryPage from "./containers/GalleryPage";
import OrderPage from "./containers/OrderPage";
import Footer from "./components/Footer";
import UserProfile from "./containers/UserProfile";
import AdminView from "./containers/AdminView";
import OrderSubmission from "./containers/OrderSubmission";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import ContactPage from "./containers/ContactPage";
import AdminOrders from "./components/AdminOrders";


export default function App() {

  return (
    <Router>
      <div>
        <Navigationbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/adminorders">
            <AdminOrders />
          </Route>
          <AuthenticatedRoute path="/adminview" component={AdminView}>
          </AuthenticatedRoute>
          <AuthenticatedRoute
            path="/profile"
            component={UserProfile}
          ></AuthenticatedRoute>
          <AuthenticatedRoute
            path="/orderpage"
            component={OrderPage}
          ></AuthenticatedRoute>
          <AuthenticatedRoute
            path="/ordersubmission"
            component={OrderSubmission}
          ></AuthenticatedRoute>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/contactpage">
            <ContactPage />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
