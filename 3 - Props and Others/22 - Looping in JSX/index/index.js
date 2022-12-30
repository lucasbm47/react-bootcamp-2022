function getNum(){
    const outNum = Math.floor(Math.random() * 5) + 1;
    return outNum;
}

class ListInitialPokemons extends React.Component {
    render(){ //Dont forget the parenthesis after render()! It's like any other function
        let pokemon_list = ["Charmander","Squirtle","Bulbasaur","Kakuna","Caterpie"];
        return(
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        );
    }
}

class App extends React.Component {
    render(){
        return(
            <div>
                <h1>App header! Trial 3</h1>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('div2'));
