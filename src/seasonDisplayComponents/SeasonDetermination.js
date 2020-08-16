import React from "react";
import './seasonDisplay.css'

const seasonConfig = {
	Winter : {
		text : "Burr it is cold!",
		iconName : "snowflake"
	},
	Summer : {
		text : "Let's hit the beach!",
		iconName : "sun"
	}

}

const getSeason = (lat, month) =>{
	if(lat > 0 ){
		return month > 3 && month < 8 ? "Summer" : "Winter"; 
		
	}else{
		return month > 3 && month < 8 ? "Winter" : "Summer";
	}	
}

const SeasonDetermination = (props) =>{
	// console.log(props);
	let month = new Date().getMonth();
	let season = getSeason(props.lat, month); 
	const {text, iconName} = seasonConfig[season];
	return (
		// Make sure you include the curly braket when using a JS object inside the jsx! Also, skip some CSS part due to the unimportance
		<div>
			<i className={`icon-left massive ${iconName} icon` } />
			<p>{text}</p>
			<i className={`icon-right massive ${iconName} icon` } />
		</div>
	)
}

export default SeasonDetermination;