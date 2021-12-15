import { createMenuTabsTemplate } from './view/menu-tabs-view.js';
import { createFilterTabsTemplate } from './view/filter-tabs-view.js';
import { createTripHeaderTemplate } from './view/trip-header-view.js';
import { createTripsSortTabsTemplate } from './view/trips-sort-view.js';
import { createTripEventTemplate } from './view/trips-list-item-view.js';
import { createTripEditTemplate } from './view/edit-item-view.js';
import { createADdNewTripTemplate } from './view/add-item-view.js';

const siteHeadElement = document.querySelector('.trip-main__trip-controls');
siteHeadElement.insertAdjacentHTML('beforebegin', createTripHeaderTemplate());
siteHeadElement.insertAdjacentHTML('afterbegin', createMenuTabsTemplate());
siteHeadElement.insertAdjacentHTML('beforeend', createFilterTabsTemplate());

const mainTripsContentElement = document.querySelector('section.trip-events');
mainTripsContentElement.insertAdjacentHTML('afterbegin', createTripsSortTabsTemplate());

const tripsListElement = mainTripsContentElement.querySelector('ul.trip-events__list');

for (let i = 0; i < 3; i++) {
  tripsListElement.insertAdjacentHTML('beforeend', createTripEventTemplate());
}

const tripItemForEdit = tripsListElement.querySelector('li.trip-events__item');
tripItemForEdit.insertAdjacentHTML('afterend', createTripEditTemplate());

tripsListElement.insertAdjacentHTML('afterbegin', createADdNewTripTemplate());
