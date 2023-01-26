import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import saveTrack from "../api/saveTrack";
import removeTrack from "../api/removeTrack";
import { Context } from "../App";

function TrackSaveButton({ track }) {
  const [userOptionButton, setUserOptionButton] = useState({
    option: "",
    function: null,
  });

  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  const clickSaveTrack = async () => {
    await saveTrack(track, user).then((data) => {
      if (data.message === "Auth Expired") navigate("/login");
      user.addedTracks = data.addedTracks;
    });
    setUserOptionButton({ option: "-", function: clickRemoveTrack });
  };

  const clickRemoveTrack = async () => {
    await removeTrack(track, user).then((data) => {
      if (data.message === "Auth Expired") {
        navigate("/login");
        user.addedTracks = data.addedTracks;
      }
    });
    setUserOptionButton({ option: "+", function: clickSaveTrack });
  };

  return (
    <div
      className="get_details"
      onClick={
        userOptionButton.function
          ? userOptionButton.function
          : user &&
            !user.addedTracks.includes(track._id) &&
            location.pathname === "/episode"
          ? clickSaveTrack
          : user && user.addedTracks.includes(track._id)
          ? clickRemoveTrack
          : null
      }
    >
      {userOptionButton.option
        ? userOptionButton.option
        : user &&
          !user.addedTracks.includes(track._id) &&
          location.pathname === "/episode"
        ? "+"
        : user && user.addedTracks.includes(track._id)
        ? "-"
        : null}
    </div>
  );
}

export default TrackSaveButton;
