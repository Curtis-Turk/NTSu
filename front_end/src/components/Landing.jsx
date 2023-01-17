export default function Landing({ episodeData }) {
  if (Object.keys(episodeData).length === 0) {
    return <h2>Enter a NTS episode to view tracks</h2>;
  } else if (episodeData.login) {
    return <h2>Login or Signup</h2>;
  }
}
