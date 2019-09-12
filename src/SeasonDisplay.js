import React from "react";

class SeasonDisplay extends React.Component {
	
	
	render(){
		window.navigator.geolocation.getCurrentPosition(
			(position) => console.log(position),
			(error) => console.log(error),

		);

		return(
			<div>
				Hello from SeasonDisplay


			</div>
		)
	}
	
	
}

export default SeasonDisplay;