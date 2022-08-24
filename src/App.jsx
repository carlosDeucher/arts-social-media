import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./views/Home"
import Login from "./views/Login";
import Cadastro from "./views/Cadastro"
const App=()=>{
  
 return(
      <Router>
        <Routes>
          <Route path="login" element={<Login/>}></Route>
          <Route path="cadastro" element={<Cadastro  />}></Route>
          <Route path="/" element={<Home  />}></Route>
          
        </Routes>
      </Router>
 )
}
export default App