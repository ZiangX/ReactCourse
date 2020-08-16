import React from 'react';
//'React' must be capitalized!

const spinner = props =>{
	return(
		<div className="ui segment" style={{width :"1000px", height:"200px"}}>
		  <div className="ui active dimmer">
			<p className="ui text loader">{props.message}</p>
		  </div>	
	</div>
	)
}

//Give the default message
spinner.defaultProps={
	message: "Loading..."
}

export default spinner;