import React from 'react';

export const Huidanalyse = (
		<div className="col-md-6 col-xs-12">
			<h1>Huidanalyse</h1>
			<p className="text-justify"> Sinds kort beschikt onze apotheek over een Callegari huidanalyse-toestel. Hiermee kunnen wij verschillende parameters van uw huid meten zoals hydratatie, sebum, elasticiteit, melanine en pH van de huid. Wil je weten welk fototype je huid heeft? Ook dit kunnen we bepalen met het Callegari toestel. Zodat je met de juiste bescherming op vakantie kan vertrekken.</p>

 
			<p className="text-justify">
			De huidanalyse is volledig gratis en duurt een 10-tal minuten. Aan de hand van deze resultaten kunnen wij gepast advies geven voor de verzorging van uw huid.</p>
			

 
			<p className="text-justify">
			Interesse? Contacteer ons via telefoon, mail, of spring gerust eens binnen.</p>

			
			<img src={require('../Afbeeldingen/zon.jpg')} className="img-fluid" alt="Responsive"/><br/>
			<p className="text-justify">
			Ook de mannenhuid wordt blootgesteld aan allerlei factoren en heeft de nodige verzorging nodig. Laat uw huid testen en krijgt productadvies afgestemd op uw huid.</p>
			
			<img src={require('../Afbeeldingen/Men.jpg')} className="img-fluid" alt="Responsive"/>
			<br/>
			
			<div className="embed-responsive embed-responsive-16by9">
  				<video className="embed-responsive-item" controls>
  				<source  src={require('../Afbeeldingen/SOFT_PLUS NL.mp4')} type="video/mp4" allowFullScreen/>
				</video>
			</div>
			<br/>

		</div>

);


