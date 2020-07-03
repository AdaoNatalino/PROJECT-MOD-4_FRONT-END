const URL = `http://localhost:3001/beers`

const getAllBeers = () => {
    return fetch(URL)
    .then(resp => resp.json())
    .catch(error => console.log(error))
}

export default { getAllBeers }