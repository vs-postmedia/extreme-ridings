import React from 'react';
import './RidingCard.css';

import locator from './images/test-04.png';

const RidingCard = (props) => {
	return (
		<li className="riding-card">
			<header>
				<h3>Kamloops—Thompson—Cariboo</h3>
				<p className="subhead">B.C.</p>
			</header>
			
			<div className="copy">
				<div className="gfx">
					<p className="percent">35%</p>
					<img className="map" src={locator} alt="locator map"/>
				</div>
				<div>
					<p className="variable-description">spend over 30% of their after-tax income on housing.</p>
				
				<p className="subhead">Vote history</p>
				<div className="eln-results">	
					<div className="swatch liberal"></div>
					<p className="eln-year">’15</p>
					<div className="swatch conservative"></div>
					<p className="eln-year">’11</p>
					<div className="swatch conservative"></div>
					<p className="eln-year">’08</p>
					<div className="swatch ndp"></div>
					<p className="eln-year">’06</p>
				</div>
				</div>
			</div>
		</li>
	)
}

export default RidingCard;

// <img className="map" src="https://via.placeholder.com/150x150" />