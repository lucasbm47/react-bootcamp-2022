function getNum(){
    const outNum = Math.floor(Math.random() * 5) + 1;
    return outNum;
}

class GetInitialPokemon extends React.Component {
	render() {
        let lucky_number = getNum(); //The variables are declared inside the render but outside of the return
		let pokemon_list = ["Charmander","Squirtle","Bulbasaur","Kakuna","Caterpie"];
        
        let chosen_pokemon = pokemon_list[lucky_number-1];
        let pokemon_link = "https://img.pokemondb.net/sprites/sword-shield/icon/" + chosen_pokemon.toLowerCase() + ".png";
        let message;
        
        message = 
            <div>
                <h2>The Pokemon you got is: {chosen_pokemon} !</h2>
                <img src={pokemon_link}/>
            </div>
        
        return (
			<div>
				<h2>Your lucky number is {lucky_number}</h2>
                {message}
			</div>
		);
	}
}

ReactDOM.render(<GetInitialPokemon />, document.getElementById('div1'));
ReactDOM.render(<GetInitialPokemon />, document.getElementById('div2'));
