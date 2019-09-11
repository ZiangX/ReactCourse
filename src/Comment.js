// Import all kinds of files that you need to use
import React from "react";
import faker from "faker";

// Write the core code, this is gonna to be used in register/login page
	// The name "App" here must to be capitalized!
const Comments = (props) =>{
	return (
		<div class="comment">
			<a class="avatar">
			  <img src={props.img} alt="Img of users"/>
			</a>
			<div class="content">
			  <a class="author">{props.author}</a>
			  <div class="metadata">
				<span class="date">{faker.date.month()}</span>
			  </div>
			  <div class="text">
				{props.text}
			  </div>
			</div>
		 </div>

	)
	
};

export default Comments;