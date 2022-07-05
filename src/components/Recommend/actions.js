import axios from "axios";
// export const SEND_RATING = "SEND_RATING";

export const sendRatings = (rating) => {
  console.log("calleddd");
  return async (dispatch) => {
    try {
      const response = await axios({
        method:"get",
        url:"http://localhost:8000",
        params: rating,

    });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
};
