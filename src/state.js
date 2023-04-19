import { reactive } from "vue"
import axios from "axios"

export const state = new reactive({
  searchMovieBaseApi: "https://api.themoviedb.org/3/search/movie",
  searchTvShowBaseApi: "https://api.themoviedb.org/3/search/tv",
  apiKey: "95f13a6c93fac8b27d2ad3300a029225",
  searchText: "",
  fetchedMovies: [],
  fetchedTvShows: [],
  generateMovie() {
    let url = `${this.searchMovieBaseApi}?api_key=${this.apiKey}&query=${this.searchText.toLowerCase()}`;
    axios.get(url)
    .then(response => {
      console.log(response.data.results);
      this.fetchedMovies = response.data.results;
    })
    .catch(error => {
      console.error(error.message);
    })
  },
  generateTvShows() {
    let url = `${this.searchTvShowBaseApi}?api_key=${this.apiKey}&query=${this.searchText.toLowerCase()}`;
    axios.get(url)
    .then(response => {
      console.log(response.data.results);
      this.fetchedTvShows = response.data.results;
    })
    .catch(error => {
      console.error(error.message);
    })
  }
})