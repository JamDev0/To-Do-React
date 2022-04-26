import React, { useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css';
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
                    <Datetime inputProps={{'inputMode': 'none'}} initialValue={new Date()} dateFormat={"DD/MM/YYYY"} timeFormat={false} closeOnSelect={true}/>
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

    
    return(
        <div id="ToDo">
            <div className="Background"></div>
            <div id="ToDoWrapper">
                <div className="Close" onClick={Props.CloseOnClick}></div>
                <div id="ToDoContainer">
                    <span role="textbox" data-text="Titulo" contentEditable></span>
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
                    {console.log(Props)}
                    <button id="BtnSalvar" onClick={Props.BtnSaveOnClick}>Salvar</button>
                </div>
            </div>
        </div>
    )
}

export default ToDo;