import './styles.css';

export type RevenueProps = {
  ingredentes: string;
  prepearo: string;
}

export function Revenue(props: RevenueProps) {
  return (
        <div className='card-body'>
          <p><b>{props.ingredentes}</b></p>
          <p><b>{props.prepearo}</b></p>
        </div>
  )
}