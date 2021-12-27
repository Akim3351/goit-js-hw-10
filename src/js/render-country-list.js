export default function renderCountryList(countries) {
    const countriesListMarkup = countries.map(country =>
        `
        <li class="country-item">
            <img class="country-flag" src=${country.flags.svg}>
            </img>
            <span class="country-name__official">
                ${country.name.official}
            </span>
        </li>
        `)
        .join("");
    return countriesListMarkup;
}