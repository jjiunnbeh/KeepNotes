import { ChangeEvent, FormEvent, useState } from "react";

interface CreateNoteProps
{
    onInsert: (note: Notes) => void;
    
}


function CreateNote({onInsert}: CreateNoteProps) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
  {
    const {name, value} = event.target;
    setNote(prevNote => {
        return {
            ...prevNote,
            [name] : value
        }
    })

  }

  function handleSubmit(event: FormEvent)
  {
    onInsert(note);
    setNote({title:"", content:""});


    event.preventDefault();

  }




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" name="title" value={note.title}  onChange={handleChange}/>
        <textarea
          placeholder="Enter you notes here"
          name="content"
          value={note.content}
          onChange={handleChange}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default CreateNote;
