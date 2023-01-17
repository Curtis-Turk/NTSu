import { useState } from "react";

function Login({ episodeData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    console.log("Attempting to fetch login");
    const response = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      body: { email, password },
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
    // Handle successful login here
    console.log(response);
  };

  if (episodeData.login) {
    return (
      <form onSubmit={loginUser}>
        <div>Login</div>
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
}
export default Login;

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState({});

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <p>Welcome, {user.email}</p>
//           <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
//           <Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
//         </div>
//       )}
//     </div>
//   );
// }
