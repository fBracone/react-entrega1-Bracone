import React from "react";

const FormComponent = ({formData, handleChange, onSubmit,error}) =>{
    return(
        <form onSubmit={onSubmit}>
            {
                Object.keys(formData).map((key, i) =>{
                    <div className="mb-3">
                        <label htmlFor={key} className="form-label">{key}</label>
                        <input
                            type="text"
                            name={key}
                            id={key}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                        {   error[key] && <span className="invalid-feedback">{error[key]}</span> }
                    </div>    
                })
            }
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )

}

export default FormComponent;