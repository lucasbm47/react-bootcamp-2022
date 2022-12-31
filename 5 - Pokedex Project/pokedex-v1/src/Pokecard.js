// We make a JS file for every component, with its class

import React, {Component} from 'react';
import './Pokecard.css' 
import CSV_parser from './CSV_parser';

// Remember that the imports goes before the declaration of variables

const poke_images_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png";

class Pokecard extends Component {
    render(){
        const pokemonName = this.props["name"]
        return( //Remember to put the opening parenthesis next to the return() and not in a diff line
            <div className = "Pokecard" >
                <h1>{this.props["name"]}</h1>
                <img src = {poke_images_url} alt={pokemonName} />
                <h1>Type: {this.props["type"]}</h1>
                <h1>Exp: {this.props["exp"]}</h1>
                <h1><CSV_parser/></h1>
            </div>
        );
    }
}

export default Pokecard;

