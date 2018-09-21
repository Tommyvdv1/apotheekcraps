import React from 'react';

const Footer = () => {
	return (

		<div className="container">
			<div className="row">
				<div className="col-md-12" style={{borderTop:"1px solid #eee",textAlign:'center', padding:'20px'}}>
					<p className="hidden-xs">
						<span style={{fontWeight:'700', fontSize:'120%',width:'100%'}}>Apotheek Craps</span>
						<br/>
						<span style={{width:'100%'}}>Kapelstraat 4</span> - <span style={{width:'30%'}}>3900 </span>
						<span style={{width:'70%'}}>OVERPELT</span><br/>
						<span style={{width:'80%'}}>Tel: 011 64 32 91</span><br/>
						<span style={{width:'100%'}}><a href="" data-toggle="modal" data-target="#myContact">Contact </a></span>
						 - <a href="https://www.apotheeklimburg.be/">Wachtdiensten</a>
						<br/>
			            <small> Apotheker-Titularis: Annick Craps<br/>
						N° APB: 722904 - BTW: 0874832310</small>
					</p>
			 		<p><a href=""> Disclaimer</a></p>
				</div>
			</div>
		</div>
		

		);
}

export default Footer;