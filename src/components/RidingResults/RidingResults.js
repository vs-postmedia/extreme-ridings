import React, { Fragment } from 'react';
import RidingCard from '../RidingCard/RidingCard';
import './RidingResults.css';

const cards = [1,2,3];
const RidingResults = (props) => {
	return (
		<Fragment>
			<p className="text">Lorem ipsum text about party platform</p>

			<ul className="ridings-container">
				<p className="sub-head">Ridings most affected</p>

				{ 
					cards.map(card => {
						return <RidingCard key={`affected-${card}`}></RidingCard>
					})
				}
			</ul>
			<ul className="ridings-container">
				<p className="sub-head">Ridings least affected</p>
				{ 
					cards.map(card => {
						return <RidingCard key={`unaffected-${card}`}></RidingCard>
					})
				}
			</ul>
		</Fragment>
	)
}

export default RidingResults