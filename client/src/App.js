import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import EpisodePage from './pages/EpisodePage';
import UserPage from './pages/UserPage';

export const Context = createContext();

function App() {
	const [user, setUser] = useState(null);
	const [episode, setEpisode] = useState('');

	return (
		<Context.Provider value={{ user, setUser, episode, setEpisode }}>
			<Router>
				<Header
					user={user}
					setUser={setUser}
					episode={episode}
					setEpisode={setEpisode}
				/>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/episode" element={<EpisodePage />} />
					<Route path="/user" element={<UserPage />} />
				</Routes>
			</Router>
		</Context.Provider>
	);
}

export default App;
