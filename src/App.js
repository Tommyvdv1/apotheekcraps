import React, { Component } from 'react';
import './App.css';
import Hoofding from './Hoofding';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import {Homepage} from './Midden/Homepage';
import Contactformulier from './Contactformulier/Contactformulier';
// import {Huidanalyse} from './Midden/Huidanalyse';
// import {Apotheeknieuws} from './Midden/Apotheeknieuws';
// import {Team} from './Midden/Team';


class App extends Component {

  constructor() {
    super();
    this.state = {
      Midden: Homepage,
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
  this.setState({Midden: Homepage});
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
            />
        		<Footer />
        	</div>
      );
    }
    else {
      return (
        <div>
          <Contactformulier />
        </div>
        )
    }
  }
}

export default App;

//cd downloads/"web developing"/"apo website"/reactversie
