import './styles.css';

export type CardProps = {
  _id: any;
  nome: string;
}

export function Card(props: CardProps) {
  return (
        <div className='card-body pink'>
          <p><b>{props.nome}</b></p>
          <p hidden><b>{props._id}</b></p>
        </div>
  )
}