import '../App.css';
import Footer from "./Footer";
import Header from "./Header";
import NotePad from "./NotePad";

function App()
{

  let num = 5
  return(
  <>
  <h1><Header /></h1>
  <NotePad />
  <h1><Footer /></h1>
  </>
  );
  
}
export default App;
