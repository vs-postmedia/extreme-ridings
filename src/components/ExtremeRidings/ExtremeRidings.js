import React, { Component, Fragment } from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import ButtonRow from '../ButtonRow/ButtonRow';
import RidingResults from '../RidingResults/RidingResults';

import RidingData from '../../data/riding-data.json';
import PolicyData from '../../data/party-policy.json';

import './ExtremeRidings.css';
import map from './images/basemap.png';
import transitLayer from './images/transit-ridings.png';
import incomeLayer from './images/income-ridings.png';
import housingLayer from './images/housing-ridings.png';
import familiesLayer from './images/families-ridings.png';

const dataLayers = {
	transit: transitLayer,
	income: incomeLayer,
	housing: housingLayer,
	families: familiesLayer
};

export class ExtremeRidings extends Component {
	constructor(props) {
		super(props);

		this.buttonClickHandler = this.buttonClickHandler.bind(this);
		this.selectChangeHandler = this.selectChangeHandler.bind(this);
	}
	state = {
		currentCategory: null,
		currentData: [],
		currentMap: familiesLayer,
		currentParty: null,
		data: [],
		policyCopy: ''
	}

	buttonClickHandler(id) {
		this.setState({
			currentParty: id,
			policyCopy: this.setPolicyCopy(PolicyData, id, this.state.currentCategory)
		});
	}

	componentDidMount() {
		const currentParty = this.props.displayParty || 'lpc';
		const currentCategory = this.props.categories[0].value;

		this.setState({
			currentCategory: currentCategory,
			currentData: RidingData.filter(d => d.category === this.props.categories[0].value),
			currentParty: currentParty,
			data: RidingData,
			policyCopy: this.setPolicyCopy(PolicyData, currentParty, currentCategory)
		});
	}

	selectChangeHandler(val) {
		this.setState({
			currentCategory: val.value,
			currentData: RidingData.filter(d => d.category === val.value),
			currentMap: dataLayers[val.value],
			policyCopy: this.setPolicyCopy(PolicyData, this.state.currentParty, val.value)
		});
	}

	setPolicyCopy(data, id, category) {
		const copy = data.filter(d => {
			return d.party === id && d.category === category;
		});

		return copy[0].policy_short;
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
				<div className="map-container">
					<div className="layer-container">
						<img className="data-layer" src={this.state.currentMap} alt="climate-data-layer" />
						<img className="basemap" src={map} alt="background-map" />
					</div>
				</div>
				
				<RidingResults
					ridingData={this.state.currentData}
					policyCopy={this.state.policyCopy}>
				</RidingResults>
			</Fragment>
		);
	}
}

export default ExtremeRidings;