import { useEffect, useContext, useState } from 'react';
import { useFetcher, useLocation, useNavigate } from 'react-router-dom';
import bandcampIcon from '../images/bandcampIcon.png';
import discogIcon from '../images/discogsIcon.png';
import youtubeIcon from '../images/youtubeIcon.png';
import fetchTrack from '../api/fetchTrack';
import saveTrack from '../api/saveTrack';
import SiteLink from './SiteLink';
import { Context } from '../App';
import removeTrack from '../api/removeTrack';

const Track = ({ track }) => {
	const [fetchedTrack, setFetchedTrack] = useState('');
	const [trackIsAdded, setTrackIsAdded] = useState(null);
	const [trackDisplayState, setTrackDisplayState] = useState('+');
	const { user } = useContext(Context);
	const location = useLocation();
	const navigate = useNavigate();

	const getLinks = async () => {
		setFetchedTrack(await fetchTrack(track));
	};

	const clickSaveTrack = () => {
		setTrackIsAdded(true);
		saveTrack(track, user).then((data) => {
			if (data.message === 'Auth Expired') {
				navigate('/login');
			}
		});
	};

	const clickRemoveTrack = () => {
		console.log('inside clickRemovTrack');
		setTrackIsAdded(false);
		removeTrack(track, user).then((data) => {
			if (data.message === 'Auth Expired') {
				navigate('/login');
			}
		});
	};

	useEffect(() => {
		setFetchedTrack(track);
	}, [track]);

	useEffect(() => {
		console.log(trackIsAdded, user.addedTracks.includes(fetchedTrack._id));
		if (trackIsAdded || user.addedTracks.includes(fetchedTrack._id)) {
			setTrackDisplayState('-');
		} else {
			setTrackDisplayState('+');
		}
	}, [trackIsAdded, user.addedTracks, fetchedTrack._id]);

	const trackSaveOptions = () => {
		if (
			user &&
			location.pathname === '/episode' &&
			!user.addedTracks.includes(fetchedTrack._id)
		) {
			return (
				<div className="get_details" onClick={clickSaveTrack}>
					(not added) {trackDisplayState}
				</div>
			);
		} else if (user.addedTracks.includes(fetchedTrack._id)) {
			return (
				<div className="get_details" onClick={clickRemoveTrack}>
					(added) {trackDisplayState}
				</div>
			);
		}
	};

	return (
		<li>
			<div className="track_details" onClick={getLinks}>
				<div className="track_artist">{fetchedTrack.artist}</div>
				<div className="track_title">{fetchedTrack.title}</div>
			</div>
			<div className="track_options">
				<div className="get_details" onClick={getLinks}>
					&gt;
				</div>
				{trackSaveOptions()}
			</div>
			<div className="site_links">
				<SiteLink
					className={'bandcamp'}
					trackInfo={fetchedTrack.bandcampUrl}
					icon={bandcampIcon}
				/>
				<SiteLink
					className={'discogs'}
					trackInfo={fetchedTrack.discogsUrl}
					icon={discogIcon}
				/>
				<SiteLink
					className={'youtube'}
					trackInfo={fetchedTrack.youtubeUrl}
					icon={youtubeIcon}
				/>
			</div>
		</li>
	);
};
export default Track;
