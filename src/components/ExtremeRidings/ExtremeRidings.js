import React, { Component, Fragment } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import ButtonRow from '../ButtonRow/ButtonRow';
import RidingResults from '../RidingResults/RidingResults';

export class ExtremeRidings extends Component {
	constructor(props) {
		super(props);

		this.buttonClickHandler = this.buttonClickHandler.bind(this);
		this.selectChangeHandler = this.selectChangeHandler.bind(this);
	}
	state = {
		currentCategory: null,
		currentData: null,
		currentParty: null,
		data: null
	}

	buttonClickHandler(id) {
		this.setState({
			currentParty: id
		});
	}

	componentDidMount() {
		this.setState({
			currentCategory: this.props.categories[0].value,
			currentParty: this.props.displayParty || 'liberals'
		});
	}

	selectChangeHandler(val) {
		this.setState({
			currentCategory: val.value
		});
	}

	render() {
		return (
			<Fragment>
				<DropdownMenu 
					onChange={this.selectChangeHandler}
					options={this.props.categories}
				></DropdownMenu>
				<ButtonRow
					buttons={this.props.parties}
					onClick={this.buttonClickHandler}>
				</ButtonRow>
				<RidingResults
					data={this.props.currentData}>
				</RidingResults>
			</Fragment>
		);
	}
}

export default ExtremeRidings;