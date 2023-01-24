import React from "react";
import UserTracks from "../components/UserTracks";
import { useContext } from "react";
import { Context } from "../App";
import PageHeader from "../components/PageHeader";

function UserPage() {
  const { user } = useContext(Context);

  return (
    <div id="user">
      <PageHeader currentPage={"UserPage"} />
      <UserTracks user={user} />
      <PageHeader currentPage={"UserEpisodes"} />
    </div>
  );
}

export default UserPage;
