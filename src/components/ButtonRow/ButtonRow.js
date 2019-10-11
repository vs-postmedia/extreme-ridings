import React from 'react';
import './ButtonRow.css';

// logos
import cpc from './logos-reduced/cpc.png';
import lpc from './logos-reduced/lpc.png';
import gpc from './logos-reduced/gpc.png';
import ndp from './logos-reduced/ndp.png';

const logoUrls = {
	cpc: cpc,
	gpc: gpc,
	lpc: lpc,
	ndp: ndp
};

const ButtonRow = (props) => {
	return (
		<div className="button-row">
		{
			props.buttons.map(d => {
				const id = d.toLowerCase();

				return <img src={logoUrls[id]}
					alt="party logo"
					key={id}
					id={id}
					className={props.currentButton === id ? 'selected' : ''}
					onClick={() => props.onClick(id)}/>
			})
		}
		</div>
	);
}

export default ButtonRow;