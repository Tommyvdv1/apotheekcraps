import React from 'react';

export const Thuisgezondheidszorg = (
	<div className="col-md-6 col-xs-12">
		<h1>Thuisgezondhuidszorg</h1>
		<p className="text-justify">
			Thuiszorg wordt de dag van vandaag steeds belangrijker door de voortdurende vergrijzing van de bevolking en het dalend aantal ligdagen in ziekenhuizen. Zorgbehoevenden geven de voorkeur aan verzorging in eigen omgeving.
		</p>
		<p className="text-justify">
			Bent u ook een hulpbehoevende persoon die graag in uw eigen vertrouwde omgeving verzorgd wil worden? Dit kan zeker en vast. Bij uw apotheek kan u de nodige hulpmiddelen bestellen en wordt u met raad en daad bijgestaan om het u thuis zo comfortabel mogelijk te maken.
		</p>
		<h3>Waarvoor kan u terecht in de apotheek?</h3>
		<span>
				<ul style={{listStyleType:'circle', paddingLeft:'5%'}}>
					<li>
						<a className='font-weight-bold'>Incontinentiemateriaal</a>
					</li>
					<li>
						<a className='font-weight-bold'>Ademhalingstherapie</a>
					</li>
					<li>
						<a className='font-weight-bold'>Aërosols</a><a>, toebehoren en zuurstof</a>
					</li>
					<li>
						<a className='font-weight-bold'>Meetapparatuur:</a><a> Bloeddrukmeters, bloedglucosemeters, thermometers…</a>
					</li>
					<li>
						<a className='font-weight-bold'>Fit en Gezond:</a><a> Hometrainer, vetmeters, weegschalen…</a>
					</li>
					<li>
						<a className='font-weight-bold'>Mobiliteit:</a><a> Looprekken, rollators, rolstoelen en kinderrolstoelen, wandelstokken, wandelstokhouder en krukken…</a>
					</li>
					<li>
						<a className='font-weight-bold'>Comfort:</a><a> Kussens, anti-decubitusmateriaal,…</a>
					</li>
					<li>
						<a className='font-weight-bold'>Badkamerhulpmiddelen:</a><a> Badzitjes, badmatten, rugborstels, toiletstoelen, handgrepen…</a>
					</li>
					<li>
						<a className='font-weight-bold'>Bedden,</a><a> Inclusief matras en zelfoprichter</a>
					</li>
					<li>
						<a className='font-weight-bold'>Aangepaste hulpmiddelen:</a><a> Bestek, drinkbekers, pillendoos...</a>
					</li>
					<li>
						<a className='font-weight-bold'>Orthopedie – Bandagisterie</a>
					</li>
				</ul>
		</span>
		<div className="row">
		<div className="col-6">
		<h3>Ook voor jonge gezinnen ...</h3>
		<span>
				<ul style={{listStyleType:'circle', paddingLeft:'10%'}}>
					<li>
						<a>Antirefluxbedjes</a>
					</li>
					<li>
						<a>Babyweegschaal</a>
					</li>
					<li>
						<a>wiegendoodmonitor</a>
					</li>
					<li>
						<a>afkolfapparaten</a>
					</li>
				</ul>
				<a className='font-weight-bold'>Contacteer uw apotheker</a>
		</span>
		</div>
		<div className="col-6">
			
			<img src={require('../Afbeeldingen/antirefluxbedje.jpg')} className="img-fluid" alt="Responsive"/>
			
		</div>
		</div>
	<img src={require('../Afbeeldingen/thuisgezondheidszorg.jpg')} className="img-fluid" alt="Responsive"/>
	
</div>
		

	);
