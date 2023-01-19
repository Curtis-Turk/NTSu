import { useState } from "react";

function Login({ setUser, setIsLoggedIn, episodeData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    console.log("Attempting to fetch login");
    const response = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
    // Handle successful login here
    console.log(response);
    if (response.message === "Auth successful") {
      setUser({ username: email, token: response.token });
      setIsLoggedIn(true);
    }
  };

  return (
    <form onSubmit={loginUser}>
      <h3>Login</h3>
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

      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
