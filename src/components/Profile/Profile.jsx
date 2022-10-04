import {
	EmailOutlined,
	LinkOutlined,
	LocationOnOutlined,
} from '@material-ui/icons';


const Profile = ({ user }) => {
	return (
		<>
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
					{user.location ? user.location : '-'}
				</span>
				<span className="email">
					<EmailOutlined className="icon" />
					{user.email ? user.email : '-'}
				</span>
				<span className="blog">
					<LinkOutlined className="icon" />
					{user.blog ? user.blog : '-'}
				</span>
			</div>
		</>
	);
};

export default Profile;
