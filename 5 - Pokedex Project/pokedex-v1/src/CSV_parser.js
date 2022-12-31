import React, {Component} from 'react';
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

async function load(in_url) {
    let obj = await (await fetch(in_url)).json();
    console.log(obj);
}

let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
load(url);

class CSV_parser extends Component {
    render(){
        const ditto_link = "https://pokeapi.co/api/v2/pokemon/ditto";
        let ditto_data = d3.json(ditto_link);

        let url = ditto_link;

                return(
                    <div>
                        <p>Hola - CSV parser</p>
                    </div>
                )
    }
}

export default CSV_parser

