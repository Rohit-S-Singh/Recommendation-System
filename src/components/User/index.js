import React, { Component } from "react";
import {connect} from 'react-redux';

import {addRating, SetRating} from './actions';
import Recommend from "../Recommend";
import Rate from "../Rate";

import UserProfile from "react-user-profile";
const User = (props)=>{
  

    const photo =
      "https://i.ibb.co/x241hkX/Pngtree-recommended-gesture-business-people-do-87455.png";
    const userName = "User Name";
    const location = "New York, USA";

    const comments = [
      {
        id: "1",
        photo:
          "https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599",
        userName: "Rohit Shekhar Singh",
        content:
          "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ",
        createdAt: 1543858000000
      }
    ];

    return (
      <div style={{ margin: "0 auto", width: "100%" }}>
        <UserProfile
          photo={photo}
          userName={userName}
          location={location}
          initialLikesCount={0}
          initialFollowingCount={0}
          initialFollowersCount={1}
          initialComments={comments}
        />
        <br></br>
        <br></br>
        <br></br>
        {/* &nbsp;&nbsp;&nbsp;&nbsp; Recommendations */}
        <Recommend></Recommend>
        &nbsp;&nbsp;&nbsp;&nbsp; Rate
        <Rate user = {props.user} SetRating = {props.SetRating} addRating = {props.addRating}></Rate>
      </div>
    );
  }

const mapDispatchToProps = (dispatch) => {
  return {
    addRating: (movieRating) => {
      dispatch(addRating(movieRating))
    },
    SetRating: (user) => {
      dispatch(SetRating(user))
    }
  }
}


function mapStateToProps(state) {
  return { user:state.UserReducer};
}

export default connect(mapStateToProps,mapDispatchToProps)(User);
