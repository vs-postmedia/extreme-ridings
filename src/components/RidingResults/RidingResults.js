import React, { Fragment } from 'react';
import Slider from 'react-slick';
import RidingCard from '../RidingCard/RidingCard';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './RidingResults.css';

const cards = [1,2,3];
const RidingResults = (props) => {
	const settings = {
		centerMode: true,
		centerPadding: '30px',
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
    };

	return (
		<Fragment>
			<p className="text">Copy about party platform. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

			<p className="sub-head">Ridings most affected</p>
			<Slider className="ridings-container" {...settings}>
				{ 
					cards.map(card => {
						return <RidingCard key={`affected-${card}`}></RidingCard>
					})
				}
			</Slider>

			<p className="sub-head">Ridings least affected</p>
			<Slider className="ridings-container" {...settings}>
				
				{ 
					cards.map(card => {
						return <RidingCard key={`unaffected-${card}`}></RidingCard>
					})
				}
			</Slider>
		</Fragment>
	)
}

export default RidingResults