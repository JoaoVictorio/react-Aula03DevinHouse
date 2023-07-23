// 6 como faz isso? Num componente funcional existe apenas um parametro que a gente recebe dessa função, 
// funções podem ou ñ receber parametros. no caso do componente funcional ela não deixa de ser uma função, 
// existe um unico parametro que ela recebe: o PROPS;

// 7 essas props nada mais é do que um obj's que contém a lista de cada um desses atributos que eu defini na function App()
// se eu ñ defini nenhum, ñ virá nenhum e se eu defini pelo menos um eu consigo acessar esse cara aqui que eu defini.
import Titulo from "./Titulo"

function Card(props){
  return (
    <div>
      <Titulo titulo={props.titulo} />
      <h3>{props.subtitulo}</h3>
    </div>
  )
}

export default Card