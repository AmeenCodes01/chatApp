import JWT from "expo-jwt";
import {JWT_CONFIG} from "../config/auth";

export const validateToken = (token: string) => {
  const secretKey = JWT_CONFIG.secret;
  //   const options = {
  //     expiresIn: "1h", // Token expiration time
  //   };
  console.log(secretKey, "secret Key");
  const data = JWT.decode(token, secretKey as string);
  console.log(data, "data");
  return data;
};

// module.exports = {
//   generateToken,
// };
