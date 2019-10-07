import React from 'react';
import Select from 'react-select';
import './DropdownMenu.css';

const DropdownMenu = (props) => {
	return (
		<Select 
			className="dropdown"
			defaultValue={props.options[0]}
			onChange={props.onChange} 
			options={props.options}
			placeholder={props.placeholder}/>
	);
}

export default DropdownMenu;