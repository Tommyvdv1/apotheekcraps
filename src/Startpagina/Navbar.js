import React from 'react';
import {links} from './Links';
import {connect} from 'react-redux';
import { Home, MenuItem, setState } from '../Actions';

const mapsDispatchToProps = (dispatch) => {
    return {
        Home: () => dispatch(Home()),
        MenuItem: (index) => dispatch(MenuItem(index)),
        setState: () => dispatch(setState()),
    }
}


class Navbar extends React.Component  {

	render() {
		console.log('rerender navbar');
		const {Home,MenuItem,setState} = this.props;
		const DropdownMenu = links.map((value, i) =>{
  			return (
  			<a key={i} className="dropdown-item" style={{cursor:'pointer'}} onClick={() => MenuItem(links[i].item)}>{links[i].name}</a>
  			);
  		})
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
				    <div className="form-inline my-2 my-lg-0">
				      	<a href="https://www.apotheeklimburg.be/#/wachtdienst/3900" style={{paddingRight: "20px", color:"#C04363"}}>Wachtdiensten</a>
				  		<a onClick={setState} style={{color:"#C04363", cursor: 'pointer'}}>Contact</a>
				    </div>
				  </div>
				</nav>
			</div>
		)
}
}


export default connect(null, mapsDispatchToProps)(Navbar);