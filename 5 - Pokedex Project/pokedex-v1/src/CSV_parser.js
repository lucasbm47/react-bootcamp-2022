import React, {Component} from 'react';
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

d3.csv("../local_data/pokemon_data.csv", function(data) 
    {
    for (var i = 0; i < data.length; i++) 
    {
        console.log(data[i].Name);
        console.log(data[i].Age);
    }
    });

console.log("Hola!")
class CSV_parser extends Component {
    render(){
        const ditto_link = "https://pokeapi.co/api/v2/pokemon/ditto";

        let url = ditto_link;

                return(
                    <div>
                        <p>Hola - CSV parser</p>
                    </div>
                )
    }
}

export default CSV_parser

