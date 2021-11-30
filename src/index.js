import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// CSS for greeting div
const greetDiv = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '400px',
	width: '100%',
};

// Calculation of time
let currentTime = new Date().getHours();
let greet = '';
let styleName = {};
// console.log(currentTime);

// Create dynamic greeting
if (currentTime >= 1 && currentTime < 12) {
	greet = 'Good Morning';
	const morningStyle = {
		color: 'yellow',
	};
	styleName = morningStyle;
} else if (currentTime >= 12 && currentTime < 18) {
	greet = 'Good Afternoon';
	const afternoonStyle = {
		color: 'white',
	};
	styleName = afternoonStyle;
} else {
	greet = 'Good Night';
	const nightStyle = {
		color: 'green',
	};
	styleName = nightStyle;
}

ReactDOM.render(
	<>
		<div style={greetDiv}>
			<h1 className='text'>
				Hello Sir, <span style={styleName}>{greet}</span>
			</h1>
		</div>
	</>,
	document.getElementById('root')
);
