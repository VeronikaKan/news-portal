import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Rightbar from "./components/Rightbar/Rightbar";
import Favourites from "./pages/Favourites/Favourites";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import OneCategory from "./pages/OneCategory/OneCategory";
import Details from "./pages/Details/Details"

const App =()=> {

const token = useSelector(state => state.token)
  return (
   <>
   <Router>
  <Header/>
  <div className="super__wrapper">
 {token? <Sidebar/>:<p></p>}
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:id" element ={<OneCategory/>}/>
    <Route path = '/details/:newsId' element = {<Details/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    <Route path= "/register" element = {<Register/>}/>
    <Route path="/login" element = {<Login/>}/>
   
  </Routes>
  {token? <Rightbar/>:<p></p>}
  </div>
   </Router>
   </>
  );
}

export default App;
