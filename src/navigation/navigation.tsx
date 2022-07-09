import React from "react";

import SignInPage from "../screen/sign-in";
import Home from "../screen/home";
import SignUpPage from "../screen/sign-up";
import ForgotPasswordPage from "../screen/forgot-password";
import DashBoardPage from "../screen/dashboard";
import SubscribersPage from "../screen/subscribers";
import NotFoundPage from "../screen/404";
import AddCustomerPage from "../screen/addCustomer";
import RecordVideo from "../screen/record";
import ThankYouPage from "../screen/thank";
import ManageVideoPage from "../screen/manage-video";

import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

function Navigation() {
  return (
    <Switch>
      {/*Every One */}
      <Route exact path="/" component={Home} />
      <Route path="/record-video/thank-you/" component={ThankYouPage} />
      <Route
        path="/dashboard/manage-video/:idBusiness/:idCustomer/:idVideo"
        component={ManageVideoPage}
      />
      <Route
        path="/record-video/:idCustomer/:idBusiness"
        component={RecordVideo}
      />
      <Route
        path="/dashboard/subscribers/add-customer"
        component={AddCustomerPage}
      />
      <Route path="/dashboard/subscribers" component={SubscribersPage} />
      <Route path="/dashboard" component={DashBoardPage} />
      <Route path="/forgot-password" component={ForgotPasswordPage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
export default Navigation;
