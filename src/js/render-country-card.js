export default function renderCountryCard(countries) {
    const countryCardMarkup = countries.map(country => {
        const languagesList = Object.values(country.languages)
        const languagesListMarkup = languagesList
            .map((language =>
                `<li class="language-item">${language}</li>`
            ))
            .join(", ");
    
        const flagSvg = country.flags.svg;
        const nameOfficial = country.name.official;

        const oneCountryMarkup =
            `
            <h2 class="country-name">
                <img class="country-flag" src=${flagSvg}>
                </img>
                <span>
                    ${nameOfficial}
                </span>
            </h2>
            <div class="country-data">
                    <p class="country-info__name">Capital: <span class="country-info__descr">${country.capital}</span></p>
                    <p class="country-info__name">Population: <span class="country-info__descr">${country.population}</span></p>
                <div class="country-info__languages">
                    <p class="country-info__name">Languages:</p>
                    <ul class="country-languages__list">
                        ${languagesListMarkup}
                    </ul>
                </div>
            </div>
        `
        return oneCountryMarkup
    });
    return countryCardMarkup;
};