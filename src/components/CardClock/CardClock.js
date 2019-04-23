import React from 'react';
import spacetime from 'spacetime';
import './CardClock.css';

const CardClock = (props) => {
	return (
		<div className='w3-card-4 w3-padding-64'>
			<h3>{ spacetime.now().format('nice') }</h3>
			<h4>{ props.location }</h4>
		</div>
	);
}

export default CardClock;