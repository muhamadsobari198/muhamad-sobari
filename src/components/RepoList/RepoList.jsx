const RepoList = ({ repo, no }) => {
	return (
		<div className="cardRepo">
			<div>
				<a href={repo.html_url} target="_blank">
					<h6>
						{++no}. {repo.name}
					</h6>
				</a>
				<span className="description">
					{repo.description?.substr(0, 30)}
                    {repo.description?.length > 30 && '...'}
				</span>
			</div>
			<div>
				<span className="lang">{repo.language}</span>
			</div>
		</div>
	);
};

export default RepoList;
