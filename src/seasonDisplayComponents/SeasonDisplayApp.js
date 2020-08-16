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
	
	renderContent(){
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
	
		// Since we have to set the spinner rendered at the beginning of the page, so the only place is 			in the render method 
		return <Spinner message="Please accept the location request"/>
		
		}
	
	render(){
		return(
			<div>{this.renderContent()}</div>
		)
	}
}

export default SeasonDisplayApp;