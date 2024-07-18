import { jwtVerify, SignJWT } from "jose";
const jwtConfig = {
  secret: new TextEncoder().encode("zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI"),
  expireDate: "1d",
  algo: { alg: "HS256" },
};
export const encodeToken = async (userId) => {
  //generate token
  const token = await new SignJWT({
    //userId is string
    id: userId
   })
   .setExpirationTime(jwtConfig.expireDate)
   .setProtectedHeader(jwtConfig.algo)
   .sign(jwtConfig.secret);
  
  return token  
};
export const decodeToken = async (token) => {
  try {
    // verify token
    const { payload } = await jwtVerify(
      token,
      jwtConfig.secret
    );
    return payload
  } catch (e) {
    // token verification failed
    console.log("Token is invalid",e);
  }
};
export const isAuthenticated = async () => {
  const token = localStorage.getItem("jwt-token");
  if (!token) return { status: false, id: null };
  const verifyToken = await decodeToken(token);
  if (!verifyToken) return { status: false, id: null };
  return { status: true, id: verifyToken.id };
};
export const getUserId = async (token) => {
  if (!token) return null;
  const data = await decodeToken(token);
  return data?.id;
};
