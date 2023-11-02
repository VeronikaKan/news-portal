import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
const App =()=> {
  return (
   <>
   <Router>
  <Header/>
  <div className="super__wrapper">
  <Sidebar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
<Sidebar/>
  </div>
   </Router>
   </>
  );
}

export default App;
