import React from 'react';
import ExtremeRidings from '../ExtremeRidings/ExtremeRidings';
import './App.css';


const categories = [
	{ value: 'families', label: 'Issue: Families' },
	{ value: 'income', label: 'Issue: Income' },
	{ value: 'housing', label: 'Issue: Housing' },
	{ value: 'transit', label: 'Issue: Transportation' }
];
const parties = ['LPC', 'CPC', 'GPC', 'NDP'];

function App() {
	return (
	  	<div className="App">
	  		<ExtremeRidings 
	  			categories={categories} 
	  			displayParty="lpc"
	  			parties={parties}>
	  		</ExtremeRidings>
	  	</div>
	);
}

export default App;
