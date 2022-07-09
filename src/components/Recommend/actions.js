import axios from "axios";
// export const SEND_RATING = "SEND_RATING";

export const sendRatings = (rating) => {
  console.log(rating);
  return async (dispatch) => {
    try {

      
      let formData = new FormData();
      formData.append("UserName", "Rohit");
      formData.append("UserNafme", "Rohit");
      formData.append("UserNamfe", "Rohit");
      
      
      // var a = Object.keys(rating);
      // a.map((aa)=>{
      //   console.log(aa,rating[aa]);
      //   formData.append(aa,rating[aa]);
      // });

      console.log(formData);

    //   const response = await axios({
    //     method:"POST",
    //     url:"http://localhost:8000",
    //     body: formData,
    //      headers: {
    //         'Content-Type': 'multipart/form-data',
    //     }
    // });

     const response = await axios.post('http://localhost:8000', JSON.stringify(rating), {
    headers: {
      "Content-Type": "application/json",
    }
  });

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
};
