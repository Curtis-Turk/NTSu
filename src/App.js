import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Scraper from './api/Scraper';
import Tracklist from './components/Tracklist';

function App() {
	const [episode, setEpisode] = useState('');
	const [episodeData, setEpisodeData] = useState([]);

	useEffect(() => {
		let fetchNts = async () => {
			const ntsData = await Scraper(episode);
			setEpisodeData(ntsData);
		};

		fetchNts();
	}, [episode]);

	return (
		<div>
			<Header setEpisode={setEpisode} />

			<h2>Enter a NTS episode to view tracks</h2>
			<p>
				try this -
				https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023
			</p>
			<h3>{episodeData.episodeTitle}</h3>
			<Tracklist tracks={episodeData.allTracks} />
		</div>
	);
}

export default App;
