import './App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import Tracklist from './components/Tracklist';
import PageHeader from './components/PageHeader';
import Login from './components/Login';
import Signup from './components/Signup';

import fetchEpisode from './api/fetchEpisode';
import populateEpisode from './api/populateEpisode';
import UserTracks from './components/UserTracks';

function App() {
	const [currentPage, setCurrentPage] = useState('');
	const [episodeData, setEpisodeData] = useState({});
	const [episode, setEpisode] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		if (episode) {
			fetchEpisode(episode)
				.then((data) => {
					return populateEpisode(data);
				})
				.then((data) => {
					setEpisodeData(data);
				});
		}
	}, [episode]);

	return (
		<div>
			<Header
				isLoggedIn={isLoggedIn}
				setCurrentPage={setCurrentPage}
				setIsLoggedIn={setIsLoggedIn}
				setEpisode={setEpisode}
				user={user}
			/>

			<Link to="/login">Login</Link>

			<PageHeader currentPage={currentPage} />

			{currentPage === 'episode' ? (
				<div id="episode">
					<img
						className="episode-image"
						src={episodeData.episodeImage}
						alt=""
					></img>
					<h2>{episodeData.episodeTitle}</h2>{' '}
					<Tracklist tracks={episodeData.allTracks} user={user} />
				</div>
			) : null}

			{currentPage === 'login' ? (
				<div id="login">
					<Login
						setIsLoggedIn={setIsLoggedIn}
						setUser={setUser}
						episodeData={episodeData}
					/>
					<Signup
						setIsLoggedIn={setIsLoggedIn}
						setUser={setUser}
						episodeData={episodeData}
					/>
				</div>
			) : null}

			{currentPage === 'user' ? (
				<div id="user">
					<UserTracks user={user} currentPage={currentPage} />
				</div>
			) : null}
		</div>
	);
}

export default App;
