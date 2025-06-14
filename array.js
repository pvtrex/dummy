const marvel_heros= ["thor", "ironman", "hulk", "spiderman"];
const dc_heros= ["superman", "batman"];
// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);
const allheros = [...marvel_heros, ...dc_heros];
console.log(allheros);