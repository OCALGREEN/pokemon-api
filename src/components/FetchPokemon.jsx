import React, {useState} from 'react'

const FetchPokemon = () => {
    // VARIABLES
    const [pokemon, setPokemon] = useState([]); 
    // FUNCTIONS
    const handleFetch = async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=807&offset=20`) 
        const jsonResponse = await response.json()
        setPokemon([...jsonResponse.results])
        console.log("Pokemon: " , pokemon)
    }
    // HTML
    return (
        <div>
            <h1>Fetch Pokemon</h1>
            <button onClick={(e)=>handleFetch()}>Fetch Pokemon</button>
            {
                pokemon?
                <div>
                    {
                        pokemon.map((pkm, i) => {
                            return (
                                <h3 key={i}>{pkm.name}</h3>
                            )
                        })
                    }
                </div>:
                <h3>ERROR</h3>
            }
        </div>
    )
}

export default FetchPokemon 