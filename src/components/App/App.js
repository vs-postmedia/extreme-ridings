import React from 'react';
import ExtremeRidings from '../ExtremeRidings/ExtremeRidings';
import './App.css';


const categories = [
	{ value: 'families', label: 'Families' },
	{ value: 'income', label: 'Income' },
	{ value: 'housing', label: 'Housing' },
	{ value: 'transit', label: 'Transportation' }
];
const parties = ['LPC', 'CPC', 'NDP', 'GPC'];

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
