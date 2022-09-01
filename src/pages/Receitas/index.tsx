import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Revenue, RevenueProps } from '../../components/Revenue'
import {Home} from '../Home'

export function Receitas(){
    const [revenue, setRevenue] = useState<any>()
    const { id } = useParams()

    type ApiResponse = {
        _id: any;
        nome: string;
        secao: [];
      }

    useEffect(() => {
        async function fectchApi() {
            const response = await fetch('https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json');
            const data = await response.json(); 
            const search = await data.find((element:ApiResponse) => element._id.$oid.includes(id))
            setRevenue(search)
        }
        
        fectchApi()
        console.log(revenue)
      }, []); 

    return(
        <div className='receita'>

                <div className='card-body'>
                   {
                    < Revenue
                        ingredentes={revenue !== undefined ? revenue.secao[0].conteudo : null}
                        prepearo={revenue !== undefined ? revenue.secao[1].conteudo : null}
                    />
                   }
                </div>

        </div>

        
    )
}