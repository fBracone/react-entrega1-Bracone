import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext";
import { collection, getFirestore } from "firebase/firestore";
import FormComponent from "./FormComponent/FormComponent";

const CartDetail = () => {
    const [buyer, setBuyer]= useState({
        name:"",
        email:""
    })

    const [error, setError]= useState({
        name:"",
        email:""
    })

    const {cart, removeItem}= useContext(CartContext);

    const handleChange = (e) =>{
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        const purchase = {
            buyer,
            items: cart
        }
        const localError = {};
        for(key in buyer){
            if(!buyer[key]){
                localError[key] = `${key} is required`
            }
        }
        if(Object.keys(localError).length>0){
            setError(localError);
        }
        else{
            const db = getFirestore();
            const collRef = collection(db, "orders");
    
            addDoc(colRef,purchase)
            .then(res => console.log(res))
            .catch(err => console.error(err));
        }
    }

    return(
        <div>
            <h2>Carrito de Compras</h2>
            <FormComponent formData={buyer} handleChange={handleChange} onSubmit={onSubmit} error={error} />
        </div>
    )
}

export default CartDetail;