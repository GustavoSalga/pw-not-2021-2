import * as React from 'react'

import {PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView} from '../pokemon'

function PokemonInfo({pokemonName}) {
  // 🐨 Have state for the pokemon (null)

    // const [pokemon, setPokemon] = React.useState(null)
    // const [error, setError] = React.useState(null)
    // const [status, setStatus] = React.useState('idle') // Estado ocioso (idle)

    /* VAMOS SUBSTITUIR AS VARIÁVEIS DE ESTADO ACIMA POR UMA ÚNICA ABAIXO QUE É UM OBJETO*/
    const [state, setState] = React.useState({
      pokemon: null,
      error: null,
      status: 'idle'
    })

    // Criando variáveis avulsas somente-leitura para facilitar o trabalho com variável de estado objeto acima, usando desestruturação.
    const { pokemon, error, status } = state

  // 🐨 use React.useEffect where the callback should be called whenever the
  // pokemon name changes.
  // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!

    React.useEffect(() => {

  // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
      if(! pokemonName) return

  // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null
      // setPokemon(null)
      // setError(null)
      // setStatus('pending') // Estado pendente (pending)
      /* Ao invés de chamar 3 variáveis de estado que existiam e foram substituidas por uma unica de objeto, fazemos da forma abaixo, atualizando 3 valores de estado ao mesmo tempo.*/
      setState({pokemon: null, error: null, status: 'pending'})

  // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
  //   fetchPokemon('Pikachu').then(
  //     pokemonData => { /* update all the state here */},
  //   )

      fetchPokemon(pokemonName).then( // Deu certo a busca remota
        pokemonData => { 
          // console.log(pokemonData)
          // setPokemon(pokemonData)
          // setStatus('resolved') // Estado resolvido com sucesso (resolved)
          
          /* 1° ABORDAGEM QUE FUNCIONA
          let stateTemp = {...state} // Tira uma cópia do state
          stateTemp.pokemon = pokemonData
          stateTemp.status = 'resolved'
          setState(stateTemp) */

          // 2° ABORDAGEM QUE FUNCIONA, MAIS ABREVIADA
          setState({...state, pokemon: pokemonData, status: 'resolved'}) // Tira uma cópia do state no {...state}
        }

      ).catch ( // deu errado a busca remota
      error => {
        // setError(error) 
        // setStatus('rejected') // Estado rejeitado com erro (rejected)
        setState({...state, error: error, status: 'rejected'})
      }
      )

    }, [pokemonName])

  // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
  //   1. no pokemonName: 'Submit a pokemon'
  //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. pokemon: <PokemonDataView pokemon={pokemon} />

    // Depois que criamos a variável de estado Status, podemos simplificar o código abaixo
    /* if(error) return (
      <div role="alert">
      There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
      </div>
    )
    else if(! pokemonName) return 'Submit a Pokemon'
    else if (pokemonName && ! pokemon) return (
      <PokemonInfoFallback name={pokemonName} />
    )
    else return (
      <PokemonDataView pokemon={pokemon} />
    )
 */
    switch(status) {
      case 'rejected':
        return(
          <div role="alert">
          There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
        </div>
        )
  
      case 'idle':
        return 'Submit a pokemon'
  
      case 'pending':
        return (
            <PokemonInfoFallback name={pokemonName} />
        )
      
      case 'resolved':
        return (
          <PokemonDataView pokemon={pokemon} />
        )
  
    }
}

  // Código simplificado
  
export default function Exercicio06() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}