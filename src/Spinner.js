import React from 'react';
//'React' must be capitalized!

const spinner = props =>{
	return(
		<div class="ui segment">
		  <div class="ui active dimmer">
			<div class="ui text loader">Loading</div>
		  </div>	
	</div>
	)
	
}

export default spinner;