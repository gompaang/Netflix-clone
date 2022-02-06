import React, {Component} from'react';
import './Movie.css';
import propTypes from 'prop-types';


function Movie({name, picture}) {

    return (
        <div>
            <h2> {name}</h2>
            <img src={picture} />
        </div>
    );
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://w.namu.la/s/e70ec5eb34520861de913a92f2b678207f9836c793bc1c1b4287fa2894a0cface4609fbb66ddb94c779f5d79c102e483857cdd0ddae4e42981142e016c557372395c99850761ad16bb23e6f76a297faaa7728b712b17b716bac8d762d5371573" ></img>
        );
    }
}

export default Movie;
