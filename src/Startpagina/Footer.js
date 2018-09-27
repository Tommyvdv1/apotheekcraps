import React from 'react';
import {Disclaimer} from './Disclaimer';



const Footer = ({setState, MenuItem}) => {
	return (

		<div className="container">
			<div className="row">
				<div className="d-block col" style={{borderTop:"1px solid #eee",textAlign:'center', padding:'20px'}}>
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
			</div>
		</div>
		

		);
}

export default Footer;