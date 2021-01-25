import {useState} from 'react';
import data from './data';

const Review = () => {

	const [index, setIndex] = useState(0);
	const {image, name, job, text} = data[index];

	const prevPerson = () => {
		index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
	}

	const nextPerson = () => {
		index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
	}

	const randomPerson = () => {
		let randomNumber = Math.floor(Math.random() * data.length);
		
		if(randomNumber === index){
			index === 0 ? setIndex(index + 1) : setIndex(index - 1);

		}else{
			setIndex(randomNumber);
		}

		console.log(index);
	}

	return (

		<div className="row">
			<div className="col-6 offset-3 text-center" style={{backgroundColor : 'white'}} >
				<img src={image} height="100" width="100" className="rounded-circle shadow mt-4" alt="alternative" />
				<h3>{name}</h3>
				<p>{job}</p>
				<p>{text}</p>
				<p>
					<button className="btn btn-info" onClick={prevPerson}>{'<'}</button>{' '}
					<button className="btn btn-info" onClick={nextPerson}>{'>'}</button>
				</p>
				<p>
					<button className="btn btn-outline-danger" onClick={randomPerson}>Surprise Me</button>
				</p>
			</div>
		</div>
	);
}

export default Review;