import React from "react";

class SeasonDisplay extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {location:null, errorMessage: ''};
		
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({location: position.coords.latitude}); 
			},
			(error) => {
				this.setState({errorMessage: error.message}); 
			},

		);
	}
	
	render(){
		
		if(this.state.location && !this.state.errorMessage){
			return(
				<div>
					Location is : {this.state.location}
				</div>
				);
		}

		if(this.state.errorMessage && !this.state.location){
			return(
				<div>
					Error is : {this.state.errorMessage}
				</div>
				);
		}
	
		return <div>Loading!</div>
	}
}

export default SeasonDisplay;