import React, { useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css';
import './ToDo.css';
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';

function ToDo(Props)
{
    const [CalendarToDo, setCalendarToDo] = useState(null);
    const [RenderCalendarToDoCont, setRenderCalendarToDoCont] = useState(0);
    const [CalendarToDoCloseElement, setCalendarToDoCloseElement] = useState(null);
    
    useEffect(()=>{
        
    }, []);

    function RenderCalendarToDo()
    {
        if(RenderCalendarToDoCont === 0)
        {
            setCalendarToDo(()=>{
                return(
                    <Datetime onOpen={RenderCalendarToDoCloseElement} inputProps={{'inputMode': 'none'}} initialValue={new Date()} dateFormat={"DD/MM/YYYY"} timeFormat={false} closeOnSelect={true}/>
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

    function RenderCalendarToDoCloseElement()
    {
        setCalendarToDoCloseElement(()=>{
            return(
                <div className="Close">
                </div>
            )
        });
    }
    
    return(
        <div id="ToDoWrapper">
            <div className="Background"></div>
            <div id="ToDoContainer">
                <h1>{Props.Title}</h1>
                <h2>Descrição</h2>
                <textarea resisable='false' placeholder='Descrição simples(ou não) da sua tarefa!'></textarea>
                <div id="CheckContainer">
                    <input type='checkbox' id='Check' onChange={RenderCalendarToDo}></input>
                    <label htmlFor='Check'>Data Limite</label>
                </div>
                <div className='CalendarWrapper'>
                    {/* {CalendarToDoCloseElement}
                    Fazer um botão para fechar o calendario */}
                    {CalendarToDo}  
                </div>
                <button id="BtnSalvar">Salvar</button>
            </div>
        </div>
    )
}

export default ToDo;