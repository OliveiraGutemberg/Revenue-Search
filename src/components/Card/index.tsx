import './styles.css';

export type CardProps = {
  nome: string;
}

export function Card(props: CardProps) {
  return (
    <div className='card'>
        <div className='card-body'>
          <p><b>{props.nome}</b></p>
        </div>
      </div>
  )
}