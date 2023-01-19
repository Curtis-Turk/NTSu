import { useState } from "react";
import { useEffect } from "react";
import fetchUserTracks from "../api/fetchUserTracks";

function UserTracks({ user, currentPage }) {
  console.log(user);
  const [userTracks, setUserTracks] = useState("");

  useEffect(() => {
    if (currentPage === "user") fetchUserTracks(user);
    // .then((data) => {
    //   setUserTracks(data);
    //   console.log(data);
    // });
  }, [currentPage, user]);

  return <div>{userTracks}</div>;
}

export default UserTracks;
