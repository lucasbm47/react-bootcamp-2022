import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

// This function could be upgraded and require only the Pokemon ID, and use information from the Pokemon API
// This API could also be programmed by us and hosted in the cloud (Azure/AWS), and be used as a side-project too!

function print_pokecard(in_pokecard_props) {
    return <Pokecard 
                    id={in_pokecard_props["id"]} 
                    name={in_pokecard_props["name"]} 
                    type={in_pokecard_props["type"]} 
                    base_experience={in_pokecard_props["base_experience"]}/>;
}

class Pokedex extends Component {

    static defaultProps = {
        pokemon_list : [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render(){
        return(
            <div className = "Pokedex">
                <h1>Pokedex! This is a header!</h1>
                <div className = "Pokedex-cards">
                {this.props["pokemon_list"].map(print_pokecard)}
                </div>
                
            </div>
        )
    }
}

export default Pokedex