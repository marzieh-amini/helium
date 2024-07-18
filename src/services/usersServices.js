import axios from "axios";

const SERVER_URL = "http://localhost:9000";

//@desc Get all users
//@routes GET http://localhost:9000/users
export const getAllUsersService = () => {
    const url = `${SERVER_URL}/users`;
    return axios.get(url);
  };
  
  //@desc Get user With userId
  //@routes GET http://localhost:9000/users/:userId
  export const getUserService = (userId) => {
    const url = `${SERVER_URL}/users/${userId}`;
    return axios.get(url);
  };

  //@desc Create New user
//@routes POST http://localhost:9000/users
export const  createUserService = (contentUser)=>{
  const url = `${SERVER_URL}/users`;
  return axios.post(url,contentUser)
}

//@desc Update user
//@routes PUT http://localhost:9000/users
export const  updateUserService = (user)=>{
  const url = `${SERVER_URL}/users/${user.id}`;
  return axios.put(url,user)
}