const countryFetch = (searchQuery) => {
  return new Promise((resolve, reject) => {
    fetch(`https://restcountries.com/v3.1/name/${searchQuery}?fields=name,capital,population,flags,languages`)
      .then(response => response.json())
    .then(res => {
        if (res.status !== 404) {
          resolve(res);
          return;
        } 
        reject(res.status);
        
      });
  })};

export default countryFetch;

