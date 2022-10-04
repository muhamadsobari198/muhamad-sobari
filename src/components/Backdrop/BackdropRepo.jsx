import { CloseOutlined } from '@material-ui/icons';
import Profile from '../Profile/Profile';
import RepoList from '../RepoList/RepoList';

const BackdropRepo = ({ isOpen, user, isModal, repos }) => {
	return (
		<div className="backdrop" isopen={isOpen}>
			<div className="container">
				<div className="wrapperRepo">
					<div className="top">
						<CloseOutlined className="icon" onClick={() => isModal('out')} />
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
