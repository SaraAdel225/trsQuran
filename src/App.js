import './App.css';
import Header from "./componant/Header/Header";
import Home from "./componant/Home/HomeP";
import About from "./componant/About/About"
import Service from './componant/service/service'; 
import Login from "./componant/loginPage/login"
import Goal from "./componant/Goal/Goal"
import Footer from "./componant/Footer/Footer"
function App() {
  return (
    <div className="App">
      <div className='firstPage'>
          <Header/>
          <Home/>
      </div>
      <About/>
      <Service/>
      <Login/>
      <Goal/>
      <Footer/>
    </div>
  );
}

export default App;
