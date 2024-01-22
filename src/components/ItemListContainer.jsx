import ItemCount from './ItemCount'
const ItemListContainer = ({greeting}) =>{
    return(
        <div className="container pt-3">
            {greeting}
            <ItemCount startCount={1} stock={10} />
        </div>
    )
}

export default ItemListContainer;