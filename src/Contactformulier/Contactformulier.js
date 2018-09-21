import React from 'react';

const Contactformulier = () =>{
	return(
			<div className="modal-body">
				<p className="float-right"><a href=''><i class="far fa-times-circle"></i></a></p>
				<form id="contactForm" method="post" enctype="application/x-www-form-urlencoded" class="form-horizontal" action="./send.php">
					<input type="hidden" name="contactForm" value="true"></input>
					<input type="hidden" name="apo_id" value="37646"></input>
					<input type="hidden" name="lang" value="nl"></input>
					{//<label for="to">Send to:</label>
     //    			<select name="to" id="to">
     //        			<option value="sales">Sales</option>
     //        			<option value="support" selected="selected">Support</option>
     //        			<option value="accounts">Accounts</option>
     //    			</select>
     //    			<br/>}
					<div class="form-group">
						<label class="col-md-2 control-label" for="name_first"> Voornaam</label>  
					
						<div class="col-md-6">
							<input id="name_first" name="name_first" type="text" class="form-control input-md" required></input>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-2 control-label" for="name_last"> Naam</label>  
						<div class="col-md-6">
							<input id="name_last" name="name_last" type="text" class="form-control input-md" required></input>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-2 control-label" for="email"> E-mail</label>  
						<div class="col-md-6">
							<input id="email" name="email" type="email" class="form-control input-md" required></input>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-2 control-label" for="subject"> Onderwerp</label>  
						<div class="col-md-10">
							<input id="subject" name="subject" type="text" class="form-control input-md" required></input>
						</div>
					</div>
					<div class="form-group">
						<label class="col-md-2 control-label" for="message"> Bericht</label>  
						<div class="col-md-10">
							<textarea id="message" name="message" class="form-control input-lg" rows="6" required placeholder=" Typ hier uw  boodschap"></textarea>
						</div>
					</div>
					{// <div class="form-group">
					// 	<label class="col-md-2 control-label" for="recaptcha"></label>
					// 	<div class="col-md-10">
					// 		<div class="g-recaptcha" data-callback="enableForm" data-sitekey="6LcPKhkTAAAAAB7uk58LVm_kWGeYUGgVoRA6gqtn"></div>
					// 	</div>
					// </div>
					// disabled toevoegen achter class="btn btn-success" bij button!!! 
					}
					<div class="form-group">
						<label class="col-md-2 control-label" for="submit"></label>
						<div class="col-md-3">
							<button id="submitContact" type="submit" class="btn btn-success"> VERZENDEN</button>
						</div>
						{// <div class="col-md-7">
						// 	<label id="msg"> Gelieve de reCAPTCHA aan te vinken om het formulier te activeren.</label>
						// </div>
						}
					</div>
				</form>		
      		</div>
		)
}

export default Contactformulier;