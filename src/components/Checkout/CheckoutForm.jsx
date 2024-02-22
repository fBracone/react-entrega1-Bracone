import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutFormField from "./CheckoutFormField";

const CheckoutForm =()=>{
    const {contextBuyer, setContextBuyer} = useContext(CartContext);

    const [buyer,setBuyer] = useState(contextBuyer);
    const [emailCheck,setEmailCheck] = useState(buyer.email);
    const [error,setError] = useState({name:"", phone:"",email:"",email2:""});
    const [changes,setChanges] = useState(false);
    
    const onSubmit =(event)=>{
        event.preventDefault();

        const localError={}
        if(!buyer.name){
            localError.name="Es necesario ingresar tu nombre y apelldio"
        }
        if(!buyer.phone){
            localError.phone="Es necesario ingresar tu telefono"
        }
        if(!buyer.email){
            localError.email="Es necesario ingresar tu email"
        }
        if(emailCheck==""){
            localError.email2="Vuelve a ingresar tu email"
        }
        if(buyer.email && buyer.email!=emailCheck){
            localError.email2="el email no coincide";
        }else if(buyer.email && buyer.email===emailCheck){
            setContextBuyer(buyer);
        }
        setError(localError)
        setChanges(false);
    }
    const handleChange =(event)=>{
        let key = event.target.name;
        let value = event.target.value; 
        if(key=="email2"){ 
            setEmailCheck(value); 
        }
        else{
            setBuyer({...buyer, [key] : value})
        }
        setChanges(true);
    }

    return(
        <form onSubmit={onSubmit}>
            <CheckoutFormField type="text" name="name" label="Nombre y Apellido" placeholder="Tu nombre" defaultValue={buyer.name} handler={handleChange} error={error.name} />
            <CheckoutFormField type="tel" name="phone" label="Telefono" placeholder="Tu telefono" defaultValue={buyer.phone} handler={handleChange} error={error.phone} />
            <CheckoutFormField type="email" name="email" label="Email" placeholder="tu@email" defaultValue={buyer.email} handler={handleChange} error={error.email}/>
            <CheckoutFormField type="email" name="email2" label="Repeti tu Email" placeholder="repeti tu@email" defaultValue={emailCheck} handler={handleChange} error={error.email2}/>
            <div className="text-end">
            {changes?<button className="btn btn-primary">Confirmar</button>: ""}
            </div>
        </form>
    )
}

export default CheckoutForm;