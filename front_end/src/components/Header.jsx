import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
	const [textInput, setTextInput] = useState('');
	const [episode, setEpisode] = useState('');
	const [episodeLink, setEpisodeLink] = useState(null);

	const onChange = (e) => {
		setTextInput(e.target.value);
	};

	const onSubmit = () => {
		if (textInput.match(/nts\.live\/shows.*/g)) {
			setEpisode(textInput);
			setTextInput('');
		}
	};

	const devEpisode = () => {
		setEpisode(
			'https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023'
		);
		console.log('devEpisode called', episode);
		setTextInput('');
	};

	const deleteEpisode = () => {
		fetch('http://localhost:3001/episode/devepisode', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		});
		setEpisode('');
	};

	useEffect(() => {
		if (episode) {
			setEpisodeLink(
				<Link id="dummylink" to="/episode" state={{ episode }}></Link>
			);
		}
	}, [episode]);

	useEffect(() => {
		if (episodeLink) document.getElementById('dummylink').click();
	}, [episodeLink]);

	return (
		<div className="header">
			<Link to="/">
				<h1>NTSu</h1>
			</Link>

			{episodeLink}

			<div className="search">
				<input type="text" onChange={onChange} value={textInput} />

				<span onClick={() => devEpisode()}>🔍</span>
			</div>

			<Link to="/user"> 👤 </Link>
			<Link to="/login">Login</Link>
		</div>
	);
}

export default Header;
