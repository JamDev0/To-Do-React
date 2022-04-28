import React, { useState, useEffect } from 'react';
import './App.css';
import BtnCreatNewNoDo from './BtnCreatNewNoDo';
import MinimizedToDo from './MinimizedToDo';
import ToDo from './ToDo';

function App() {
  const [ToDoRenderState, setToDoRenderState] = useState(null);

  let AmounthOfMinimizedToDo = 0;

  const [MinimizedToDos, setMinimizedToDos] = useState([<MinimizedToDo key={AmounthOfMinimizedToDo} DeleteToDoFunction={UnrenderToDo} MinimizedToDoOnClick={RenderToDo}></MinimizedToDo>])

  function RenderToDo()
  {
    setToDoRenderState(()=>{
      return(
        <ToDo Title='Title' BtnSaveOnClick={BtnSaveOnClickFuncion} CloseOnClick={UnrenderToDo}></ToDo>
      )
    });
  }

  function UnrenderToDo()
  {
    setToDoRenderState(null);
  }

  function BtnSaveOnClickFuncion()
  {
    UnrenderToDo();

  }

  function AddMinimizedToDo()
  {
    // Descobrir como krls fazer isso, testar a ideia do prof, pegar o valor antigo do state que contem o array de componentes e adicionar um novo componente nele
  }
  
  return (
    <div id="App">
      <BtnCreatNewNoDo OnClick={RenderToDo} Text='Criar To-Do'></BtnCreatNewNoDo>
      {MinimizedToDos}
      {ToDoRenderState}
    </div>
  );
}

export default App;
