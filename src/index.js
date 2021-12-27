import debounce from 'lodash/debounce';
import Notiflix from 'notiflix';
import countryFetch from './js/fetch-countries';
import renderCountryCard from './js/render-country-card';
import renderCountryList from './js/render-country-list';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const refs = {
    input: document.querySelector('input#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {

    event.preventDefault();
    const searchQuery = refs.input.value.trim();

    if (searchQuery === '') {
        clearData()
        return;
    };

    countryFetch(searchQuery)
    .then(processResult)
    .catch(onFetchError)
}

function processResult(res) {

    if (res.length === 0 || res.status === 404) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
    }

    if (res.length === 1) {
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = renderCountryCard(res);
    }

    if (res.length > 1 && res.length < 10) {
        refs.countryList.innerHTML = renderCountryList(res);
        refs.countryInfo.innerHTML = '';
    }

    if (res.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        clearData()
    }
}

function onFetchError() {
    Notiflix.Notify.failure('Oops, there is no country with that name');
}

function clearData() {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
};