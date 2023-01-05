import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from '../Pokedex/Pagination'
import PokeCard from '../Pokedex/PokeCard'
import './styles/pokedex.css'
const Pokedex = () => {

    const { trainer } = useSelector(state => state)

    const [Pokemons, setPokemons] = useState()
    const [types, setTypes] = useState()
    const [typeSelected, setTypeSelected] = useState('All pokemons')

    const navigate = useNavigate()

    useEffect(() => {

        if (typeSelected !== "All pokemons") {

            axios.get(typeSelected)
                .then(res => setPokemons(res.data.pokemon.map(e => e.pokemon)))
                .catch(err => console.log(err))

        } else {
            const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=999999999'
            axios.get(URL)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))
        }


    }, [typeSelected])

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
            .then(res => setTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])

    console.log(typeSelected)

    const handleSubmit = e => {
        e.preventDefault()
        const input = (e.target.search.value.trim().toLowerCase())

        navigate(`/pokedex/${input}`)
    }

    const handleChange = e => {
        setTypeSelected(e.target.value)
        setPage(1)
    }

    // logica de paginacion
    const [Page, setPage] = useState(1)
    const [PokePerPage, setPokePerPage] = useState(8)
    const initialPoke = (Page - 1) * PokePerPage
    const finalPoke = Page * PokePerPage
    const maxPage = Pokemons && Math.ceil(Pokemons.length / PokePerPage)



    return (

        <div className='pokedex'>

            <h2 className='pokedex-info'><span className='pokedex-noun'> Welcome {trainer}</span>, here you can find your favorite pokemon</h2>
            <form className='pokedex-form' onSubmit={handleSubmit}>
                <input className='pokedex-input' id='search' type="text" />
                <button className='pokedex-btn'>Search</button>

                <select className='pokedex-select' onChange={handleChange}>
                    <option className='pokedex-options' value="All pokemons">All pokemons</option>
                    {
                        types?.map(type => (
                            <option className='pokedex-option' key={type.url} value={type.url}>{type.name}</option>
                        ))
                    }
                </select>
            </form>
            <Pagination
                maxPage={maxPage}
                Page={Page}
                setPage={setPage}
            />

            <div className="poke-container">
                {
                    Pokemons?.slice(initialPoke, finalPoke).map(poke => (
                        <PokeCard key={poke.url}
                            url={poke.url}
                        />
                    ))
                }
            </div>
            <Pagination
                maxPage={maxPage}
                Page={Page}
                setPage={setPage}
            />
        </div>
    )
}

export default Pokedex