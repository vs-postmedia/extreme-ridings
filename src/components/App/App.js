import React from 'react';
import ExtremeRidings from '../ExtremeRidings/ExtremeRidings';
import './App.css';


const categories = [
	{ value: 'social-benefits', label: 'Social benefits' },
	{ value: 'income', label: 'Income' },
	{ value: 'housing', label: 'Housing' },
	{ value: 'climate-change', label: 'Climate change' }
];
const parties = ['Lib', 'CPC', 'NDP', 'Greens'];

function App() {
	return (
	  	<div className="App">
	  		<ExtremeRidings 
	  			categories={categories} 
	  			displayParty="ndp"
	  			parties={parties}>
	  		</ExtremeRidings>
	  	</div>
	);
}

export default App;
