import React from 'react';
import {Disclaimer} from './Disclaimer';
import {connect} from 'react-redux';
import { MenuItem, setState } from '../Actions';

const mapsDispatchToProps = (dispatch) => {
    return {
        MenuItem: (index) => dispatch(MenuItem(index)),
        setState: () => dispatch(setState()),
    }
}


class Footer extends React.Component  {

	render() {
		const {MenuItem,setState} = this.props;
	return (

		<div className="container">
			<div className="row" style={{borderTop:"1px solid #eee",textAlign:'center', padding:'20px'}}>
				<div className="d-block col-md-6 col-lg-12 col-xl-12">
					<p>
						<span style={{fontWeight:'700', fontSize:'120%',width:'100%'}}>Apotheek Craps</span>
						<br/>
						<span style={{width:'100%'}}>Kapelstraat 4</span> - <span style={{width:'30%'}}>3900 </span>
						<span style={{width:'70%'}}>OVERPELT</span><br/>
						<span style={{width:'80%'}}>Tel: 011 64 32 91</span><br/>
						<span style={{width:'100%'}}><a href="" data-toggle="modal" onClick={setState} >Contact </a></span>
						 - <a href="https://www.apotheeklimburg.be/#/wachtdienst/3900">Wachtdiensten</a>
						<br/>
			            <small> Apotheker-Titularis: Annick Craps<br/>
						N° APB: 722904 - BTW: 0874832310</small>
					</p>
			 		<p><a href="" data-toggle="modal" onClick={()=>MenuItem(Disclaimer)}> Disclaimer</a></p>
				</div>
				<div className="col-md-6 d-lg-none d-xl-none">
					<p> <strong> Openingsuren</strong>
						<br/>
						<span ><i>Maandag, dinsdag,</i><br/>  
									<i>donderdag en vrijdag</i><br/>
									09:00 tot 12:00<br/>
									14:00 tot 18:30<br/>
									<br/>
									<i>Woensdag en 
									zaterdag</i><br/>
									09:00 tot 12:00</span> 
					</p>
				</div>
			</div>
		</div>
		

		);
}
}

export default connect(null, mapsDispatchToProps)(Footer);