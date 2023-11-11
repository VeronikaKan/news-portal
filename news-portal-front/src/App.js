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
import Forget from "./pages/Forget/Forget";
import Admin from "./pages/Admin/Admin";
import Contacts from "./components/Contacts/Contacts";

const App =()=> {

const token = useSelector(state => state.token)
  return (
   <>
   <Router>
  <Header/>
  <div className="super__wrapper">
 {token ? <Sidebar/>:<p></p>}
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:id" element ={<OneCategory/>}/>
    <Route path = '/details/:newsId' element = {<Details/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    <Route path= "/register" element = {<Register/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path="/forget" element = {<Forget/>}/>
   <Route path = "/admin" element = {<Admin/>}/>
   <Route path="/contacts" element = {<Contacts/>}/>
  </Routes>
  {token? <Rightbar/>:<p></p>}
  </div>
   </Router>
   </>
  );
}

export default App;
