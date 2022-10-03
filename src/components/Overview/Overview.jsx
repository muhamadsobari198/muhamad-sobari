import './overview.css';
import { CheckCircle } from '@material-ui/icons';

const Overview = () => {
	return (
		<div className="overview">
			<div class="status">
				<CheckCircle className="icon" />
				<span>Works with GitHub API</span>
			</div>
			<h1 className="mb-4">List Repositories For a User</h1>
			<p className="mb-4">
				Lists public repositories for the specified user. How to use ?<br />
				Just enter your username in the side form
			</p>
			<a href="#" className="btn btn-primary rounded-pill">
				Get App Now
			</a>
		</div>
	);
};

export default Overview;
