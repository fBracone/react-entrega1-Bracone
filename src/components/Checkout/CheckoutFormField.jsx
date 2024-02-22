const CartFormField =({type,name,label,placeholder,defaultValue,handler,error})=>{
    let classes="form-control"
    if(error){ classes += " is-invalid"}; 
    return(
        <div className="mb-2">
            <div className="input-group mb-1">
                    <span className="input-group-text"><label htmlFor={name}>{label}</label></span>
                    <input type={type} className={classes} placeholder={placeholder} name={name} id={name} defaultValue={defaultValue} onChange={handler}/>
            </div>
            <div className="text-danger align-text-top">{error}</div>
        </div>
    )
}

export default CartFormField;