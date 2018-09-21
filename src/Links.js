import {Huidanalyse} from './Midden/Huidanalyse';
import {Apotheeknieuws} from './Midden/Apotheeknieuws';
import {Team} from './Midden/Team';
import {Huisapotheker} from './Midden/Huisapotheker';

export const links = [
  {
    click: false,
    name: 'Huidanalyse',
    className:'dropdown-item' ,
    href: 'Huidanalyse.html',
    target: 'new',
    item: Huidanalyse,
  },
  {
    click: false,
    name: "Productgamma's",
    className:'dropdown-item' ,
    href: 'Apotheeknieuws.html',
    target: 'new',
    item: Apotheeknieuws,
  },
  {
    click: false,
    name:'Huisbereidingen',
    className:'dropdown-item' ,
    href: 'Huisbereidingen.html',
    target: 'new',
    item: '',
  },
  {
    click: false,
    name: 'Thuisgezondheidszorg',
    className:'dropdown-item' ,
    href: 'Thuisgezondheidszorg.html',
    target: 'new',
    item: '',
  },
  {
    click: false,
    name: 'Huisapotheker',
    className:'dropdown-item' ,
    href: 'Huisapotheker.html',
    target: 'new',
    item: Huisapotheker,
  },
  {
    click: false,
    name: 'Team',
    className:'dropdown-item' ,
    href: 'Team.html',
    target: 'new',
    item: Team,
  }
  ];