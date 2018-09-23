import React from 'react';



class Contactformulier extends React.Component {

constructor() {
    super()
    this.state = {
      name_first: '',
      name_last: '',
      email:'',
      subject:'',
      message:'',
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
}

onButtonClick = () => {
	fetch('https://young-reaches-39897.herokuapp.com/sendmail', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name_first: this.state.name_first,
        name_last: this.state.name_last,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
        })
    })
    .then(response =>response.json())
    .then(res => console.log(res))
}

render () {
	return(
			<div className="modal-body">
				<p className="float-right"><a href=''><i className="far fa-times-circle"></i></a></p>
				<form id="contactForm" className="form-horizontal">
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
					<div className="form-group">
					 	<label className="col-md-2 control-label" htmlFor="recaptcha"></label>
					 	<div className="col-md-10">
					 		<div className="g-recaptcha" data-callback="enableForm" data-sitekey="6Lf5m3EUAAAAAKg9S93SY5b_JB5_170IZ0H6_7yG"></div>
					 	</div>
					</div>
					{// disabled toevoegen achter class="btn btn-success" bij button!!! 
					}
					<div className="form-group">
						<label className="col-md-2 control-label" htmlFor="submit"></label>
						{this.state.name_first === '' || this.state.name_last === '' || this.state.email === '' || this.state.subject === '' || this.state.message === ''? 
						<div className="col-md-3">
							<button id="submitContact" type="submit" className="btn btn-success" disabled> VERZENDEN</button>
						</div> :
						<div className="col-md-3">
							<button id="submitContact" type="submit" className="btn btn-success" onClick={this.onButtonClick}> VERZENDEN</button>
						</div> 
						}
						{// <div class="col-md-7">
						// 	<label id="msg"> Gelieve de reCAPTCHA aan te vinken om het formulier te activeren.</label>
						// </div>
						}
					</div>
				</form>		
      		</div>
		)
}
}

export default Contactformulier;