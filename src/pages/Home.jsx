import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setTrainerGlobal } from '../store/slices/Trainer.slice'
import './styles/home.css'
const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }

    return (
        <div className='home'>

            <div className="">
                <img className='home-img' src="/home/pokedex.png" alt="" />

                <h1 className='home-greeting'>Hi Trainer!</h1>

            </div>
            <div className="">
                <p className='home-info'>Give me your name to start</p>
                <form className='home-form' onSubmit={handleSubmit}>
                    <input placeholder='Your name...' className='home-input' id='name' type="text" />
                    <button className='home-btn'>Start</button>
                </form>
            </div>








        </div>
    )
}

export default Home