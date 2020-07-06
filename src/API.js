const URL = `http://localhost:3001/beers`

const getAllBeers = () => {
    return fetch(URL)
    .then(resp => resp.json())
    .catch(error => console.log(error))
}


// const createNewUser = () => {
//     return fetch('http://localhost:3001/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//         },
//         body: JSON.stringify({
//           user: {
//             username: "",
//             password: "",
//           }
//         })
//       })
//         .then(r => r.json())
//         .then(console.log)
// }

export default { getAllBeers }  