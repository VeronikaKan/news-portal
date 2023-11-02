import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
const App =()=> {
  return (
   <>
   <Router>
  <Header/>
  <Sidebar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
   </Router>
   </>
  );
}

export default App;
