import React from 'react';
import './RidingCard.css';

import locator from './images/test-01.png';

const RidingCard = (props) => {
	const data = props.data;

	const stat = data.variable_pct ? parseFloat(data.variable_pct).toFixed(1) + '%' : data.variable_total;

	data.avg_age = 48;
	data.avg_family_size = 2.4;

	return (
		<li className="riding-card">
			<header>
				<h3>{data.riding_name}</h3>
				<p className="subhead">B.C.</p>
			</header>
			
			<div className="gfx">
				<p className="percent">{stat}</p>
				<img className="map" src={locator} alt="locator map"/>
			</div>
			<div className="copy">
				<p className="variable-description">{data.variable_desc}</p>
				<p className="detail"><strong>Average...</strong></p>
				<p className="detail">{`Age: ${data.avg_age}`}</p>
				<p className="detail">{`Family size: ${data.avg_family_size}`}</p>
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

// <img className="map" src="https://via.placeholder.com/150x150" />