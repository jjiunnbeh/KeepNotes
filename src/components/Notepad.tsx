interface NotePadProps
{

    title: string;
    content: string;
}
function NotePad({title, content}: NotePadProps) 
{

    return (
        <div className="notepad">
        <h1>{title}</h1>
        <p>{content}</p>
        </div>
    );
}

export default NotePad;