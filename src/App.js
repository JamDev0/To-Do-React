import React, { useState } from 'react';
import './App.css';
import BtnCreatNewNoDo from './BtnCreatNewNoDo';
import ToDo from './ToDo';

function App() {
  const [ToDoRenderState, setToDoRenderState] = useState(null)

  function RenderToDo()
  {
    setToDoRenderState(()=>{
      return(
        <ToDo Title='Title' BtnSaveOnClick={UnrenderToDo} CloseOnClick={UnrenderToDo}></ToDo>
      )
    });
  }

  function UnrenderToDo()
  {
    setToDoRenderState(null);
  }

  return (
    <div id="App">
      <BtnCreatNewNoDo OnClick={RenderToDo} Text='Criar To-Do'></BtnCreatNewNoDo>
      {ToDoRenderState}
    </div>
  );
}

export default App;
