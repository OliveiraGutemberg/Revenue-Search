import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Receitas} from './pages/Receitas';
import "./styles/global.css"

import { CardProps } from './components/Card';

export function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/receitas/:id' element={<Receitas/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}