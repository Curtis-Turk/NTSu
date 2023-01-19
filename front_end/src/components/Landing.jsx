import { useState, useEffect } from "react";

export default function Landing({ currentPage }) {
  const [message, setMessage] = useState("Enter a NTS episode to view tracks");

  useEffect(() => {
    if (!currentPage) {
      setMessage("Enter a NTS episode to view tracks");
    } else if (currentPage === "login") {
      setMessage("Login or Signup");
    } else setMessage("");
  }, [currentPage]);

  if (message) return <h2>{message}</h2>;
}
