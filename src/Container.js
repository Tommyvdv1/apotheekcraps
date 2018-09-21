import React from 'react';
import {links} from './Links';

const Container = ({MenuItem, Midden}) => {

  	const DropdownMenu = links.map((value, i) =>{
  			return (
  			<a key={i} style={{cursor:'pointer'}} onClick={() => MenuItem(links[i].item)}><h3>{links[i].name}</h3></a>
  			);
  		})
  	

  	// clickHuidanalyse,clickApotheeknieuws,clickHuisbereidingen,clickThuisgezondhuiszorg,clickTeam,clickHuisapotheker
	// const DropdownMenu = (
	// 		<div>
	// 		<a style={{cursor:'pointer'}} onClick={clickHuidanalyse}><h3>Huidanalyse</h3></a>
	// 		<a style={{cursor:'pointer'}} onClick={clickApotheeknieuws}><h3>Apotheeknieuws</h3></a>
	// 		<a style={{cursor:'pointer'}} onClick={clickHuisbereidingen}><h3>Huisbereidingen</h3></a>
	// 		<a style={{cursor:'pointer'}} onClick={clickThuisgezondhuiszorg}><h3>Thuisgezondhuiszorg</h3></a>
	// 		<a style={{cursor:'pointer'}} onClick={clickHuisapotheker}><h3>Huisapotheker</h3></a>
	// 		<a style={{cursor:'pointer'}} onClick={clickTeam}><h3>Team</h3></a>
	// 		</div>
	// 		)
	

	return (
		<div className="container"> 
			<div className="row">
	
				<div className="col-md-3 d-none d-sm-none d-md-block">
					<hr/>
					{DropdownMenu}
					<hr/>
				</div>
				
				{Midden}

				<div className="col-md-3 d-none d-sm-block">
					<div className="logo apotheek Craps">
						<img alt='' src={require('./Afbeeldingen/apocrapslogo.png')}/>
					</div>
					
					<div className="infoApotheek" style={{marginTop:'40px'}}>
						<p> <span style={{fontWeight:"700", fontSize:"120%",width:"100%"}}>Apotheek Craps</span><br/>
					<span style={{width:'100%'}}>Kapelstraat 4</span><br/>
					<span style={{width:'30%'}}>3900</span> <span style={{width:'70%'}}>OVERPELT</span> </p>
				
				
					<p><a href="" data-toggle="modal" data-target="#myLocation"> Weergeven op plan</a></p>
				
					<p>
						
							<span style={{width:'80%'}}>Tel: 011 64 32 91</span><br/>
						
					</p>
					
					<p> <span style={{width:'100%'}}><a href="" className="myContact" data-toggle="modal" data-target="#myContact"> Contact</a></span><br/>
					</p>
					
							<p> <strong> Openingsuren</strong><br/>
								<span ><i>Maandag, dinsdag, 
									donderdag en 
									vrijdag</i><br/>
									09:00 tot 12:00<br/>
									14:00 tot 18:30<br/>
									<br/>
									<i>Woensdag en 
									zaterdag</i><br/>
									09:00 tot 12:00</span> </p>
					
					<p><a href="https://www.apotheeklimburg.be/"> Wachtdiensten</a></p>
					</div>
				</div>

			</div>

		</div>

		);
}

export default Container;