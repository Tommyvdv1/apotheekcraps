import React from 'react';

class Griepcampagne extends React.Component {

	render() {
		return(
			<div>
				<h1>Vaccinatie griep en pneumokokken</h1>
				<p className='font-weight-bold'>Griep is een heel besmettelijke ziekte</p>
				<p className=''>
					veroorzaakt door een virus dat elke winter opnieuw opduikt. Gemiddeld krijgt 1 op de 10 mensen griep, elk jaar sterven er ook honderden mensen aan complicaties door griep. Vaccineren is de enige manier om je tegen griep en vooral de gevolgen ervan te beschermen!
				</p>
				<p className='font-weight-bold'>Voor wie is vaccinatie tegen griep belangrijk?</p>
				<p className=''>
					→ Volwassenen ouder dan 50 jaar.
				</p>
				<p className=''>
					→ Zwangere vrouwen (2e of 3e trimester).
				</p>
				<p className=''>
					→ Iedereen ouder dan zes maanden die lijdt aan een hart-, long-, lever-, nier- of spieraandoening of diabetes.
				</p>
				<p className=''>
					→ Mensen met een verminderde weerstand.
				</p>
				<p className=''>
					→ Alle personen opgenomen in een woonzorgcentrum of ziekenhuis.
				</p>
				<p className=''>
					→ Iedereen die samenwoont met een van bovengenoemde risicopersonen of zorgt voor kinderen jonger dan zes maanden.
				</p>
				<p className='font-weight-bold'>Wat zijn pneumokokken?</p>
				<p className=''>
					De pneumokok is de bacterie die in veel gevallen verantwoordelijk is voor een longontsteking, ook pneumonie genoemd, en kan bijzonder agressief zijn.
				</p>
				<p className='font-weight-bold'>Wist je dat…</p>
				<p className=''>
					… pneumokokken jaarlijks wereldwijd het leven kosten aan 1.600.000 mensen?
				</p>
				<p className=''>
					… twee derde van alle besmettingen voorkomt bij personen ouder dan 50 jaar?
				</p>
				<p className=''>
					… je kans op overlijden bij pneumokokkeninfecties 1 op 5 is als je ouder bent dan 50?
				</p>
				<p className='font-weight-bold'>Wie kan een longontsteking krijgen?</p>
				<p className=''>
					Iedereen kan een longontsteking krijgen, maar een aantal factoren verhogen het risico:
				</p>
				<p className=''>
					→ Leeftijd boven de 65 jaar.
				</p>
				<p className=''>
					→ 50 jaar of ouder en lijden aan hart-, long-, lever- of nieraandoeningen.
				</p>
				<p className=''>
					→ Aandoeningen die het afweersysteem verzwakken.
				</p>
				<p className=''>
					→ Roken.
				</p>
				<hr/>
				<a>=></a><button className='buttom' style={{cursor: 'pointer'}} onClick={this.props.resetNieuws}> Terug </button>
			</div>
			)
	}
}

export default Griepcampagne;