import logo from './logo.svg';
import { useState, useContext } from 'react';
import './App.css';

function App() {
    const [movies, setMovies] = useState([])
    const [wishList, setWishList] = useState([])
    const [searchArea, setSearchArea] = useState('')
    const fetchMovies = () => {
        console.log(searchArea);
        fetch(
            "https://api.themoviedb.org/3/search/movie?api_key=8da85a40aec5b3ee7fb116f3feba09a9&query=" + searchArea
            )
            .then((res) => res.json())
            .then((res) => res.results)
            .then((res) => {
                setMovies(res);
                console.log(movies);
            });
    }
  
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">
        <form class="d-flex me-5">
              <input class="form-control me-2 searchArea" type="search" placeholder="Search movie title here" aria-label="Search"
                onChange = {event => {
                    setSearchArea(event.target.value)
                }}
              />
              <button class="btn btn-outline-success search-btn" 
              onClick={event => {
                event.preventDefault();
                fetchMovies();
              }}>Search</button>
        </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">WishList</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <div class="container">
          <div class="row">
            {
              movies.map(element => (
                <div class="col-4 mt-5">
                  <div class="card" style={{width: 18 + 'rem', height: 630 +'px'}}>
                    <img src={"http://image.tmdb.org/t/p/w500/" + element.poster_path} class="card-img-top" 
                    style={{height: 400 +'px'}}
                    alt="..."/>
                    <div class="card-body" style={{height: 180 +'px'}}>
                      <h5 class="card-title text-dark">{element.original_title}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">{element.release_date}</li>
                    </ul>
                    <div class="card-body">
                    <button type="button" class="btn btn-dark me-4">Detail</button>
                    <button type="button" class="btn btn-dark">Add to WishList</button>
                      {/* <a href="#" class="card-link">Card link</a> */}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </header>
    </div>
  );
}

export default App;
