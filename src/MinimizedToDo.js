import { useEffect, useState } from 'react';
import LineClamp from "@tvanc/lineclamp"
import './MinimizedToDo.css';

function MinimizedToDo(Props)
{   
    const [DeleteElementState, setDeleteElementState] = useState(RenderDeleteElementSecondState)

    function RenderDeleteElementFirstState()
    {
        return(
            <div className='Delete'> 
                <div className='Img'></div>
                <span>Apagar?</span>
            </div>
        )
    }

    function RenderDeleteElementSecondState()
    {
        return(
            <div className='Confirm'> 
                <span className='Yes'>Sim</span>
                <span className='No'>Não</span>
            </div>
        )
    }

    useEffect(()=>{
        const ClampDesc = new LineClamp(document.querySelector('#MinimizedToDoContentDescription'), {maxLines: 1, ellipsis: '...'});

        ClampDesc.apply();

        ClampDesc.watch();
    }, [])
    return(
        <div id='MinimizedToDoWrapper'>
            {DeleteElementState}
            <div id='MinimizedToDo'>
                <div className='Content'>
                    <h2>Title</h2>
                    <p id='MinimizedToDoContentDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend hendrerit nisi ac lobortis. Sed a eros vestibulum, commodo sapien ut, molestie nunc. Pellentesque pretium volutpat lacus, sed tempor augue egestas ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <span>01/01/2001</span>
                </div>
                <div className='DoneBtn'></div>
            </div>
        </div>
    )
}

export default MinimizedToDo;