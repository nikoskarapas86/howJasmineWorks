/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.com/
 * You will use the following endpoints
 * https://restcountries.com/v2/name/${name} for countries by name
 * https://restcountries.com/v2/regionalbloc/${regionalbloc} for region blocks
 */

/** Create getCountry Function here */


/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionalbloc: string) {
    const countryEndpoints = await getRegionCountries(regionalbloc);
    const promises = countryEndpoints.map((endpoint: any) => 
       axios(`https://restcountries.com/v2/name/${endpoint}`
    ));
    const arr = await Promise.all(promises);
    const capitals = [];
    for (let i=0; i < arr.length; i++) {
        capitals.push(arr[i].data[0].capital);
    }
    return capitals;
}
async function getCountry(name: string) {
    const getApi = await axios(`https://restcountries.com/v2/name/${name}`);
    const data = getApi.data[0];
    return {
        capital: data.capital, 
        region: data.region,
        numericCode: data.numericCode
    };
}
export default {
  getRegionCountries,
  getRegionCapitals,
  getCountry
};
