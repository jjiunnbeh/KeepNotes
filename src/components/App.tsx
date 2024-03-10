import '../App.css';
import CreateNote from './CreateNote';
import Footer from "./Footer";
import Header from "./Header";
import NotePad from "./NotePad";
import { MouseEvent, useState } from 'react';



function App()
{
  const[notes, setNotes] =  useState<Notes[]>([]);

  function insertNote(note: Notes) {
    setNotes((prevNotes)=> {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id: number) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }


  

  


  return(
  <>
  <h1><Header /></h1>
  <CreateNote onInsert={insertNote}/>
  {notes.map((note, index) => (
        <NotePad
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
  
  <h1><Footer /></h1>
  </>
  ); 
}
export default App;
