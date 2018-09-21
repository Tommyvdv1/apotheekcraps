import React from 'react';

export const Huisapotheker = (
		<div className="col-md-6 col-xs-12">
			<h1>Huisapotheker</h1>
			<p className="text-justify font-weight-bold">
				Sinds 1 oktober 2017 kunnen patiënten met een chronische aandoening een huisapotheker kiezen. Die zal hen proactief begeleiden bij hun medicatiegebruik door hen persoonlijk advies te geven en een schema bij te houden van alle medicatie die ze gebruiken. Dankzij die begeleiding krijgen patiënten meer controle over hun gezondheid en kunnen ze langer zelfstandig blijven. Om zo'n duurzame therapeutische relatie met hun apotheker op te starten, worden chronische patiënten vandaag uitgenodigd een overeenkomst te ondertekenen met de apotheker van hun keuze.
			</p>
			<p className="text-justify">
				De keuze voor een huisapotheker is uiteraard volledig vrij. Je beslist zelf of je een huisapotheker wil en wie je huisapotheker wordt. Bovendien kan je tijdens de wachtdienst of wanneer het zo uitkomt nog altijd in een andere apotheek terecht voor je medicatie.
			</p>
			<p className="text-justify">
				<a> Opdat je apotheker zijn rol als huisapotheker zou kunnen vervullen, moet hij je een overeenkomst* laten ondertekenen waarin je een </a><a className="font-weight-bold">dubbele toestemming </a><a>geeft.</a> 
			</p>
			<span>
				<ul style={{listStyleType:'circle', paddingLeft:'5%'}}>
					<li>
						<a>De eerste is je toestemming voor </a><a className="font-weight-bold">‘voortgezette farmaceutische zorg’</a><a>, zodat je huisapotheker je een begeleiding kan aanbieden die afgestemd is op jouw noden.</a>
					</li>
					<li>
						<a>De tweede is je </a><a className="font-weight-bold">geïnformeerde toestemming</a><a> voor het elektronisch uitwisselen van je gezondheidsgegevens tussen zorgverleners die je behandelen. Die uitwisseling komt de communicatie en de samenwerking tussen je verschillende zorgverleners ten goede, en dus ook je behandeling. Uitgebreide informatie over de geïnformeerde toestemming vind je <a href="https://www.apotheek.be/mijn-gezondheid/je-gezondheid-bevorderen/de-geinformeerde-toestemming-laat-uw-gezondheid-niet-aan">hier</a> terug.</a>
					</li>
				</ul>
			</span>
			<p className="text-justify font-italic">
				*Heb je een vertrouwenspersoon of mantelzorger die voor jou naar de apotheek gaat, dan kan hij of zij betrokken worden in het overleg tussen jou en je huisapotheker als je daarmee akkoord gaat. Jij tekent de overeenkomst en de huisapotheker vermeldt de identiteit van je vertrouwenspersoon of mantelzorger in je dossier.
			</p>
			<h3>De taken van de huisapotheker</h3>
			<ul className="list-group">
				<li className="list-group-item">
					een volledig zicht hebben op de medicatie van de patiënt
				</li>
				<li className="list-group-item">
					een medicatieschema ter beschikking stellen van de patiënt en de andere betrokken zorgverleners
				</li>
				<li className="list-group-item">
					de patiënt een persoonlijke begeleiding garanderen
				</li>
				<li className="list-group-item">
					samenwerken met de huisarts en de andere zorgverstrekkers van de patiënt, en als contactpersoon optreden voor alle informatie in verband met de medicatie van de patiënt
				</li>
			</ul>
			<h3>De voordelen van het medicatieschema</h3>
			<ul className="list-group">
				<li className="list-group-item">
					Het medicatieschema biedt een volledig en betrouwbaar overzicht van alle medicatie die de patiënt neemt, zowel voorgeschreven geneesmiddelen (door een huisarts, tandarts, andere artsen …) als zelfzorgmedicatie.
				</li>
				<li className="list-group-item">
					Het bevat alle nuttige informatie zoals de dosering en het tijdstip van inname voor elk geneesmiddel.
				</li>
				<li className="list-group-item">
					Het medicatieschema helpt de patiënt om zijn geneesmiddelen juist te nemen, biedt hem en de andere betrokken zorgverleners een volledig overzicht van de medicatie en helpt de kwaliteit van de zorg verbeteren.
				</li>
				<li className="list-group-item">
					In het kader van kwaliteitsvolle, interdisciplinaire zorg zal de huisapotheker het medicatieschema kunnen delen met de andere zorgverstrekkers van de patiënt.
				</li>
			</ul>
			<h3>Voorbeeld van een medicatieschema</h3>
			<img src={require('../Afbeeldingen/medicatieschema.png')} className="img-fluid" alt="Responsive"/>
			<small>
				<u>Bronnen:</u><br/>
				<a href="http://www.apb.be">www.apb.be</a><br/>
				<a href="http://www.apotheek.be">www.apotheek.be</a>
			</small>


		</div>
	);

//style={{listStyleType:'circle'}}

