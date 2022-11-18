import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import { Registro } from '../components/Register'

const RoutesApp = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Register" element={<Registro />} />
            </Routes>
        </>
    )
}

export default RoutesApp