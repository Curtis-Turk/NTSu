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

  const trackSaveOptions = () => {
    if (
      user &&
      location.pathname === "/episode" &&
      !user.addedTracks.includes(track._id)
    ) {
      setUserOptionButton({ option: "+", function: clickSaveTrack });
    } else if (user.addedTracks.includes(track._id)) {
      setUserOptionButton({ option: "-", function: clickRemoveTrack });
    }
  };

  const clickSaveTrack = async () => {
    await saveTrack(track, user).then((data) => {
      if (data.message === "Auth Expired") navigate("/login");
      user.addedTracks = data.addedTracks;
    });
    trackSaveOptions();
  };

  const clickRemoveTrack = async () => {
    await removeTrack(track, user).then((data) => {
      if (data.message === "Auth Expired") {
        navigate("/login");
        user.addedTracks = data.addedTracks;
      }
    });
    trackSaveOptions();
  };

  return (
    <div
      className="get_details"
      onClick={
        userOptionButton.function ? userOptionButton.function : clickSaveTrack
      }
    >
      {userOptionButton.option ? userOptionButton.option : "+"}
    </div>
  );
}

export default TrackSaveButton;
