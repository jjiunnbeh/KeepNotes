import '../App.css';
import Footer from "./Footer";
import Header from "./Header";
import NotePad from "./NotePad";
import Notes from "./Notes";


function App()
{
  
  


  let num = 5
  return(
  <>
  <h1><Header /></h1>
  {Notes.length != 0 && Notes.map(Note => <NotePad key={Note.id} title={Note.title} content={Note.content}/>)}
  <h1><Footer /></h1>
  </>
  );
  
}
export default App;
