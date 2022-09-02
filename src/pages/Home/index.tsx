import React, { useEffect, useState } from 'react';
import "./styles.css"

import { Card, CardProps } from '../../components/Card';
import { Link } from 'react-router-dom';

export function Home() {
  const [revenue, setRevenue] = useState<string>('')
  const [keyTime, setkeyTime] = useState<string>();
  const [arrayRevenue, setArrayRevenue] = useState<CardProps[]>([]);
  


  type ApiResponse = {
    _id: string;
    nome: string;
    secao: Array<{}>;
  }

  type PrevRevenue = {
    nome: string;
  }

  type ArrayRevenue = [{}]
  
  useEffect(() => {
    async function fectchApi() {
      const response = await fetch('https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json');
      const data = await response.json(); 
      const search = await data.filter((element:ApiResponse) => element.nome.toLowerCase().includes(revenue))
      console.log(search)
      if(!search){
        return
      }
      if(revenue.length < 4){
        setArrayRevenue([])
      } else{
        setArrayRevenue(search)
      }  

    }

    fectchApi()
  }, [revenue]); 


  return (
    <div className="container">
      <header>
        <h1>Receitas</h1>
      </header>
    
      <input 
      type="text"
      placeholder="Digite o nome da receita"
      onChange={e => setRevenue(e.target.value)}
      />
      <br />
      {
        arrayRevenue.map(revenue => (
          <Link className='cardHome' style={{textDecoration: 'none'}} target={'_blank'} to={`receitas/${revenue._id !== undefined ? revenue._id.$oid : null}`}>
            <Card
              key= {revenue._id.$oid}
              nome={revenue.nome}
              _id={revenue._id.$oid}
              />
          </Link>
        ))
      }
  </div>

  )
}

