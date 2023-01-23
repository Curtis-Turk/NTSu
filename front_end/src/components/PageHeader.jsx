import { useState, useEffect } from "react";

export default function PageHeader({ currentPage }) {
  const [message, setMessage] = useState("Enter a NTS episode to view tracks");

  useEffect(() => {
    if (!currentPage) {
      setMessage("Enter a NTS episode to view tracks");
    } else if (currentPage === "LoginPage") {
      setMessage("Login or Signup");
    } else if (currentPage === "UserPage") {
      setMessage("Saved tracks");
    } else if (currentPage === "UserEpisodes") {
      setMessage("Saved episodes");
    } else setMessage("");
  }, [currentPage]);

  if (message) return <h2>{message}</h2>;
}
