/**
 *
 * Application
 *
 */

import React from "react";

import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// routes
import Login from "../Login";
import SignUp from "../SignUp";
import HomePage from "../HomePage";
import User from "../User";
// import Footer from "../../components/Common/Footer";
// import Page404 from "../../components/Common/Page404";

class Application extends React.PureComponent {
  componentDidMount() {
  }

  render() {
    return (
      <div className="application">
        <main className="main">
          {/* <Container> */}
            <div className="wrapper">
           <BrowserRouter>

              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route path="/user" component={User} />
                {/* <Route path="/404" component={Page404} /> */}
                <Route path="*" component={Login} />
              </Switch>
           </BrowserRouter>

            </div>
          {/* </Container> */}
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
  };
};

export default connect(mapStateToProps)(Application);
