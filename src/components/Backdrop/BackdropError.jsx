import { CloseOutlined, NotificationImportant } from '@material-ui/icons';
import { actionError } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';

const BackdropError = ({ isError, errMessage }) => {
	const dispatch = useDispatch();

	return (
		<div className="backdrop" iserror={isError}>
			<div className="container">
				<div className="wrapperError">
					<div className="top">
						<CloseOutlined className="icon" onClick={() => actionError(dispatch, 'out')} />
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
