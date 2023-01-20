import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import { createContext, useState } from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import EpisodePage from './pages/EpisodePage';
import UserPage from './pages/UserPage';

export const UserContext = createContext('');

function App() {
	const [user, setUser] = useState(null);
	// const [episodeData, setEpisodeData] = useState({});
	// const [episode, setEpisode] = useState('');
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [user, setUser] = useState({});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/episode" element={<EpisodePage />} />
					<Route path="/user" element={<UserPage />} />
				</Routes>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
