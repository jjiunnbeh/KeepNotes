import { MouseEvent} from "react";

interface NotePadProps
{
    id: number;
    title: string;
    content: string;
    onDelete: (id : number) => void;
}

function NotePad({title, content, onDelete, id}: NotePadProps) 
{
    //Click event handler
    const handleClick = (event: MouseEvent)=> {onDelete(id)};


    return (
        <div className="notepad" onClick={(()=>{console.log("hello")})}>
        <p>{title}</p>
        <p>{content}</p>
        <button onClick={handleClick} >🗑️</button>
        </div>
    );
}

export default NotePad;