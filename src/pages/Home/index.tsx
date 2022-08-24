import React, { useEffect, useState } from 'react';
import "./styles.css"

export function Home() {

  const [revenue, setRevenue] = useState<string>('')
  const [prevRevenue, setPrevRevenue] = useState<PrevRevenue>({} as PrevRevenue)
  const [revenueName, setRevenueName] = useState<PrevRevenue[]>([]);

  function handleRevenueName() {
    const newRevenue = {
      nome: prevRevenue
    }
    setRevenueName(newRevenue)
  }

  type ApiResponse = {
    nome: string;
    secao: [];
  }

  type PrevRevenue = {
    nome: string
  }

  type ArrayRevenue = [{}]
  
  useEffect(() => {
    async function fectchApi() {
      const response = await fetch('https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json');
      const data = await response.json(); 
      const search: string = await data.find((element:ApiResponse) => element.nome.toLowerCase().includes(revenue) == true)
      
      setPrevRevenue({
        nome: search
      })
    }

    fectchApi()
  }, [revenue])


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

      <h1>{prevRevenue}</h1>

    </div>

  )
}

