//IMPORT COMPONENTS
import { ItemCount } from './ItemCount';

//FUNCTIONS AND METHODS
export const ItemListContainer = ({ greeting }) => {
    //RENDERING COMPONENT
    return (
        <main>
            <h1 className="display-1 text-center">{greeting}</h1>
            <ItemCount stockProduct={10} initial="00" onAdd={() => {}} />
        </main>
    )
};