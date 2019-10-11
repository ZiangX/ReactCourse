import React from "react";

const seasonData = {
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
	const {text, iconName} = seasonData[season];
	return (
		// Make sure you include the curly braket when using a JS object inside the jsx!
		<div>
			<p>{text}</p>
			<i className={`massive ${iconName} icon` } />
		</div>
	)
}



export default SeasonDetermination;