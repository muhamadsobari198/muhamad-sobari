import './repoform.css';
import {
	AccountCircleOutlined,
	CloseOutlined,
	EmailOutlined,
	LinkOutlined,
	LocationOnOutlined
} from '@material-ui/icons';
import { useState } from 'react';
import axios from 'axios';

const RepoForm = () => {
	const [ isOpen, setIsOpen ] = useState('out');
	const [ username, setUsername ] = useState('muhamadsobari198');
	const [ user, setUser ] = useState({});
	const [ repos, setRepos ] = useState([]);

	const handleClick = async (e) => {
		e.preventDefault();

		const user = await axios.get(`${API_GITHUB}/${username}`);
		const repos = await axios.get(`${API_GITHUB}/${username}/repos`);
		console.log(repos);
		setUser(user.data);
		setRepos(repos.data);
		isModal('in');
	};

	const isModal = (v) => {
		setIsOpen(v);
	};

	return (
		<div>
			<div className="backdrop" isopen={isOpen}>
				<div className="container">
					<div className="wrapperRepo">
						<div className="top">
							<CloseOutlined className="icon" onClick={() => isModal('out')} />
						</div>
						<div className="bottom">
							<div className="account">
								<div className="profile">
									<img src={user.avatar_url} />
									<h3>{user.name}</h3>
									<h5>{user.login}</h5>
									<span className="bio">{user.bio}</span>
								</div>
								<hr />
								<div className="social">
									<span className="location">
										<LocationOnOutlined className="icon" />
										{user.location}
									</span>
									<span className="email">
										<EmailOutlined className="icon" />
										{user.email ? user.email : '-'}
									</span>
									<span className="blog">
										<LinkOutlined className="icon" />
										{user.blog}
									</span>
								</div>
							</div>
							<div className="repositories">
								<h4 className="topTitle"> List repositories : </h4>
								<div className="bottom">
									{repos.map((item, i) => {
										return (
											<div className="cardRepo" key={i}>
												<div>
													<a href={item.html_url} target="_blank">
														<h6>
															{++i}. {item.name}
														</h6>
													</a>
													<span className="description">{item.description?.substr(0, 30) } {(item.description?.length >30 ) && '...'}</span>
												</div>
												<div>
													<span className="lang">{item.language}</span>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="repoForm">
				<div className="form">
					<div className="search">
						<AccountCircleOutlined className="icon" />
						<input
							type="text"
							placeholder="Type username here..."
							onChange={(e) => setUsername(e.target.value)}
						/>
						<button onClick={(e) => handleClick(e)} disabled={!username}>
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RepoForm;

var API_GITHUB = 'https://api.github.com/users';
