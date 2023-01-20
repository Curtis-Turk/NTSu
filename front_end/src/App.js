import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import EpisodePage from './pages/EpisodePage';

function App() {
	// const [episodeData, setEpisodeData] = useState({});
	// const [episode, setEpisode] = useState('');
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [user, setUser] = useState({});

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/episode" element={<EpisodePage />} />
			</Routes>
		</Router>
	);
}

export default App;
