// Import all kinds of files that you need to use, because they are in the same directory, we use ./fileName
import React from "react";
import ReactDOM from "react-dom";
import Comment from './Comment';
import faker from "faker";
import Card from './Card';
import SeasonDisplayApp from "./SeasonDisplayApp";

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
			<h3 className="ui dividing header" style={{color: "red"}}>
				August 16 2020
			</h3>
			<h3 className="ui dividing header" style={{color: "red"}}>
				Sixth Day : About lifecycyle
			</h3>
			<SeasonDisplayApp />
			
			<h3 className="ui dividing header" style={{color: "red"}}>
				Fifth Day : About State (Refactor the app)	
			</h3>
			<SeasonDisplayApp />
			
			<h3 className="ui dividing header" style={{color: "red"}}>Fourth Day : About Props </h3>
			<SeasonDisplayApp />
			
			<h3 className="ui dividing header" style={{color: "red"}}>Third Day: Continue Component</h3>
			<Card >
				<Comment author="ang" time="1:00 pm" text="be couraged" img={faker.image.avatar()}/>
			</Card>
			<Card >
				<Comment author="xu" time="11:00 pm" text="should be couraged" img={faker.image.avatar()}/>
			</Card>
			<Card >
				<div>
					<h3>Warning!</h3>
					Are you regret?
				</div>
			</Card>
			
			<h3 className="ui dividing header" style={{color: "red"}}>Second Day: Component</h3>
				<Comment author="ang" time="1:00 pm" text="be couraged" img={faker.image.avatar()}/>
				<Comment author="xu" time="11:00 pm" text="should be couraged" img={faker.image.avatar()}/>
				<Comment author="zi" time="12:00 pm" text="pls be couraged" img={faker.image.avatar()}/>
				
			<h3 className="ui dividing header" style={{color: "red"}}>First Day: JSX</h3>
			<form>
				<label >
					UserName 
					<input type="text" name="account"/>
				</label>
				<br />
				<label htmlFor="password" >PassWord</label>
				<input type="password" name="password" id="password"/>
				<br/>
				{/*See how does it refer the variable here */}
				<button style={{color:"white", backgroundColor: colorText()}}>
					{clickText()}
				</button>
			</form>
		</div>
	)
	
};

// Render this component and show to the screen
ReactDOM.render(
	<App/>, 
	document.querySelector("#root")
);