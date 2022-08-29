import React from 'react';
import { Revenue, RevenueProps } from '../../components/Revenue'
import {Home} from '../Home'

export function Receitas(){
    return(
        <div className='receita'>
            <div className='card'>
                <div className='card-body'>
                    <h1>Receita</h1>
                   {
                    < Revenue
                        ingredentes={'Coisas de cozinhar'}
                        prepearo='Preparo para fazer'
                    />
                   }
                </div>
            </div>
        </div>

        
    )
}