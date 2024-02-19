import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider =({children})=> {
    const [cartProducts, setCartProducts] = useState([]);
    

    const totalCartProducts =()=>{
        return cartProducts.reduce((total,item)=> total+= item.quantity,0);
    }

    const totalPriceProducts =()=>{
        return cartProducts.reduce((total,item)=> total+= item.quantity*item.price,0);
    }

    const removeItem =(item) => {
        const filteredCartProducts = cartProducts.filter((existingItem)=>existingItem.id != item.id);
        setCartProducts(filteredCartProducts);
    }

    const addItem =( item, quantity) => {
        if(isInCart(item.id)){
            const index = cartProducts.findIndex((existingItem)=>existingItem.id == item.id);
            const updatedCartProducts = [...cartProducts];
            updatedCartProducts[index].quantity=quantity;
            setCartProducts([...updatedCartProducts]);
        }
        else{
            setCartProducts([...cartProducts,{...item, quantity}]);
        }
    }

    const clear = () =>{
        setCartProducts([]);
    }

    const isInCart = (id) =>{
        return cartProducts.some((item) => item.id === id);
    }

    return(
        <CartContext.Provider value={{cartProducts, setCartProducts, totalCartProducts, totalPriceProducts, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider> 
    );
}

export default CartContextProvider;