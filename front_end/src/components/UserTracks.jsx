import { useState } from "react";
import { useEffect } from "react";
import fetchUserTracks from "../api/fetchUserTracks";
import Tracklist from "./Tracklist";

function UserTracks({ user, currentPage }) {
  const [userTracks, setUserTracks] = useState([]);

  useEffect(() => {
    if (currentPage === "user")
      fetchUserTracks(user).then((data) => {
        console.log("fetching tracks", data);
        setUserTracks(data);
        console.log(data);
      });
  }, [currentPage, user]);

  return <Tracklist tracks={userTracks} user={user} />;
}

export default UserTracks;
