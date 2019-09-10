// Import all kinds of files that you need to use
import React from "react";

// Write the core code, this is gonna to be used in register/login page
	// The name "App" here must to be capitalized!
const Comments = () =>{
	return (
		<div class="ui comments">
		  <h3 class="ui dividing header">Comments</h3>
		  <div class="comment">
			<a class="avatar">
			  <img src="" />
			</a>
			<div class="content">
			  <a class="author">ZiangXu</a>
			  <div class="metadata">
				<span class="date">Today at 5:42PM</span>
			  </div>
			  <div class="text">
				How artistic!
			  </div>
			  <div class="actions">
				<a class="reply">Reply</a>
			  </div>
			</div>
		  </div>
		</div>
	)
	
};

export default Comments;