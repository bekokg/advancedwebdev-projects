//Making API call using ES2015 Promises and Promise.all

function getMostFollowers(...usernames) {
  let baseUrl = 'https://api.github.com/users/';
  let urls = usernames.map(username => $.getJSON(baseUrl + username));
    return Promise.all(urls).then(function(data) {
      let max = data.sort((a,b) => a.followers < b.followers)[0]
      return `${max.name} has the most followers with ${max.followers}`;
    });
}

getMostFollowers('colt', 'tigarcia', 'elie').then(data => console.log(data))

function starWarsString(num) {
  let str = '';
  return $.getJSON(`https://swapi.co/api/people/${num}/`)
  .then(function(data) {
    str += `${data.name} is featured in `;
    let filmData = data.films[2];
    return $.getJSON(filmData);
  }).then(function(res) {
    str += `${res.title}, directed by ${res.director}`;
    let planet = res.planets[2];
    return $.getJSON(planet);
  }).then(function(data) {  
    str += ` and takes places on planet '${data.name}'.`;
    return str;
  }).then(finalStr => finalStr)
}

 starWarsString(1).then(data => console.log(data));