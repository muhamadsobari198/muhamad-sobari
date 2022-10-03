import './app.css';
import mainBg from './assets/img/bg_hero_1.svg';

import Overview from './components/Overview/Overview';
import RepoForm from './components/RepoForm/RepoForm';

const App = () => {
	return (
		<div className="page-section" style={{ backgroundImage: `url(${mainBg})` }}>
			<div className="container h-100">
				<div className="wrapper">
					<Overview />
					<RepoForm />
				</div>
			</div>
		</div>
	);
};

export default App;
