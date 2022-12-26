import "./App.css";
import {BrowserRouter  , Route , Navigate, Routes} from "react-router-dom"
import { NotFound } from "./pages/404/NotFound";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/register";
import { HomePage } from "./pages/home/homePage";

function App() {

  const logged=true

  return (
  

    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/home" element=
        {
          logged ?
          (<HomePage/>)
          :
          (<Navigate to="/" replace />  )
        }
        />
         
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
