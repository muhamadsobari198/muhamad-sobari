import './repoform.css';
import { AccountCircleOutlined } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

import BackdropRepo from './../Backdrop/BackdropRepo';
import BackdropError from './../Backdrop/BackdropError';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getRepo } from '../../redux/apiCalls';

const RepoForm = () => {
	const [ username, setUsername ] = useState();
	const dispatch = useDispatch();
	const github = useSelector((state) => state.github);

	const { user, repositories, isFetching, isError, errMessage, isOpen } = github;

	const handleClick = async (e) => {
		e.preventDefault();
		getUser(dispatch, username);
		getRepo(dispatch, username);
	};

	useEffect(
		() => {
			console.group('---------Check State---------');
			console.log(github);
			console.groupEnd();
		},
		[ github ]
	);

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

			<BackdropRepo isOpen={isOpen} user={user} repos={repositories} errMessage={errMessage} />
			<BackdropError isError={isError} errMessage={errMessage} />
		</div>
	);
};

export default RepoForm;

var API_GITHUB = 'https://api.github.com/users';
