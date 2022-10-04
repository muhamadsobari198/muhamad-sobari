import { CloseOutlined } from '@material-ui/icons';
import Profile from '../Profile/Profile';
import RepoList from '../RepoList/RepoList';
import { useDispatch } from 'react-redux';
import { actionOpen } from '../../redux/apiCalls';

const BackdropRepo = ({ isOpen, user, repos }) => {
	const dispatch = useDispatch();

	return (
		<div className="backdrop" isopen={isOpen}>
			<div className="container">
				<div className="wrapperRepo">
					<div className="top">
						<CloseOutlined className="icon" onClick={() => actionOpen(dispatch, 'out')} />
					</div>
					<div className="bottom">
						<div className="account">
							<Profile user={user} />
						</div>
						<div className="repositories">
							<h4 className="topTitle"> List repositories : </h4>
							<div className="bottom">
								{repos.map((item, i) => {
									return <RepoList repo={item} no={i} key={i} />;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BackdropRepo;
