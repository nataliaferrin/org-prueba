import "./Equipo.css";
import Colaborador from "../Colaborador"; // traigo el componente colaborador (su index automaticamente el .js)
import hexToRgba from"hex-to-rgba";
const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo, id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const objeto = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
//    console.log(colaboradores.length > 0);

    const estiloTitulo = { borderColor: colorPrimario }

    return <> 
        { // Uso fragmentación para que sólo se muestre si:
            colaboradores.length > 0 && // el objeto colaboradores tiene mas de 0 elementos
            <section className="equipo" style={objeto}>
                <input  
                    type="color"
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)} // se muestra de este color
                    onChange={(evento) =>{
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {//regresar un colaborador por cada elemento que exista en este arreglo.
                        colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        actualizarColor={actualizarColor}
                        like={like}
                    /> ) 
                        //recibo  los datos de colaborador, crea la tarjetita:elcomponente colaborador y paasa a crear la siguiente
                        //el elemento Colaborador tendra los datos del objeto colaborador.
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;