import axios from "axios";
import { addRecommendations } from "../User/actions";
// export const SEND_RATING = "SEND_RATING";

export const sendRatings = (rating,name) => {
  return async (dispatch,getState) => {
    try {
      let formData = new FormData();
      formData.append("UserName", "Rohit");
      formData.append("UserNafme", "Rohit");
      formData.append("UserNamfe", "Rohit");

      // const user = getState().UserReducer.name;

      // console.log(user);
      // var a = Object.keys(rating);
      // a.map((aa)=>{
      //   console.log(aa,rating[aa]);
      //   formData.append(aa,rating[aa]);
      // });

      //   const response = await axios({
      //     method:"POST",
      //     url:"http://localhost:8000",
      //     body: formData,
      //      headers: {
      //         'Content-Type': 'multipart/form-data',
      //     }
      // });

      const response = await axios.post(
        `http://localhost:8000/${name}`,
        JSON.stringify(rating),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(addRecommendations(response.data.data));
    } catch (e) {
      console.log(e);
    }
  };
};

