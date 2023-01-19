import { useState } from "react";

function Signup({ setUser, setLoggedIn, episodeData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async (e) => {
    e.preventDefault();
    console.log("Attempting to fetch login");
    const response = await fetch("http://localhost:3001/user/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
    // Handle successful login here
    console.log(response);
  };

  if (episodeData.login) {
    return (
      <form onSubmit={signupUser}>
        <h3>Signup</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    );
  }
}

export default Signup;
