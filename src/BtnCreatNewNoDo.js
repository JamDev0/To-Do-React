import React from "react";
import './BtnCreatNewNoDo.css';

function BtnCreatNewToDo(Props)
{

    // function CreateNewToDo()
    // {

    // }

    return(
        <button onClick={Props.OnClick} id="BtnCreatNewToDo">{Props.Text}</button>
    )
}

export default BtnCreatNewToDo;