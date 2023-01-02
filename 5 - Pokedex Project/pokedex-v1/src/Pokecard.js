// We make a JS file for every component, with its class

import React, {Component} from 'react';
import './Pokecard.css';

// Remember that the imports goes before the declaration of variables

const poke_images_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/TBR.png";

class Pokecard extends Component {
    render(){
        
        const pokemonName = this.props["name"]
        let pokecard_url = poke_images_url.replace("TBR",this.props["id"])
        return( //Remember to put the opening parenthesis next to the return() and not in a diff line
            <div className = "Pokecard" >
                <div className = "Pokecard-title"><h1>{this.props["name"]}</h1></div>
                <div><img src = {pokecard_url} alt={pokemonName} /></div>
                <div className = "Pokecard-data"><h1>Type: {this.props["type"]}</h1></div>
                <div className = "Pokecard-data"><h1>Exp: {this.props["base_experience"]}</h1></div>
            </div>
        );
    }
}

export default Pokecard;

