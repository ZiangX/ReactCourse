import React from "react";
import SeasonDetermination from "./SeasonDetermination";
import Spinner from './Spinner.js';

class SeasonDisplayApp extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {location:null, errorMessage: ''};
		
	}
	
	componentDidMount(){
		// console.log("componentDidMount");
	
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({location: position.coords.latitude}); 
			},
			(error) => {
				this.setState({errorMessage: error.message}); 
			},

		);
		
	}
	
	componentDidUpdate(){
		// console.log("componentDidUpdate");
		
	}
	
	render(){
		// console.log("this.state.location", this.state.location);
		 
		if(this.state.location && !this.state.errorMessage){
			return(
				<div>
					<SeasonDetermination lat={this.state.location}/>
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
	
		return <Spinner />
	}
}

export default SeasonDisplayApp;