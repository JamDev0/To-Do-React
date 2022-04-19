import React from "react";
import './BtnCreatNewNoDo.css';

function BtnCreatNewToDo(Props)
{

    // function CreateNewToDo()
    // {

    // }

    return(
        <div id="BtnCreatNewToDo">
            <button>{Props.Text}</button>
        </div>
    )
}

export default BtnCreatNewToDo;