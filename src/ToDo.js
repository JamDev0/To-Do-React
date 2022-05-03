import React, { useEffect, useState } from "react";
import './ToDo.css';
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';

function ToDo(Props)
{
    const [CalendarToDo, setCalendarToDo] = useState(null);
    const [RenderCalendarToDoCont, setRenderCalendarToDoCont] = useState(0);
    
    useEffect(()=>{
        
    }, []);

    function RenderCalendarToDo()
    {
        if(RenderCalendarToDoCont === 0)
        {
            setCalendarToDo(()=>{
                return(
                    <Datetime inputProps={{'inputMode': 'none', 'className': 'Calendar'}} initialValue={new Date()} dateFormat={"DD/MM/YYYY"} timeFormat={false} closeOnSelect={true}/>
                )
            })

            setRenderCalendarToDoCont(1);
        }
        else if(RenderCalendarToDoCont === 1)
        {
            setCalendarToDo(null);

            setRenderCalendarToDoCont(0);
        }
    }

    function BtnSaveClick()
    {
        let Title = document.querySelectorAll('#ToDoContainer > .Title')[0].innerText;
        let Description = document.querySelector('#ToDoContainerTextArea').value;
        let DateNecessityCheckBox = document.querySelectorAll('#CheckContainer > input')[0];
        let EndDate;

        if(DateNecessityCheckBox.checked)
        {
            EndDate = document.querySelectorAll('#ToDoContainer > .CalendarWrapper > .rdt > .Calendar')[0].value;
        }
        else
        {
            EndDate ='None';
        }

        Props.BtnSaveOnClick(Title, Description, EndDate)
    }

    return(
        <div id="ToDo">
            <div className="Background"></div>
            <div id="ToDoWrapper">
                <div className="Close" onClick={Props.CloseOnClick}></div>
                <div id="ToDoContainer">
                    <span className="Title" role="textbox" data-text="Titulo" contentEditable></span>
                    <label htmlFor="ToDoContainerTextArea">Descrição</label>
                    <div className="TextareaWrapper">
                        <div className="Border Top"></div>
                        <textarea id="ToDoContainerTextArea" resisable='false' placeholder='Descrição simples(ou não) da sua tarefa!'></textarea>
                        <div className="Border Bottom"></div>
                    </div>
                    <div id="CheckContainer">
                        <input type='checkbox' id='Check' onChange={RenderCalendarToDo}></input>
                        <label htmlFor='Check'>Data Limite</label>
                    </div>
                    <div className='CalendarWrapper'>
                        {CalendarToDo}  
                    </div>
                    <button id="BtnSalvar" onClick={BtnSaveClick}>Salvar</button>
                </div>
            </div>
        </div>
    )

    
}

export default ToDo;