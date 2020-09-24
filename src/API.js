const URL = `https://beer-shop-london.herokuapp.com/beers`

const getAllBeers = () => {
    return fetch(URL)
    .then(resp => resp.json())
    .catch(error => console.log(error))
}
const getToken = () => localStorage.getItem("jwt");
const getUser = () => JSON.parse(atob(this.getToken().split(".")[1]));

const createNewUser = (userData) => {
    fetch("https://beer-shop-london.herokuapp.com/users", {
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
}

const logInUser = (userData) => {
  fetch("https://beer-shop-london.herokuapp.com/login", {
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
}

const getUserProfile = () => {
  fetch("https://beer-shop-london.herokuapp.com/profile", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((res) => res.json())
    .then(console.log);
};

export default { getAllBeers, createNewUser, logInUser, getUserProfile, getUser }  

