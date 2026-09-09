import "./Pokemon.css"
import { useEffect, useState } from "react";

export const FetchApi = ()=> {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const Api = 'https://pokeapi.co/api/v2/pokemon/pikachu';
    const pokemonApi = ()=> {
        fetch(Api)
        .then((res)=> {
            res = res.json();
            return res;
        })
        .then((data)=> {
            console.log(data);
            setPokemon(data);
            setLoading(false);
        })
        .catch((error)=> {
            console.log(error);
            setError(error);
            setLoading(false);
        });
    };

    useEffect(()=> {
        pokemonApi();
    }, []);

    console.log(pokemon);

    if(loading)
        return(
            <div className="relative h-32 bg-gray-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center">
          <div className="absolute inset-0 bg-white/80 dark:bg-black/80 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Loading content...
              </p>
            </div>
          </div>
        </div>
        );

        if(error)
            return(
                <div>
                    <h1>Error: {error.message}</h1>
                </div>
            );
    
    return(
        <section className="container">
            <div>
            <h1>Lets catch pokemon</h1>
            <ul className="card-demo">
                <li className="pokemon-demo">
                    <figure>
                        <img 
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                        className="pokemon-image"
                        />
                    </figure>
                    <h1>{pokemon.name}</h1>
                        <div className="grid-three-cols">
                            <p className="pokemon-info">
                                Height: <span> {pokemon.height} </span>
                            </p>
                            <p className="pokemon-info">
                                Weight: <span> {pokemon.weight}</span>
                            </p>
                            <p className="pokemon-info">
                                speed: <span>{pokemon.stats[5].base_stat}</span>
                            </p>
                        </div>
                </li>
            </ul>
        </div>
        </section>
    );
};