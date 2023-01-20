import '../Home.css';

import PageHeader from '../components/PageHeader';

function Home() {
	return (
		<div>
			<PageHeader />

			{/* {currentPage === 'user' ? (
				<div id="user">
					<UserTracks user={user} currentPage={currentPage} />
				</div>
			) : null} */}
		</div>
	);
}

export default Home;
