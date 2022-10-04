import { createSlice } from '@reduxjs/toolkit';

const githubReducer = createSlice({
	name: 'github',
	initialState: {
		isFetching: false,
		user: {},
		repositories: [],
		isError: 'not',
		isOpen: 'out',
		errMessage: ''
	},
	reducers: {
		/* -------------------------------------------------------------------------- */
		/*                                Get User                                    */
		/* -------------------------------------------------------------------------- */
		getUserStart(state, action) {
			state.isFetching = true;
			state.errMessage = '';
			state.isError = 'not';
		},
		getUserSuccess(state, action) {
			state.isFetching = false;
			state.user = action.payload;
			state.errMessage = '';
			state.isError = 'not';
		},
		getUserFailure(state, action) {
			state.isFetching = false;
			state.errMessage = action.payload;
			state.isError = 'yes';
		},

		/* -------------------------------------------------------------------------- */
		/*                              Get Repositories                              */
		/* -------------------------------------------------------------------------- */

		getRepoStart(state, action) {
			state.isFetching = true;
			state.isError = 'not';
			state.errMessage = '';
		},
		getRepoSuccess(state, action) {
			state.isFetching = false;
			state.repositories = action.payload;
			state.errMessage = '';
			state.isError = 'not';
		},
		getRepoFailure(state, action) {
			state.isFetching = false;
			state.errMessage = action.payload;
			state.isError = 'yes';
		},

		/* -------------------------------------------------------------------------- */
		/*                                   Others                                   */
		/* -------------------------------------------------------------------------- */
		isError(state, action) {
			state.isFetching = false;
			state.isError = action.payload;
		},
		isOpen(state, action) {
			state.isFetching = false;
			state.isOpen = action.payload;
		}
	}
});
export const {
	getUserStart,
	getUserSuccess,
	getUserFailure,
	getRepoStart,
	getRepoSuccess,
	getRepoFailure,
	isError,
	isOpen
} = githubReducer.actions;

export default githubReducer.reducer;
