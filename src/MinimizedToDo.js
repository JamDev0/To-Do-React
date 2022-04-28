import { useEffect, useState } from 'react';
import LineClamp from "@tvanc/lineclamp"
import './MinimizedToDo.css';

function MinimizedToDo(Props)
{   
    let MinimizedToDoTouchStart = 0;
    let NewMinimizedToDoTouchStart = 0;

    const [DeleteElementState, setDeleteElementState] = useState(()=>{
        return(
            <div className='Delete' onClick={RenderDeleteElementSecondState}> 
                <div className='Img'></div>
                <span>Apagar?</span>
            </div>
        )
    })

    function RenderDeleteElementFirstState()
    {
        setDeleteElementState(()=>{
            return(
                <div className='Delete' onClick={RenderDeleteElementSecondState}> 
                    <div className='Img'></div>
                    <span>Apagar?</span>
                </div>
            )
        })
    }

    function RenderDeleteElementSecondState()
    {
        setDeleteElementState(()=>{
            return(
                <div className='Confirm' tabIndex={0} onBlur={RenderDeleteElementFirstState}> 
                    <div className='Yes' onClick={Props.DeleteToDoFunction}>
                        Sim
                        <div className='Img'></div>
                    </div>
                    <div className='No' onClick={RenderDeleteElementFirstState}>
                        Não
                        <div className='Img'></div>
                    </div>
                </div>
            )
        });
    }
    
    useEffect(()=>{
        let Ele = document.querySelectorAll('#MinimizedToDoWrapper > .DeleteElementWrapper > .Confirm')[0];
        if(Ele)
        {
            Ele.focus();
        }
    }, [DeleteElementState])

    function DragTheMinimizedToDo(Event)
    {
        if(document.querySelectorAll('#MinimizedToDoWrapper > .DeleteElementWrapper > .Confirm')[0])
        {
            document.querySelectorAll('#MinimizedToDoWrapper > .DeleteElementWrapper > .Confirm')[0].blur();
        }
        
        NewMinimizedToDoTouchStart = Event.targetTouches[0].clientX;
        if(MinimizedToDoTouchStart === 0)
        {
            MinimizedToDoTouchStart = NewMinimizedToDoTouchStart;
        }
        let Ele = document.querySelector('#MinimizedToDo');
        let ElementCurrentLeft;
        let AmounthOfDrag = (MinimizedToDoTouchStart - NewMinimizedToDoTouchStart)*-1;


        console.log('New Cord: ', NewMinimizedToDoTouchStart);
        

        if(Ele.style.left === '')
        {
            ElementCurrentLeft = 0;
        }
        else
        {
            ElementCurrentLeft = parseFloat(Ele.style.left.replace('px', ''));
        }
        if((ElementCurrentLeft + AmounthOfDrag) > (Ele.clientWidth*0.35))
        {
            Ele.style.left = (Ele.clientWidth*0.35) + 'px';
            MinimizedToDoTouchStart = NewMinimizedToDoTouchStart;
            return
        }
        if((ElementCurrentLeft + AmounthOfDrag) < 0)
        {
            Ele.style.left = '0px';
            MinimizedToDoTouchStart = NewMinimizedToDoTouchStart;
            return
        }
        Ele.style.left = (ElementCurrentLeft + AmounthOfDrag) + 'px'; 
        
        MinimizedToDoTouchStart = NewMinimizedToDoTouchStart;
    }

    useEffect(()=>{
        const ClampDesc = new LineClamp(document.querySelector('#MinimizedToDoContentDescription'), {maxLines: 1, ellipsis: '...'});

        ClampDesc.apply();

        ClampDesc.watch();
    }, [])
    return(
        <div id='MinimizedToDoWrapper'>
            <div className='DeleteElementWrapper'>
                {DeleteElementState}
            </div>
            <div id='MinimizedToDo' onTouchMove={DragTheMinimizedToDo} onTouchEnd={()=>{MinimizedToDoTouchStart = 0}} onClick={Props.MinimizedToDoOnClick}>
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