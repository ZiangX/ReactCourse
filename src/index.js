// Import all kinds of files that you need to use
import React from "react";
import ReactDOM from "react-dom";
import Comment from './comment';


 function clickText(){
	return "Click mee";
}

 function colorText(){
	return "red";
}
// Write the core code, this is gonna to be used in register/login page
	// The name "App" here must to be capitalized!
const App = () =>{
	return (
		<div>
			<h3 class="ui dividing header" style={{color: "red"}}>First Day</h3>
			<form>
				<label >
					UserName 
					<input type="text" name="account"/>
				</label>
				<br />
				<label htmlfor="password" >PassWord</label>
				<input type="password" name="password" id="password"/>
				<br/>
				{/*See how does it refer the variable here */}
				<button style={{color:"white", backgroundColor: colorText()}}>
					{clickText()}
				</button>
				
				<h3 class="ui dividing header" style={{color: "red"}}>Second Day</h3>
				<Comment />
				
			</form>
		</div>
	)
	
};

// Render this component and show to the screen
ReactDOM.render(
	<App/>, 
	document.querySelector("#root")
);