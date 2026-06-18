
import './App.css'
import {Link} from "react-router";

function App() {

  return (
    <>
        <Link to="/shopping">Shopping</Link>
        <Link to="/reference">Reference</Link>
        <Link to="/kanban">Kanban</Link>
        <Link to="/table">Table</Link>
    </>
  )
}

export default App
