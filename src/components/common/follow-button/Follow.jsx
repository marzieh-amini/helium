import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import { nanoid } from "@reduxjs/toolkit";
import {
  selectUserFollower,
  useAddNewFollowerMutation,
  useDeleteFollowerMutation,
} from "../../../redux/reducers/followersSlice";
import { useState } from "react";
import { selectUser } from "../../../redux/reducers/authUserSlice";

const Follow = ({ authorId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);

//get info user is login
  const userLogin = useSelector(selectUser);

  //if user following author --> get data from cach
  const userFollower = useSelector((state) =>
    selectUserFollower(state, userLogin.id, authorId)
  );

  //hook following author
  const [following] = useAddNewFollowerMutation();

  //hook for unFollow author
  const [unFollow] = useDeleteFollowerMutation();

  
  const followingAuthor = async () => {
    //check user is login => false --->redirect to "signIn"
    if (Object.keys(userLogin).length === 0) {
    //set state for redirect user to this page after login
      navigate("/signIn", { state: { from: `${location.pathname}` } });
    } else {
      //user cann't following himself
      if (authorId !== userLogin.id) {
        const initialFollow = {
          id: nanoid(),
          userId: userLogin.id,
          authorId,
        };
        //send request to server
        await following(initialFollow).unwrap();
      } else {
        //show alert to user 
        setModalOpen(true);
      }
    }
  };
  const unFollowAuthor = async () => {
    await unFollow(userFollower.id);
  };
  return (
    <>
      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          title="واقعا میخوای خودتو دنبال کنی"
          description=""
        />
      )}
      {userFollower ? (
        <button onClick={unFollowAuthor} className="btn btn__followers">
          دنبال شده
        </button>
      ) : (
        <button onClick={followingAuthor} className="btn btn__follow">
          دنبال کردن
        </button>
      )}
    </>
  );
};

export default Follow;
