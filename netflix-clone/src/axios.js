import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

//instance.get('/food-movies')  =====>>> "https://api.themoviesdb.org/3/food-movies";

export default instance;