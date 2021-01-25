import Review from './Review';

const App = () => {
	return (
			<div className="container-fluid">
				<div className="d-flex justify-content-center">
					<div className="mt-4">
						<h1>Our Reviews</h1>
						<hr className="bg-primary" style={{height : '5px'}}/>
					</div>
				</div>
				<Review />
				
			</div>
		)
}

export default App;