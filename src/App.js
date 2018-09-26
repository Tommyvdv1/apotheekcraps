import React, { Component } from 'react';
import './App.css';
import Hoofding from './Startpagina/Hoofding';
import Navbar from './Startpagina/Navbar';
import Container from './Startpagina/Container';
import Footer from './Startpagina/Footer';
import Index from './Midden/Homepage/index';
import Contactformulier from './Contactformulier/Contactformulier';
// import {Huidanalyse} from './Midden/Huidanalyse';
// import {Apotheeknieuws} from './Midden/Apotheeknieuws';
// import {Team} from './Midden/Team';
//


class App extends Component {


  constructor() {
    super();
    this.state = {
      Midden: <Index/>,
      Contactform: false,
    };
  }

// clickHuidanalyse = () => {
//   this.setState({Midden: Huidanalyse});
// }

// clickApotheeknieuws = () => {
//   this.setState({Midden: Apotheeknieuws});
// }

// clickTeam = () => {
//   this.setState({Midden: Team});
// }

setHome = () => {
  this.setState({Midden: <Index/>});
  this.setState({Contactform: false});
}

State = () => {
  this.setState({Contactform: true});
}

MenuItem = (item) => {
  this.setState({Midden: item});
}

  render() {
    if (!this.state.Contactform) {
      return (
      	<div>
        		<Hoofding />
        		<Navbar Home={this.setHome}
                    MenuItem={this.MenuItem}
                    setState={this.State}
            />
        		<Container Midden={this.state.Midden}  
                        MenuItem={this.MenuItem}
                        setState={this.State}
            />
        		<Footer setState={this.State} />
        	</div>
      );
    }
    else {
      return (
        <div>
          <Contactformulier Home={this.setHome} />
        </div>
        )
    }
  }
}

export default App;

//cd downloads/"web developing"/"apo website"/reactversie
