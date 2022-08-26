import React, { useEffect, useState } from 'react';
import "./styles.css"

export function Home() {

  const [revenue, setRevenue] = useState<string>('')
  const [prevRevenue, setPrevRevenue] = useState({} as ApiResponse)

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
      const search = await data.find((element:ApiResponse) => element.nome.toLowerCase().includes(revenue) == true)
      
      setPrevRevenue(
        search
      )
    
    }

    fectchApi()
  }, [revenue])
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

      <h1>{prevRevenue.nome}</h1>

    </div>

  )
}

