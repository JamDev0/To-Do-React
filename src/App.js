import React, { useEffect, useState} from 'react';
import './App.css';
import BtnCreatNewNoDo from './BtnCreatNewNoDo';
import MinimizedToDo from './MinimizedToDo';
import ToDo from './ToDo';


let AmounthOfMinimizedToDo = 0;

function App() {
  const [ToDoRenderState, setToDoRenderState] = useState(null);

  const [MinimizedToDos, setMinimizedToDos] = useState([]);

  function RenderToDo(Title, Description, Date, MustBeChecked, Origen)
  {
    setToDoRenderState(()=>{
      return(
        <ToDo Origen={Origen} Title={Title} MustBeChecked={MustBeChecked} Description={Description} Date={Date} BtnSaveOnClick={BtnSaveOnClickFuncion} CloseOnClick={UnrenderToDo}></ToDo>
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
      <BtnCreatNewNoDo OnClick={()=>{RenderToDo(null, null, null, null, 'Btn')}} Text='Criar To-Do'></BtnCreatNewNoDo>
      {MinimizedToDos}
      {ToDoRenderState}
    </div>
  );
}

export default App;
