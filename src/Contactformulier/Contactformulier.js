import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from 'react-redux';

import { Home } from '../Actions';


const mapsDispatchToProps = (dispatch) => {
    return {
        Home: () => dispatch(Home()),
    }
}

class Contactformulier extends React.Component {

constructor() {
    super()
    this.state = {
      name_first: '',
      name_last: '',
      email:'',
      subject:'',
      message:'',
      file: {file:'',name:''},     
      recaptcha: false,
    }
  }

nameFirstChange = (event) => {
	this.setState({name_first:event.target.value});
}

nameLastChange = (event) => {
	this.setState({name_last:event.target.value});
}

emailChange = (event) => {
	this.setState({email:event.target.value});
}

subjectChange = (event) => {
	this.setState({subject:event.target.value});
}

messageChange = (event) => {
	this.setState({message:event.target.value});
	console.log(this.state.message);
}

fileChange = (event) => {

    const reader  = new FileReader();
	var newObject = '';
	
	const name = event.target.files[0].name;
	//this.setState({file: {name: name}});

	reader.onload = (dataURL) => {
	    // The file's text will be printed here
		newObject = dataURL.target.result;
		this.setState({file: {file: newObject, name: name}});
		console.log(this.state.file);
	    }
	

    reader.readAsDataURL(event.target.files[0]);
	
}


recaptchaChange =() => {
	console.log(this.state.recaptcha);
	if (this.state.recaptcha) {
		this.setState({recaptcha: false });
	}
	else {
		this.setState({recaptcha: true });
	}
	
}

onButtonClick = (event) => {
	//const formData = new FormData();
    //formData.append('file',this.state.file);
    //'https://young-reaches-39897.herokuapp.com/sendmail'
    //'http://localhost:3001/sendmail'
    // application/json
	fetch('https://bj-eu-server.herokuapp.com/sendmail', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name_first: this.state.name_first,
        name_last: this.state.name_last,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
        file: this.state.file,
        }),
      	
    })
    .then(response => response.json())
    .then(res => window.alert(res));
    event.preventDefault();
    this.props.Home();
}

//far fa-times-circle
render () {
	return(
			<div className="modal-body">
				<div> 
				<a className="nav-link" onClick={()=>{this.props.Home()}} ><i className="far fa-times-circle" style={{color:"#C04363", cursor: 'pointer'}}></i></a>
				</div>
				<form id="contactForm" className="form-horizontal" onSubmit={this.onButtonClick}>
					{//<input type="hidden" name="contactForm" value="true"></input>
					//<input type="hidden" name="apo_id" value="37646"></input>
					//<input type="hidden" name="lang" value="nl"></input>
					//<label for="to">Send to:</label>
     //    			<select name="to" id="to">
     //        			<option value="sales">Sales</option>
     //        			<option value="support" selected="selected">Support</option>
     //        			<option value="accounts">Accounts</option>
     //    			</select>
     //    			<br/>
 					}
					<div className="form-group">
						<label className="col-md-2 control-label" htmlFor="name_first">Voornaam</label>  
					
						<div className="col-md-6">
							<input id="name_first" name="name_first" type="text" className="form-control input-md" onChange={this.nameFirstChange} required></input>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label" htmlFor="name_last"> Naam</label>  
						<div className="col-md-6">
							<input id="name_last" name="name_last" type="text" className="form-control input-md" onChange={this.nameLastChange} required></input>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label" htmlFor="email"> E-mail</label>  
						<div className="col-md-6">
							<input id="email" name="email" type="email" className="form-control input-md" onChange={this.emailChange} required></input>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label" htmlFor="subject"> Onderwerp</label>  
						<div className="col-md-10">
							<input id="subject" name="subject" type="text" className="form-control input-md" onChange={this.subjectChange} required></input>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-2 control-label" htmlFor="message"> Bericht</label>  
						<div className="col-md-10">
							<textarea id="message" name="message" className="form-control input-lg" rows="6" onChange={this.messageChange} required placeholder=" Typ hier uw  boodschap"></textarea>
						</div>
					</div>
					<div className="form-group" encType="multipart/form-data">  
						<label className="col-md-10 control-label" htmlFor="message"> Bijlage: <font size="2">(Indien gewenst kan u hier een foto, bestand, ... toevoegen)</font></label>  
						<div className="col-md-3">
							<input id="image" name="image" type='file'  className="form-control-file-md" onChange={this.fileChange}/>
						</div>
					</div>
					<div className="form-group">
					  	<label className="col-md-2 control-label" htmlFor="recaptcha"></label>
					  	<div className="col-md-10">
					  		<ReCAPTCHA className="g-recaptcha" onChange={this.recaptchaChange} sitekey="6Lf5m3EUAAAAAKg9S93SY5b_JB5_170IZ0H6_7yG" />
					  	</div>
					</div>
					{// disabled toevoegen achter class="btn btn-success" bij button!!! 
					}
					<div className="form-group">
						<label className="col-md-2 control-label" htmlFor="submit"></label>
						{this.state.name_first === '' || this.state.name_last === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '' || this.state.recaptcha===false ? 
						<div className="col-md-3">
							<button id="submitContact" type="submit" className="btn btn-success" disabled> VERZENDEN</button>
						</div> :
						<div className="col-md-3">
							<button id="submitContact" type="submit" className="btn btn-success"> VERZENDEN</button>
						</div> 
						}
						{// <div class="col-md-7">
						// 	<label id="msg"> Gelieve de reCAPTCHA aan te vinken om het formulier te activeren.</label>
						// </div>
						}
					</div>
				</form>		
      		</div>
		);
};
}


export default connect(null, mapsDispatchToProps)(Contactformulier);
