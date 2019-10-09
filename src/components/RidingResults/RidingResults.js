import React, { Fragment } from 'react';
import Slider from 'react-slick';
import RidingCard from '../RidingCard/RidingCard';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RidingResults.css';


const RidingResults = (props) => {
	const settings = {
		// centerMode: false,
		// centerPadding: '10px',
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					centerPadding: '30px',
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
    };

    const highValues = props.ridingData.filter(d => d.high_value === 'TRUE');
	const lowValues = props.ridingData.filter(d => d.high_value === 'FALSE');

	return (
		<Fragment>
			<p className="text">{props.policyCopy}</p>

			<p className="sub-head">Ridings that could see the most impact</p>
			<Slider className="ridings-container" {...settings}>
				{ 
					highValues.map(card => {
						return <RidingCard key={`affected-${card.riding_id}`} data={card}></RidingCard>
					})
				}
			</Slider>

			<p className="sub-head">Ridings that could see the least impact</p>
			<Slider className="ridings-container" {...settings}>
				
				{ 
					lowValues.map(card => {
						return <RidingCard key={`unaffected-${card.riding_id}`} data={card}></RidingCard>
					})
				}
			</Slider>
		</Fragment>
	)
}

export default RidingResults