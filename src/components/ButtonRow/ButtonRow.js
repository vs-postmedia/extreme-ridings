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
					className={props.currentButton === id ? 'selected' : ''}
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