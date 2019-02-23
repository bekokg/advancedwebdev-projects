//Making API call with ES2017 async function with 'await' keyword

async function hasMostFollowers(...ids) {
  let baseUrl = 'https://api.github.com/users/';
  let urls = ids.map(user => $.getJSON(baseUrl + user));
  let results = await Promise.all(urls);
    let most = results.sort((a,b) => a.followers < b.followers)[0];
    return `${most.name} has most followers with ${most.followers}`;   
  }; 

hasMostFollowers('bekokg','maratgaip','SolderingKnowledge').then((data => console.log(data)))

async function starWarsString(id) {
  let str = '';
  let person = await $.getJSON(`https://swapi.co/api/people/${id}`);
  str += `${person.name} is featured in`;
  let movies = person.films[0];
  let movie = await $.getJSON(movies);
  str += ` ${movie.title}, directed by ${movie.director}`;
  let planets = movie.planets[0];
  let planet = await $.getJSON(planets);
  return str += ` and takes places on the planet ${planet.name}`;
}

// starWarsString(1).then(data => console.log(data));