import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

import {
  BrowserRouter,
  // Router,
  Route,
  Routes,
  // useNavigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  // const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element= {user ? <Home /> : <Register/>}/>
          
        
        <Route path="/register" element= {!user ? <Register /> : <Home/>} />
         
        
        <Route path="/login" element={!user ? <Login /> : <Home/>}/>
        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
              
            
            <Route path="/series" element={ <Home type="series" />} />
             
            
            <Route path="/watch" element={  <Watch />} />
            
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
