import {
	getRepoStart,
	getRepoSuccess,
	getRepoFailure,
	getUserStart,
	getUserSuccess,
	getUserFailure,
	isOpen,
	isError
} from './githubReducer';
import axios from 'axios';

const API_GITHUB = 'https://api.github.com/users';

/* -------------------------------------------------------------------------- */
/*                               Get User                                     */
/* -------------------------------------------------------------------------- */

const getUser = async (dispatch, username) => {
	dispatch(getUserStart());
	try {
		const res = await axios.get(`${API_GITHUB}/${username}`);
		dispatch(getUserSuccess(res.data));
		dispatch(isOpen('in'));
	} catch (e) {
		const message = e.response && e.response.data ? e.response.data.message : e.message;
		dispatch(isError('yes'));
		dispatch(getUserFailure(message));
	}
};

/* -------------------------------------------------------------------------- */
/*                               Get Repositories                              */
/* -------------------------------------------------------------------------- */
const getRepo = async (dispatch, username) => {
	dispatch(getRepoStart());
	try {
		const res = await axios.get(`${API_GITHUB}/${username}/repos`);
		dispatch(getRepoSuccess(res.data));
		dispatch(isOpen('in'));
	} catch (e) {
		const message = e.response && e.response.data ? e.response.data.message : e.message;
		dispatch(isError('yes'));
		dispatch(getRepoFailure(message));
	}
};

const actionError = (dispatch, val) => {
	dispatch(isError(val));
};

const actionOpen = (dispatch, val) => {
	dispatch(isOpen(val));
};

export { getRepo, getUser, actionError, actionOpen };
