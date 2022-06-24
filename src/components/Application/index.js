/**
 *
 * Application
 *
 */

import React from "react";

import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
// import { Container } from "reactstrap";

// routes
import Login from "../Login";
import HomePage from "../HomePage";
// import Signup from "../Signup";
// import Footer from "../../components/Common/Footer";
// import Page404 from "../../components/Common/Page404";

class Application extends React.PureComponent {
  componentDidMount() {
    console.log("mounted");
  }

  render() {
    return (
      <div className="application">
        <main className="main">
          {/* <Container> */}
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={Login} />
                {/* <Route path="/register" component={Signup} /> */}
                {/* <Route path="/404" component={Page404} /> */}
                {/* <Route path="*" component={Page404} /> */}
              </Switch>
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
