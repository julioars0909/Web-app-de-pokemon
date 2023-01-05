import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokedexInfo.css'
const PokedexInfo = () => {



  const { id } = useParams()

  const [pokemon, setpokemon] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`

    axios.get(URL)
      .then(res => setpokemon(res.data))
      .catch(err => console.log(err))
  }, [id])






  console.log(pokemon)

  return (
    <div className='pokedexInfo' >
      <div className='pokedexInfo-body'>

        <div className={`pokedexInfo--bg-img bg-${pokemon?.types[0].type.name}`}>
          <img className='pokedexInfo-img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        <div className='pokedexInfo-content'>
          <header className='pokedexInfo-header'>
            <span className={`pokedexInfo-order color-${pokemon?.types[0].type.name}`}>{pokemon?.order}</span>
            <h1 className={`pokedexInfo-name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h1>

            <ul className='pokedexInfo-quality'>
              <li className={`pokedexInfo--item-weight border-${pokemon?.types[0].type.name}`}><span className='item-weight'>Weight </span> <span className={`weight-info color-${pokemon?.types[0].type.name}`}>{pokemon?.weight}</span></li>
              <li className={`pokedexInfo--item-weight border-${pokemon?.types[0].type.name}`}><span className='item-weight'>height </span> <span className={`weight-info color-${pokemon?.types[0].type.name}`}>{pokemon?.height}</span></li>

            </ul>
          </header>
          <section className='pokedexInfo-features'>

            <article className='pokedexInfo--type-info'>
              <h4 className='pokedexInfo--type-title'>Type</h4>
              <ul className='pokedexInfo--type-list'>
                {
                  pokemon?.types.map((types) => (
                    <li className={`pokedexInfo--type-item bg--type-${types.type.name}`} key={types.type.order}>{types.type.name}</li>
                  ))
                }
              </ul>
            </article>
            <article className='pokedexInfo--abilities-info'>
              <h4 className='pokedexInfo--abilities-title'>Abilities</h4>
              <ul className='pokedexInfo--abilities-list'>

                <li className={`pokedexInfo--abilities-item border-${pokemon?.types[0].type.name}`} >{pokemon?.abilities[0].ability.name}</li>
                <li className={`pokedexInfo--abilities-item border-${pokemon?.types[0].type.name}`} >{pokemon?.abilities[1].ability.name}</li>
              </ul>
            </article>

          </section>

          <section className='pokedexInfo-stats'>
            <h2 className='pokedexInfo--stats-tittle' >Stats</h2>
            <ul className='pokedexInfo--stats-list'>
              <li className='pokedexInfo--stats-item'>Hp:<span>{pokemon?.stats[0].base_stat}</span></li>
              <progress className='progress-bar' max='100' value={`${pokemon?.stats[0].base_stat}`}></progress>
              <li className='pokedexInfo--stats-item'>Attack: <span>{pokemon?.stats[1].base_stat}</span></li>
              <progress className='progress-bar' max='100' value={`${pokemon?.stats[1].base_stat}`}></progress>
              <li className='pokedexInfo--stats-item'>Defense: <span>{pokemon?.stats[2].base_stat}</span></li>
              <progress className='progress-bar' max='100' value={`${pokemon?.stats[2].base_stat}`}></progress>
              <li className='pokedexInfo--stats-item'>Special Attack: <span>{pokemon?.stats[3].base_stat}</span></li>
              <progress className='progress-bar' max='100' value={`${pokemon?.stats[3].base_stat}`}></progress>
              <li className='pokedexInfo--stats-item'>Special Defense: <span>{pokemon?.stats[4].base_stat}</span></li>
              <progress className='progress-bar' max='100' value={`${pokemon?.stats[4].base_stat}`}></progress>
              <li className='pokedexInfo--stats-item'>Speed: <span>{pokemon?.stats[5].base_stat}</span></li>
              <progress className='progress-bar' max='100' value={`${pokemon?.stats[5].base_stat}`}></progress>

            </ul>
          </section>
        </div>
      </div>

      <footer className='footer'>
        <h2 className='footer-tittle'>Movements</h2>
        <div className='footer-attacks'>
          {
            pokemon?.moves.map(moves => (

              <span className='footer-movements' key={moves.name}>{moves.move.name}</span>


            ))
          }
        </div>
      </footer>


    </div >
  )
}

export default PokedexInfo