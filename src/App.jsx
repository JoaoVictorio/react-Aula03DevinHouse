// 1 o APP está importando o Card  
// importando o Card, ele é o componente Pai do CARD. 
// O pai pode passar dados para o filho, e isso pode  ocorrer através do PROPS;

import './App.css'
import Card from "./components/Card"


function App() { // 5 aqui está nosso elemento pai que é o App que está importando 
// o Card e quando eu faço a passagem de PROP eu consigo receber lá na 
// function Card(PROPS); pois o Card é o filho do App;

//6 como faz isso? Num componente funcional existe apenas um parametro que a gente recebe dessa função, 
// funções podem ou ñ receber parametros. no caso do componente funcional ela não deixa de ser uma função, 
// existe um unico parametro que ela recebe: o PROPS;

// 7 essas props nada mais é do que um obj's que contém a lista de cada um desses atributos que eu defini na function App()
// se eu ñ defini nenhum, ñ virá nenhum e se eu defini pelo menos um eu consigo acessar esse cara aqui que eu defini.

  return (
    // 2 os atributos src alt className são atributos, PROPS são esses atributos, mas não são apenas atributos fixos como no HTML(atributos padrões)
    <>
      <img width={300} src="https://img.freepik.com/fotos-gratis/sedan-de-luxo-vermelho-na-estrada_114579-5079.jpg?size=626&ext=jpg" alt='' className=''  />
      {/* 3 na minha Tag personalizada (CARD) eu posso adicionar e alterar quantos atributos eu quiser, Exemplo do atributo título abaixo: */}
      {/*4  titulo é uma PROP e PROP nada mais é que eu criar meu próprio atributo, definir ele e passar um dado p/ dentro dele (Titulo do card)  */}
      <Card titulo="Titulo do card modificado" subtitulo="Subtitulo do meu Card" />
      <Card titulo="Titulo do Card 2" />
    </>
  )
}

export default App
