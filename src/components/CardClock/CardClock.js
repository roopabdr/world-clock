import React from 'react';
import './CardClock.css';

const CardClock = (props) => {
	return (
		<div className='card'>
			<h3>{ props.location }</h3>
		</div>
	);
}

export default CardClock;