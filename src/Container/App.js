import React, { Component, Suspense } from 'react';
import './App.css';
import { connect } from 'react-redux';
const Hoofding = React.lazy(() => import('../Startpagina/Hoofding'));
const Navbar = React.lazy(() => import('../Startpagina/Navbar'));
const Container = React.lazy(() => import('../Startpagina/Container'));
const Footer = React.lazy(() => import('../Startpagina/Footer'));
const Contactformulier = React.lazy(() => import('../Contactformulier/Contactformulier'));


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
          <Suspense fallback={<div>Loading...</div>}>
        		<Hoofding />
            <Navbar/>
            <Container/>
            <Footer/>
          </Suspense>
        </div>
      );
    }
    else {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Contactformulier/>
          </Suspense>
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
