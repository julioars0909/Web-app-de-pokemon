import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/pokeCard.css'
const PokeCard = ({ url }) => {

  const [Pokemon, setPokemon] = useState()

  useEffect(() => {

    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])



  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${Pokemon.id}`)
  }
  // console.log(Pokemon)

  return (
    <article className={`poke-card border-${Pokemon?.types[0].type.name}`} onClick={handleClick}>
      <header className={`poke-card-header bg-${Pokemon?.types[0].type.name}`}>
        <img className='poke-card-sprite' src={Pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='poke-card-body'>
        <h3 className={`poke-card-name color-${Pokemon?.types[0].type.name}`}>{Pokemon?.name}</h3>
        <ul className='poke-card-types-container'>
          {
            Pokemon?.types.map(type => (
              <li className='poke-card-type' key={type.type.name}>{type.type.name}</li>
            ))
          }
        </ul>

      </section>
      <footer className='poke-card-footer'>
        <ul className='poke-card-stats-container'>
          {
            Pokemon?.stats.map(stat => (
              <li className='poke-card-stat' key={stat.stat.name}>
                <span className='poke-card-label'>{stat.stat.name}</span>
                <span className={`poke-card-number color-${Pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
              </li>

            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default PokeCard