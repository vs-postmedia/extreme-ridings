import React from 'react';
import './RidingCard.css';

const RidingCard = (props) => {
	return (
		<li className="riding-card">
			<header>
				<h3>Kamloops—Thompson—Cariboo</h3>
			</header>
			<div className="map">
				<p className="subhead">B.C.</p>
			</div>
			
			<div className="copy">
				<p className="percent">35%</p>
				<p className="variable-description">spend over 30% of their after-tax income on housing.</p>
			</div>
			<div className="eln-results">
				<p className="subhead">Vote history</p>
				<div className="swatch liberal"></div>
				<p className="eln-year">’15</p>
				<div className="swatch conservative"></div>
				<p className="eln-year">’11</p>
				<div className="swatch conservative"></div>
				<p className="eln-year">’08</p>
				<div className="swatch ndp"></div>
				<p className="eln-year">’06</p>
			</div>
		</li>
	)
}

export default RidingCard;

// <img src="https://via.placeholder.com/125x75" />