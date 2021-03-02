function school(num_of_t, category, location, hm, num_of_cooks, color_of_uniform, type_of_sch) {
    this.a = num_of_t;
    this.b = category;
    this.c = location;
    this.d = hm;
    this.e = num_of_cooks;
    this.f = color_of_uniform;
    this.g = type_of_sch; 
} 
/**
 * a-g are properties
 * this key word is used to identify the property of an object
 * we use new key word to create instances of object school
 */
let first_school = new school(40, 'private', 'budo', 'Adilan', 11, 'red', 'mixed');
let second_school = new school(32, 'government-aided', 'mukono', 'Isaac', 9, 'grey', 'single');
let third_school = new school(53, 'private', 'seeta', 'Gary', 4, 'green', 'mixed');
/*
console.log(first_school.a);
console.log(second_school.a);
console.log(third_school.a);
*/
function country(population, gdp, president, land_size, capital_city) {
    this.population = population;
    this.gdp = gdp;
    this.president = president;
    this.land_size = land_size;
    this.capital_city = capital_city;
}
let country_one = new country(30000000, '$750', 'Joanitah', 10000, 'Ggaba');
let country_two = new country(40000000, '$850', 'Ozzy', 20000, 'Bunga');
let country_three = new country(50000000, '$950', 'Hassan', 30000, 'Soya');
/*
console.log(country_one.capital_city);
console.log(country_two.capital_city);
console.log(country_three.capital_city);
*/

function flower(season, smell, num_of_petals, arrangement, gender) {
    this.season = season;
    this.smell = smell;
    this.num_of_petals = num_of_petals;
    this.arrangement = arrangement;
    this.gender = gender;
}
/**
 * new key word is used to initialise an instantiated object 
 */
let flower_one = new flower("summer", "fragrant", 5, "bouquet", "female");
let flower_two = new flower("summer", "fragrant", 5, "bouquet", "male");
/*
console.log(flower_one.gender);
console.log(flower_two.gender);
*/
function shoe(style, color, material, size, price) {
    this.style = style;
    this.color = color;
    this.material = material;
    this.size = size;
    this.price = price;
}
let shoe1 = new shoe('dress shoe', 'black', 'Italian leather', 46, 250000);
let shoe2 = new shoe('sports shoe', 'white', 'leather', 46, 50000);
console.log('style of the shoe:', shoe1.style);
console.log('mizanyo shoe:', shoe2);

/**
 * basics- website, internet, web hosting and world wide web(www), url , uri, http, https
 * website - collection of electronically inter linked web pages/documents created using html
 * www - collection of websites that can accessed over the internet 
 * internet - building block of www and helps to access 1 || more websites(www)
 * web hosting - process of accessible over the internet || making a website public
 * attributes of html page - name, elements/tags, sections, close , size, width, content,
 */

/**
 * DOM 
 */
