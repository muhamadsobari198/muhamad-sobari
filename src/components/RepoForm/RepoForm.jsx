import './repoform.css';
import { AccountCircleOutlined } from '@material-ui/icons';
import { useState } from 'react';
import axios from 'axios';

import BackdropRepo from './../Backdrop/BackdropRepo';
import BackdropError from './../Backdrop/BackdropError';

const RepoForm = () => {
	const [ isFetching, setIsFetching ] = useState(false);
	const [ isOpen, setIsOpen ] = useState('out');
	const [ isError, setIsError ] = useState('not');
	const [ errMessage, setErrMessage ] = useState('');
	const [ username, setUsername ] = useState();
	const [ user, setUser ] = useState({});
	const [ repos, setRepos ] = useState([]);

	const handleClick = async (e) => {
		e.preventDefault();

		setIsFetching(true);

		try {
			const user = await axios.get(`${API_GITHUB}/${username}`);
			const repos = await axios.get(`${API_GITHUB}/${username}/repos`);

			setIsFetching(false);
			setUser(user.data);
			setRepos(repos.data);
			isModal('in');
		} catch (e) {
			setIsFetching(false);

			const message = e.response && e.response.data ? e.response.data.message : e.message;

			setErrMessage(message);
			isModalError('yes');
		}
	};

	const isModal = (v) => {
		setIsOpen(v);
	};

	const isModalError = (v) => {
		setIsError(v);
	};

	return (
		<div className="repoForm">
			<div className="form">
				<div className="search">
					<AccountCircleOutlined className="icon" />
					<input
						type="text"
						placeholder="Type username here..."
						onChange={(e) => setUsername(e.target.value)}
					/>
					<button onClick={(e) => handleClick(e)} disabled={!username || isFetching}>
						Search
					</button>
				</div>
			</div>

			<BackdropRepo isOpen={isOpen} user={user} repos={repos} errMessage={errMessage} isModal={isModal} />
			<BackdropError isError={isError} errMessage={errMessage} isModalError={isModalError} />
		</div>
	);
};

export default RepoForm;

var API_GITHUB = 'https://api.github.com/users';
