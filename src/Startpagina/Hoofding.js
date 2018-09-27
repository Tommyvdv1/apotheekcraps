import React from 'react';

const Hoofding = () => {
	return (
		<div className=''>
		<div className="d-none d-lg-block d-xl-none d-xl-block">
			<img alt='' src={require('../Afbeeldingen/hoofdingwebsite.png')} />
		</div>
		<div className="d-none d-md-block d-lg-none">
			<img alt='' src={require('../Afbeeldingen/ApotheekACmedium.png')} />
		</div>
		<div className="container d-block d-sm-none d-none d-sm-block d-md-none" style={{overflow:'hidden'}}>
			<a style={{textDecoration:'none'}}>
				<div style={{fontWeight:'500',fontSize:'20px',lineHeight:'20px',padding:'10px',color:'#FFF', backgroundColor:'#222', textDecoration:'none'}}>Apotheek Craps</div>
			</a>
		</div>
		</div>
		);
}

export default Hoofding;