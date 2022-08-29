import './styles.css';

export type CardProps = {
  _id: any;
  nome: string;
}

export function Card(props: CardProps) {
  return (
        <div className='card-body'>
          <p><b>{props.nome}</b></p>
          <p hidden><b>{props._id}</b></p>
        </div>
  )
}
// Descobrir como criar rotas com parametros(rota/rota:parametro) em react.
// Usar o id da receita como parametro na rota para acessa-lo na segunda page.