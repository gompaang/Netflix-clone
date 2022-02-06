import React, {Component} from'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import propTypes from 'prop-types';


Movie.prototype={
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired
}


const MovieList=[
  {
    id:1,
    name: "Spiderman:No way Home ",
    image: "https://w.namu.la/s/e70ec5eb34520861de913a92f2b678207f9836c793bc1c1b4287fa2894a0cface4609fbb66ddb94c779f5d79c102e483857cdd0ddae4e42981142e016c557372395c99850761ad16bb23e6f76a297faaa7728b712b17b716bac8d762d5371573"
  },
  {
    id:2,
    name: "Eternals",
    image: "https://www.techm.kr/news/photo/202112/92084_101685_3723.png"
  }
]

function App(){

  
  return(
    <div className="App">
      {MovieList.map(movie=> <Movie name={movie.name} picture={movie.image} />)}
    </div>
  );
}



export default App;
