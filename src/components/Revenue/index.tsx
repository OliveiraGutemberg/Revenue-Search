import React from 'react'
import './styles.css'

export type RevenueProps = {
  ingredentes: string;
  prepearo: string;
}

export function Revenue(props: RevenueProps) {
  return (
    <div className='cardRevenue'>
      <div className='cardRevenue-body pink'>
        <h1>Receita</h1>
        <br />
        <h2>Ingredientes:</h2>
        <p>{props.ingredentes}</p>
        <br />
        <h2>Mode de preparo:</h2>
        <p>{props.prepearo}</p>
      </div>
    </div>
  )
}