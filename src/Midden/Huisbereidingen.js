import React from 'react';

export const Huisbereidingen = (
		<div className="col-md-6 col-xs-12">
			<h1>Onze huisbereidingen</h1>
			<p className="text-justify">
				Sinds jaar en dag beheerst uw apotheker de kunst om geneesmiddelen te bereiden.
				Deze kunde blijft zich ontwikkelen en in functie de nieuwste technologieën en hedendaagse technieken.
			</p>
			<p className="text-justify">
				Uw apotheek beschikt over:
			</p>
			<span>
				<ul style={{listStyleType:'circle', paddingLeft:'5%'}}>
					<li>
						<a>accuraat materiaal (electronische weegschaal tot op de milligram nauwkeurig, zalfmolen, apparaat om preparaten in tube te verpakken,...).</a>
					</li>
					<li>
						<a>basisproducten van gegarandeerd de hoogste scheikundige en bacteriologische kwaliteit, gestaafd door een analysecertificaat en een toelatingsnummer.</a>
					</li>
					<li>
						<a>geactualiseerde referentiewerken (oa. het Therapeutisch Magistraal Formularium), met wetenschappelijk gestaafde formules die getest werden door de Belgische en europese universiteiten.</a>
					</li>
					<li>
						<a>bereidingsprotocols die een controle en opvolging van de bereidingen mogelijk maken (opspoorbaarheid).</a>
					</li>
				</ul>
			</span>
			<p className="text-justify">
				Zo heeft u, wanneer wij u een bereiding afleveren die u werd voorgeschreven door uw arts, de garantie dat:
			</p>
			<span>
					<ul style={{listStyleType:'circle', paddingLeft:'5%'}}>
					<li>
						<a>het een efficiënt geneesmiddel betreft</a>
					</li>
					<li>
						<a>de kwaliteit gegarandeerd is</a>
					</li>
					<li>
						<a>de formule gepersonaliseerd is en aangepast aan uw specifiek geval</a>
					</li>
					<li>
						<a>het een financieel interessant alternatief is, dikwijls nog goedkoper dan de generieken</a>
					</li>
				</ul>
			</span>
			<h3>Voor uw gezondheid en portefeuille zijn bereidingen dus een grote troef!</h3>
			<img src={require('../Afbeeldingen/huisbereidingen.jpg')} className="img-fluid" alt="Responsive"/>

		</div>
);
