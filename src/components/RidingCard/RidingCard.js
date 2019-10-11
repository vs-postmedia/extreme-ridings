import React, { Fragment } from 'react';
import Images from './Images';
import './RidingCard.css';



const RidingCard = (props) => {
	let fullResults;
	const data = props.data;

	const voteHistory = data.eln_results.split(',');
	const locator = Images.filter(d => d.id === data.riding_id);
	const stat = data.variable_pct ? parseFloat(data.variable_pct).toFixed(1) + '%' : data.variable_total;

	if (voteHistory[2] !== 'NA') {
		fullResults = (
			<Fragment>
				<div className={`swatch ${voteHistory[2]}`}></div>
				<p className="eln-year">’11</p>
				<div className={`swatch ${voteHistory[1]}`}></div>
				<p className="eln-year">’08</p>
				<div className={`swatch ${voteHistory[0]}`}></div>
				<p className="eln-year">’06</p>
			</Fragment>
		)
	} else {
		fullResults = <p className="eln-year created-in"> (created in 2012)</p>
	}

	return (
		<li className="riding-card">
			<header>
				<h3>{data.riding_name}</h3>
				<p className="subhead">B.C.</p>
			</header>
			
			<div className="gfx">
				<p className="percent">{stat}</p>
				<img className="map" key={data.riding_id} src={locator[0].url} alt="locator map"/>
			</div>
			<div className="copy">
				<p className="variable-description">{data.variable_desc}</p>
				<p className="detail">{`Average age: ${data.avg_age}`}</p>
				<p className="detail">{`Median after-tax income: $${numberWithCommas(data.med_inc_at)}`}</p>
			</div>
				
				
				<div className="eln-results">	
					<p className="subhead">Vote history</p>
					<div className={`swatch ${voteHistory[3]}`}></div>
					<p className="eln-year">’15</p>
					{ fullResults } 
					
				</div>
		</li>
	)
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default RidingCard;
