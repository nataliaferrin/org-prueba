import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {

    const placeholderModificado = `${props.placeholder} del colaborador`

    //DESTRUCTURACION
    const {type = "text"} = props // creo constante type para ver los valores de tipo 
    // en caso de que type sea indefinido le puedo dar un valor por defecto
    console.log(props.type)

    const manejarCambio = (e) => {
       console.log("cambio", e.target.value)    
       props.setValor(e.target.value)
       // traigo por props la funcion setValor desde Formulario.js y coloco e.target.value como parametro 
       //para enviar al resultado de la constante valor, 
       //asi se va actualizando con los datos ingresados por el usuario

    }

    return <div className={`campo campo-${type}`} > 
        <label> {props.titulo.toUpperCase()} </label>
        <input 
            placeholder = {placeholderModificado} 
            required = {props.required}
            value = {props.valor}
            //vinculo el value al estado del componente padre:CampoTexto, por medio de props
            onChange = {manejarCambio}
            //cada vez que el usuario inserte un valor en el input, se va a enviar la funcion onChange
            // por lo qe tengo que vincularlo a una function
            type={type}
        />
        </div>
}

export default Campo;