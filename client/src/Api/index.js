// import axios from "axios";

// export const axiosInstance = async (method, endpoint, payload) => {
//   try {
//     const response = await axios(
//       {
//         method,
//         url: endpoint,
//         data: payload,
//       },
//       {
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };
import axios from "axios";

export const axiosInstance = async (method, endpoint, payload) => {
  try {
    const response = await axios({
      method,             // Use the method passed as an argument (e.g., 'GET', 'POST')
      url: endpoint,     // Use the endpoint passed as an argument (e.g., '/api/users/get-current-user')
      data: payload,     // Use the payload passed as an argument (if applicable)
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Correct header field name 'Authorization'
      },
    });

    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw the error to be caught and handled elsewhere
  }
};
