const countries = require('./countries.json');

/** Get only the name of the country given his iso3 code.
 * For example: given the isoCode 'ARG'
 * The response should be: 'Argentina'
 * @param  {array} isoCode
 * @returns {array}
 */

//Ejercicio 1// 
function getCountryNameByIso3(isoCode){
    
    return countries.find(country => country.iso3 === isoCode);


}

/**
 * Get country summary given the ISO3 code. 
 * It has to be a new object containing only the following data:
 * {
 *  name: ,
 *  iso3: ,
 *  iso2: ,
 *  phone_code,
 *  capital: ,
 *  currency: ,
 *  tld: ,
 *  region: ,
 *  emoji: ,
 * }
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountrySummary(isoCode){

    const country = getCountryNameByIso3(isoCode); //reutilizamos el código del primer ejercicio
    
    console.log(country.name)
    console.log(country.iso3)
    console.log(country.iso2)
    console.log(country.phone_code)
    console.log(country.capital)
    console.log(country.currency)
    console.log(country.tld)
    console.log(country.region)
    console.log(country.emoji)
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryNameByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountrySummary('ARG'),
        '\n');

}

main();