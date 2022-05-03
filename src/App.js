import React, { useEffect, useState} from 'react';
import './App.css';
import BtnCreatNewNoDo from './BtnCreatNewNoDo';
import MinimizedToDo from './MinimizedToDo';
import ToDo from './ToDo';


let AmounthOfMinimizedToDo = 0;

function App() {
  const [ToDoRenderState, setToDoRenderState] = useState(null);

  const [MinimizedToDos, setMinimizedToDos] = useState([]);

  function RenderToDo(Title, Description, Date, MustBeChecked)
  {
    setToDoRenderState(()=>{
      return(
        <ToDo Title={Title} MustBeChecked={MustBeChecked} Description={Description} Date={Date} BtnSaveOnClick={BtnSaveOnClickFuncion} CloseOnClick={UnrenderToDo}></ToDo>
      )
    });

  }
  
  useEffect(()=>{
    if(ToDoRenderState)
    {
      let Props = ToDoRenderState.props;
      console.log(Props)
      document.querySelectorAll('#ToDoContainer > .Title')[0].innerText = Props.Title;
      document.querySelector('#ToDoContainerTextArea').value = Props.Description;

      // Arrumar isso aqui em baixo

      if(Props.MustBeChecked)
      {
        document.querySelector('#Check').checked = true;
        document.querySelector('#Check').dispatchEvent(new Event('onchange'));
        document.querySelectorAll('#ToDoContainer > .CalendarWrapper > .rdt > .Calendar')[0].value = Props.Date;
      }
    }
  }, [ToDoRenderState]);

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
      <BtnCreatNewNoDo OnClick={()=>{RenderToDo(null, null, null)}} Text='Criar To-Do'></BtnCreatNewNoDo>
      {MinimizedToDos}
      {ToDoRenderState}
    </div>
  );
}

export default App;
