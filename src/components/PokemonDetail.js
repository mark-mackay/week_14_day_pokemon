import React from 'react';

const PokemonDetail = ({pokemon}) => {
    if(!pokemon) return null;
    return(
    
    <div>

        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default}/>
    

    </div>

    );
}

export default PokemonDetail;