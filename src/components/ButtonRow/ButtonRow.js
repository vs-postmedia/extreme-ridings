import React from 'react';
import './ButtonRow.css';

const ButtonRow = (props) => {
	return (
		<div className="button-row">
		{
			props.buttons.map(d => {
				const id = d.toLowerCase();
				return <button 
					key={id}
					id={id}
					onClick={() => props.onClick(id)}
				>
					{d}
				</button>
			})
		}
		</div>
	);
}

export default ButtonRow;