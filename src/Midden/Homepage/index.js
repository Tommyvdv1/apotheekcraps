import React from 'react';
import Homepage from './Homepage';
import Griepcampagne from '../../Apotheeknieuws/Griepcampagne';

class Index extends React.Component {
	constructor () {
		super()
		this.state = {
			Home: true,
		}
	}

resetNieuws = () => {
	this.setState({Home:true});
}

setNieuws = () => {
	this.setState({Home: false});
}

render() {
	if(this.state.Home) {
		return (
		<div className="col-md-12 col-lg-6">
			<Homepage setNieuws={this.setNieuws}/>
		</div>
		)
	} 
	else {
		
		return (
		<div className="col-md-12 col-lg-6">
			<Griepcampagne resetNieuws={this.resetNieuws}/>
		</div>
		)

	}
	
}


}


export default Index;