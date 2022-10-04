import { CloseOutlined, NotificationImportant } from '@material-ui/icons';

const BackdropError = ({ isError, errMessage, isModalError }) => {
	return (
		<div className="backdrop" iserror={isError}>
			<div className="container">
				<div className="wrapperError">
					<div className="top">
						<CloseOutlined className="icon" onClick={() => isModalError('not')} />
					</div>
					<div className="bottom">
						<NotificationImportant className="icon" />
						{errMessage}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BackdropError;
