import Login from '../components/Login';
import PageHeader from '../components/PageHeader';
import Signup from '../components/Signup';

function LoginPage() {
	return (
		<div id="login">
			<PageHeader currentPage={'LoginPage'} />
			<Login />
			<Signup />
		</div>
	);
}

export default LoginPage;
