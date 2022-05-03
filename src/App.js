import React, { useState} from 'react';
import './App.css';
import BtnCreatNewNoDo from './BtnCreatNewNoDo';
import MinimizedToDo from './MinimizedToDo';
import ToDo from './ToDo';


let AmounthOfMinimizedToDo = 1;

function App() {
  const [ToDoRenderState, setToDoRenderState] = useState(null);

  const [MinimizedToDos, setMinimizedToDos] = useState([<MinimizedToDo BtnConfirmDeletOnClick={UnrenderMinimizedToDo} Key={AmounthOfMinimizedToDo} key={AmounthOfMinimizedToDo} DeleteToDoFunction={UnrenderToDo} MinimizedToDoOnClick={RenderToDo}></MinimizedToDo>])

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

  function BtnSaveOnClickFuncion(Title, Description, EndDate)
  {
    UnrenderToDo();

    AmounthOfMinimizedToDo++;

    setMinimizedToDos([...MinimizedToDos, <MinimizedToDo Title={Title} Description={Description} EndDate={EndDate} BtnConfirmDeletOnClick={UnrenderMinimizedToDo} Key={AmounthOfMinimizedToDo} key={AmounthOfMinimizedToDo} DeleteToDoFunction={UnrenderToDo} MinimizedToDoOnClick={RenderToDo}></MinimizedToDo>]);
  }

  function UnrenderMinimizedToDo(IndexOfTheMinimized)
  {
    AmounthOfMinimizedToDo = AmounthOfMinimizedToDo - 1;
    setMinimizedToDos([...MinimizedToDos.slice(IndexOfTheMinimized, IndexOfTheMinimized)]);
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
