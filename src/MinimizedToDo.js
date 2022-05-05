import { useEffect, useState } from 'react';
import LineClamp from "@tvanc/lineclamp"
import './MinimizedToDo.css';

function MinimizedToDo(Props)
{   
    let MinimizedToDoTouchStart = 0;
    let NewMinimizedToDoTouchStart = 0;

    let IndexE = Props.Key - 1;

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

    function UnrenderItsSelf()
    {
        Props.BtnConfirmDeletOnClick(IndexE);
    }

    function RenderDeleteElementSecondState()
    {
        setDeleteElementState(()=>{
            return(
                <div className='Confirm' tabIndex={0} onBlur={RenderDeleteElementFirstState}> 
                    <div className='Yes' onClick={UnrenderItsSelf}>
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
        let Ele = document.querySelectorAll('.MinimizedToDoWrapper > .DeleteElementWrapper > .Confirm')[IndexE];
        if(Ele)
        {
            Ele.focus();
        }
    }, [IndexE, DeleteElementState])

    function DragTheMinimizedToDo(Event)
    {
        if(document.querySelectorAll('.MinimizedToDoWrapper > .DeleteElementWrapper > .Confirm')[IndexE])
        {
            document.querySelectorAll('.MinimizedToDoWrapper > .DeleteElementWrapper > .Confirm')[IndexE].blur();
        }
        
        NewMinimizedToDoTouchStart = Event.targetTouches[0].clientX;
        if(MinimizedToDoTouchStart === 0)
        {
            MinimizedToDoTouchStart = NewMinimizedToDoTouchStart;
        }
        let Ele = document.querySelectorAll('.MinimizedToDo')[IndexE];
        let ElementCurrentLeft;
        let AmounthOfDrag = (MinimizedToDoTouchStart - NewMinimizedToDoTouchStart)*-1;

        

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
        if(document.querySelectorAll('.MinimizedToDoContentDescription')[IndexE])
        {
            const ClampDesc = new LineClamp(document.querySelectorAll('.MinimizedToDoContentDescription')[IndexE], {maxLines: 1, ellipsis: '...'});
    
            ClampDesc.apply();
    
            ClampDesc.watch();

        }
    }, [IndexE])

    function ElementClick()
    {
        let Title = document.querySelectorAll('.MinimizedToDoWrapper > .MinimizedToDo > .Content > h2')[IndexE].innerText;
        let Description = document.querySelectorAll('.MinimizedToDoWrapper > .MinimizedToDo > .Content > p')[IndexE].innerText;
        let EndDate = document.querySelectorAll('.MinimizedToDoWrapper > .MinimizedToDo > .Content > span')[IndexE].innerText;
        let MustBeChecked = true;
        if(EndDate === 'None')
        {
            MustBeChecked = false;
        }

        // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

        Props.MinimizedToDoOnClick(Title, Description, EndDate, MustBeChecked, ('MinimizedToDo' + IndexE));
    }

    return(
        <div className='MinimizedToDoWrapper'>
            <div className='DeleteElementWrapper'>
                {DeleteElementState}
            </div>
            <div className='MinimizedToDo' onTouchMove={DragTheMinimizedToDo} onTouchEnd={()=>{MinimizedToDoTouchStart = 0}} onClick={ElementClick}>
                <div className='Content'>
                    <h2>{Props.Title}</h2>
                    <p className='MinimizedToDoContentDescription'>{Props.Description}</p>
                    <span>{Props.EndDate}</span>
                </div>
                <div className='DoneBtn'></div>
            </div>
        </div>
    )
}

export default MinimizedToDo;