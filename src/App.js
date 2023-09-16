import {useState} from "react"; // nos ayuda a trabajar con estados de react
import { v4 as uuid } from 'uuid'; // importo destructurando versión 4 as=como 
// importo versión 4, pero internamente lo conozco internamente uuidv4 (lo mando a llamar con ese nombr de funcion)
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false); 
  // quiero que react esuche lo que sucede 
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    equipo: "Front-End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Front-End",
    foto: "https://github.com/nataliaferrin.png",
    nombre: "Natalia Ferrín",
    puesto: "Front-end Developer",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }
  ]);

  const [equipos, actualizarEquipos] = useState([
      //coloco los equipos para que react los customice, si hay algun cambio va a actualizarlo
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },  
    { 
      id: uuid(),
      titulo:"Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    { 
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
      ])

 // va a hacer referencia a colaboradores y su actualización
 // va a ser un array, una lista: lo iniciamos como un arreglo vacío

  console.log(uuid())

  // Ternario --> condicion ? SeMuestra : noSeMuestra 
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario) //opuesto a la funcion, no muestra el form
    }
  
  //REGISTRAR COLABORADOR:
  // creo funcion para crear colaborador y enviarlo al padre
  const registrarColaborador = (colaborador) => { // recibe todo lo que referencia al colaborador
    console.log("Nuevo colaborador ", colaborador)
    actualizarColaboradores([...colaboradores, colaborador]) 
    // esa funcion va a recibir el nuevo valor y lo va a actualizar
    //...copia el arreglo colaboradores y agregar el nuevo colaborador
  }
  
  // ELIMINAR COLABORADOR:
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  } // esta funcion tiene que ser enviada desde app a equipos (por props)


  // ACTUALIZAR COLOR:

  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) =>{  // se ejecuta por cada equipo
      if(equipo.id === id){ // si el titulo del equipo es el mismo que recibimos en la funcion
        equipo.colorPrimario = color // a este equipo en su propiedad colorPrimario va a ser igual al color nuevo que estamos 
      }

      return equipo //regresamos el equipo
    })

    actualizarEquipos(equiposActualizados) // le indicamos a react que hay nuevos datos
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    console.log("like", id)
    // cre constante para actualizar el like de los colaboradores
    const colaboradoresActualizados = colaboradores.map((colaborador) => { // creo funcion que tomara los colaboradoeres
      if (colaborador.id === id){ // si el id del colaborador es igual al id que le estan dando like
        colaborador.fav = !colaborador.fav // si es false se convierte en true, si es true se convierte en false
      }
      return colaborador // regresa el colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/*      {mostrarFormulario ? <Formulario /> : <></>}     */}
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador = {registrarColaborador}
        crearEquipo = {crearEquipo}
      />}
      {/*Por equipo quiero enviar el titulo de cada equipo, lo hago con metodo map*/}
      <MiOrg cambiarMostrar={cambiarMostrar}/>

{/* creamos componente, recorriendo el array equipos con metodo map,
colocamos arrow function para que retorne un elemento Equipo por cada objeto dentro del array */}
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores = { colaboradores.filter (colaborador => colaborador.equipo === equipo.titulo )} //le agrego todo el array de colaboradores
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like = {like}
          /> 
          //creo props:datos, cuyo valor sera el elemento con la className equipo, p que tome 
          // creo key con el valor usando js{} elmento.la prop que quiero tomar como referencia para el componente
          )
      }
        <Footer />
    </div>
  );


}
// la misma funcion puedo expresarla como: 
//{
//  equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />)
//}

export default App;
