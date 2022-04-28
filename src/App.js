import React, { useState, useEffect } from 'react';
import './App.css';
import BtnCreatNewNoDo from './BtnCreatNewNoDo';
import MinimizedToDo from './MinimizedToDo';
import ToDo from './ToDo';

function App() {
  const [ToDoRenderState, setToDoRenderState] = useState(null);

  const [AmounthOfMinimizedToDo, setAmounthOfMinimizedToDo] = useState(1);

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

  function UnrenderMinimizedToDo()
  {
    setMinimizedToDoState(null);
  }

  function BtnSaveOnClickFuncion()
  {
    UnrenderToDo();
  }

  return (
    <div id="App">
      <BtnCreatNewNoDo OnClick={RenderToDo} Text='Criar To-Do'></BtnCreatNewNoDo>
      {ToDoRenderState}
    </div>
  );
}

export default App;
