const URL = `http://localhost:3001/beers`

const getAllBeers = () => {
    return fetch(URL)
    .then(resp => resp.json())
    .catch(error => console.log(error))
}


const createNewUser = (userData) => {
    fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ user: userData }),
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("jwt", res.jwt);
          return res;
        })
        // .then(console.log);
}

const logInUser = (userData) => {
  fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: userData }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("jwt", res.jwt);
        // this.setState({
        //   loggedIn: true,
        //    loggedInUser: res.user,
        // });
        return res;
      })
      // .then(console.log);
}

export default { getAllBeers, createNewUser, logInUser }  

