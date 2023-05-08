import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Outlet } from "react-router-dom";
const App =() => {
  return(
  <div className="App">
    <Header/>
    <Outlet/>
    <Footer/>
  </div>
  );
}


export default App;