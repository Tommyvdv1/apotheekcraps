import React from 'react';
import {connect} from 'react-redux';
import { MenuItem } from '../../Actions';
import {Griepcampagne} from '../../Apotheeknieuws/Griepcampagne';

const mapsDispatchToProps = (dispatch) => {
    return {
        MenuItem: (index) => dispatch(MenuItem(index)),
    }
}

class Homepage extends React.Component {
	render() {
		return(
			<div className=" col-md-12 col-lg-6">
			<div className="d-none d-sm-block">
					<img  src={require('../../Afbeeldingen/griepcampagne.webp')} className="img-fluid" alt="Responsive" style={{cursor:'pointer'}} onClick={() =>this.props.MenuItem(Griepcampagne)}/>
					<br/>
					<hr/>
					<br/>
					<h1>Nieuw in ons gamma: Sanas® sport- en voedingssupplementen.</h1><br/>
					<p className='text-justify'>SANAS® is een uitgebreid gamma met hoogwaardige sportvoeding en voedingsupplementen, zowel voor de beginnende als de gevorderde sporter.</p><br/>
					<p className='text-justify'>Ben jij van plan om mee te doen aan een marathon, wil je die ene Alpencol bedwingen, of ben je intensief met fitness bezig. Kom langs en wij helpen jou met het samenstellen van de ideale combinatie aan voedingssupplementen om jou doel te bereiken.</p><br/> 
					<p>zie ook <a href="https://www.sanas.be">www.sanas.be</a> voor meer informatie.</p><br/>
					<img src={require('../../Afbeeldingen/Sanas.webp')} className="img-fluid" alt="Responsive"/><br/>
					<hr/>
					<br/>
					<img src={require('../../Afbeeldingen/LouisWidmerwebsite.webp')} className="img-fluid" alt="Responsive"/><br/>
					<p>Ontdek <a href="http://www.louiswidmer-promo.be/nl/index.html">hier</a> onze promoties van Louis Widmer!</p>
					<hr/>
					<br/>
					<a href="https://www.apotheeklimburg.be/"><img src={require('../../Afbeeldingen/Apotheekvanwacht.webp')} className="img-fluid" alt="Responsive"/></a><br/>
					<hr/>
			</div>
			<div className="d-block d-sm-none">
					<img  src={require('../../Afbeeldingen/griepcampagne.webp')} className="img-fluid" alt="Responsive" style={{cursor:'pointer'}} onClick={() =>this.props.MenuItem(Griepcampagne)}/>
					<br/>
					<hr/>
					<br/>
					<h1>Nieuw in ons gamma: Sanas® </h1><br/>
					<p className='text-justify'>SANAS® is een uitgebreid gamma met hoogwaardige sportvoeding en voedingsupplementen, zowel voor de beginnende als de gevorderde sporter.</p><br/>
					<p className='text-justify'>Ben jij van plan om mee te doen aan een marathon, wil je die ene Alpencol bedwingen, of ben je intensief met fitness bezig. Kom langs en wij helpen jou met het samenstellen van de ideale combinatie aan voedingssupplementen om jou doel te bereiken.</p><br/> 
					<p>zie ook <a href="https://www.sanas.be">www.sanas.be</a> voor meer informatie.</p><br/>
					<img src={require('../../Afbeeldingen/Sanas.webp')} className="img-fluid" alt="Responsive"/><br/>
					<hr/>
					<br/>
					<img src={require('../../Afbeeldingen/LouisWidmerwebsite.webp')} className="img-fluid" alt="Responsive"/><br/>
					<p>Ontdek <a href="http://www.louiswidmer-promo.be/nl/index.html">hier</a> onze promoties van Louis Widmer!</p>
					<hr/>
					<br/>
					<a href="https://www.apotheeklimburg.be/"><img src={require('../../Afbeeldingen/Apotheekvanwacht.webp')} className="img-fluid" alt="Responsive"/></a><br/>
					<hr/>
			</div>
			</div>
		);
	}
}

export default connect(null, mapsDispatchToProps)(Homepage);



			
		
		



	
