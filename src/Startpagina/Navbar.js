import React from 'react';
import {links} from './Links';

const Navbar = ({Home, MenuItem, setState}) => {
	
	const DropdownMenu = links.map((value, i) =>{
  			return (
  			<a key={i} className="dropdown-item" style={{cursor:'pointer'}} onClick={() => MenuItem(links[i].item)}>{links[i].name}</a>
  			);
  		})

	// clickHuidanalyse, clickApotheeknieuws, clickHuisbereidingen, clickThuisgezondhuiszorg, clickHuisapotheker, clickTeam
	// const DropdownMenu = (
	// 		<div>
	// 		<a className="dropdown-item" style={{cursor:'pointer'}} onClick={clickHuidanalyse}>Huidanalyse</a>
	// 		<a className="dropdown-item" style={{cursor:'pointer'}} onClick={clickApotheeknieuws}>Apotheeknieuws</a>
	// 		<a className="dropdown-item" style={{cursor:'pointer'}} onClick={clickHuisbereidingen}>Huisbereidingen</a>
	// 		<a className="dropdown-item" style={{cursor:'pointer'}} onClick={clickThuisgezondhuiszorg}>Thuisgezondhuiszorg</a>
	// 		<a className="dropdown-item" style={{cursor:'pointer'}} onClick={clickHuisapotheker}>Huisapotheker</a>
	// 		<a className="dropdown-item" style={{cursor:'pointer'}} onClick={clickTeam}>Team</a>
	// 		</div>
	// 		)

	return (
			<div className="container">
				<nav className="navbar navbar-expand navbar-light">

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <a className="nav-link" onClick={Home} ><i className="fas fa-home" style={{color:"#C04363", cursor: 'pointer' }}></i><span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item dropdown">
				        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"#C04363", cursor: 'pointer'}}>
				          <i className="fas fa-bars"></i>
				        </a>
				        <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{color:"#C04363"}}>
				          {DropdownMenu}
				        </div>
				      </li>
				    </ul>
				    <form className="form-inline my-2 my-lg-0">
				      	<a href="https://www.apotheeklimburg.be/"style={{paddingRight: "20px", color:"#C04363"}}>Wachtdiensten</a>
				  		<a onClick={setState} style={{color:"#C04363", cursor: 'pointer'}}>Contact</a>
				    </form>
				  </div>
				</nav>
			</div>
		)

}


export default Navbar;