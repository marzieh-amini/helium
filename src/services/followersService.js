import axios from "axios";

const SERVER_URL = "http://localhost:9000";

//@desc Get all followers
//@routes GET http://localhost:9000/followers
export const getAllFollowersService = () => {
    const url = `${SERVER_URL}/followers`;
    return axios.get(url);
  };

//@desc Create New followers
//@routes POST http://localhost:9000/followers
export const  createFollowersService = (data)=>{
    const url = `${SERVER_URL}/followers`;
    return axios.post(url,data)
  }

//@desc delete followers
//@routes POST http://localhost:9000/followers
export const  removeFollowersService = (id)=>{
  const url = `${SERVER_URL}/followers/${id}`;
  return axios.delete(url)
}