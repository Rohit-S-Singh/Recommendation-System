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
 
 import actions from "../../actions";
 
 class Application extends React.PureComponent {
   constructor(props) {
     super(props);
   }
 
   componentDidMount() {}
 
   render() {
     console.log("authenticated", this.props.authenticated);
     var a = this.props.authenticated == true ? User : Login ;
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
                 <Route path="/user" component={a} />
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
     authenticated: state.authReducer.authenticated,
   };
 };
 
 export default connect(mapStateToProps, actions)(Application);
 