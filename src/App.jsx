
import './App.css'
import {Link} from "react-router";
import {login} from "./api/api-call.js";

function App() {

  return (
    <>
        <Link to="/shopping">Shopping</Link>
        <Link to="/reference">Reference</Link>
        <Link to="/kanban">Kanban</Link>
        <Link to="/table">Table</Link>
        <button onClick={() => login()}>Login</button>
    </>
  )
}

export default App
