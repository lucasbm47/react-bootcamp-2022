import React, {Component} from 'react';
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

class CSV_parser extends Component {
    render(){
        const ditto_link = "https://pokeapi.co/api/v2/pokemon/ditto";
        let ditto_data = d3.json(ditto_link);

        const url = ditto_link;
        fetch(url)
        .then(res => res.json())
        .then(out => console.log(out))
        .catch(err => { throw err });
                return(
                    <div>
                        <p>Hola - CSV parser</p>
                    </div>
                )
    }
}

export default CSV_parser

