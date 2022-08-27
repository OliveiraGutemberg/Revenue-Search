import React, { useEffect, useState } from 'react';
import "./styles.css"

import { Card, CardProps } from '../../components/Card';

export function Home() {

  const [revenue, setRevenue] = useState<string>('')
  const [keyTime, setkeyTime] = useState<string>();
  const [arrayRevenue, setArrayRevenue] = useState<CardProps[]>([]);

  type ApiResponse = {
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
      if(!search){
        return
      }
      if(revenue.length < 4){
        setArrayRevenue([])
      } else{
        setArrayRevenue(search)
      }

      /*
      if(!arrayRevenue.filter(element => element.nome.toLocaleLowerCase().includes(revenue))){
        //arrayRevenue.push(search)
        //setArrayRevenue([search])
      }*/

    

      //setArrayRevenue(arrayRevenue)
      /*
      if(!arrayRevenue.find(element => element.nome.toLocaleLowerCase().startsWith(revenue))){
        const search:CardProps = await data.find((element:ApiResponse) => element.nome.toLowerCase().includes(revenue))

        
        const objectRevenue = {
          nome: search.nome
        }
        console.log(arrayRevenue)

        for(var i = 0; i == 0 || i < arrayRevenue.length; i++) {
          setArrayRevenue(prev => [...prev, objectRevenue])
        }
      } */

      
          //console.log(arrayRevenue)

          //setArrayRevenue(prevState => [newRevenue])

          //setkeyTime(newRevenue.time)
      
    }
    

    fectchApi()
  }, [revenue]);

 //console.log(prevRevenue)


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

      <button type="button">Pesquisar</button>

      {
        arrayRevenue.map(revenue => (
              <Card
              key= {keyTime}// Gerar um novo key************************
              nome={revenue.nome}
              />
        ))
      }

    </div>

  )
}

