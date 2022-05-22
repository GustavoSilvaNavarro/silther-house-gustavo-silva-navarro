import { UniqueOrder } from './UniqueOrder';

export const Order = ({ ordenes }) => {
  return (
    <div className='card-body'>
        {ordenes.map(item => (
            <UniqueOrder key={item.id} orden={item} />
        ))}
    </div>
  )
};