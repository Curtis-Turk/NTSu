import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Scraper from './api/Scraper';
import Tracklist from './components/Tracklist';
import Landing from './components/Landing';

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

			<Landing episode={episode} />
			<h2>{episodeData.episodeTitle}</h2>
			<Tracklist tracks={episodeData.allTracks} />
		</div>
	);
}

export default App;
