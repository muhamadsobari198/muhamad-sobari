import './repoform.css';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const RepoForm = () => {
	return (
		<div className="repoForm">
			<div className="form">
				<div className="search">
					<AccountCircleOutlinedIcon className="icon" />
					<input type="text" placeholder="Type username here..." />
					<button>Search</button>
				</div>
			</div>
		</div>
	);
};

export default RepoForm;
