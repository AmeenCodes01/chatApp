import JWT from "expo-jwt";
import {JWT_CONFIG} from "../config/auth";

export const generateToken = (payload: {
  username: string;
  password: string;
}) => {
  const secretKey = JWT_CONFIG.secret;
  //   const options = {
  //     expiresIn: "1h", // Token expiration time
  //   };
  console.log(secretKey, "secret Key");
  const token = JWT.encode(payload, secretKey as string);
  console.log("Inside JWT", token);

  return token;
};

// module.exports = {
//   generateToken,
// };
