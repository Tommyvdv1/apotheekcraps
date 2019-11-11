import React, { Component } from 'react';
import './App.css';
import Hoofding from '../Startpagina/Hoofding';
import Navbar from '../Startpagina/Navbar';
import Container from '../Startpagina/Container';
import Footer from '../Startpagina/Footer';
import Contactformulier from '../Contactformulier/Contactformulier';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        Contactform: state.Reducer.contactform,
    }
    
}

class App extends Component {

  render() {
    console.log('render');
    const {Contactform} = this.props;
    if (!Contactform) {
      return (
      	<div>
        		<Hoofding />
            <Navbar/>
            <Container/>
            <Footer/>
        </div>
      );
    }
    else {
      return (
        <div>
          <Contactformulier/>
        </div>
        )
    }
  }
}

export default connect(mapStateToProps)(App);

            //<Navbar Home={this.setHome}
              //      MenuItem={this.MenuItem}
                //    setState={this.State}
            ///>
            //<Container Midden={this.state.Midden}  
              //          MenuItem={this.MenuItem}
                //        setState={this.State}
            ///>
            //<Footer setState={this.State} 
              //      MenuItem={this.MenuItem}
            ///>

//cd downloads/"web developing"/"apo website"/"reduxversie"
