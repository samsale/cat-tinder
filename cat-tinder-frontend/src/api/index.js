const BASE = 'http://localhost:3000'

let getCats = function() {
	return fetch(BASE + '/cats')
		.then((resp) => {
      let json = resp.json()
			return json
		})
}

let createCat = function(cat) {
  console.log("I've been called");
	return fetch(BASE + '/cats', {
		body: JSON.stringify(cat),  // <- we need to stringify the json for fetch
		headers: {  // <- We specify that we're sending JSON, and expect JSON back
			'Content-Type': 'application/json'
		},
		method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
	})
		.then((resp) => {
			let json = resp.json()

			return json
		})
}

export  {
  getCats,
createCat}
