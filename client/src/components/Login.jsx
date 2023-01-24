import { useState, useContext } from "react";
import { UserContext } from "../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const { setUser } = useContext(UserContext);

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

    if (response.message === "Sign in successful") {
      setUser({
        username: email,
        token: response.token,
        addedTracks: response.addedTracks,
      });
    }
    setLoginMessage(response.message);
  };

  return (
    <form onSubmit={loginUser}>
      <h3>Login</h3>
      {loginMessage ? <h4> {loginMessage} </h4> : null}
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
