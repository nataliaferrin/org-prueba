import {useState} from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial);
    console.log(props)
    const[mostrar, actualizarMostrar] = useState(true);

    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar); // lo q ponga dentro de etos () va a ser
                // el valor que se le va a asignar al estado, en este caso Mostrar
    }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}


export default MiOrg;

