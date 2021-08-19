import logo from './logo.svg';
import './App.css';
import  {useSpring,animated} from "react-spring";
import {Navbar} from "./Components/Navbar";
function App() {
  const props = useSpring({to: {opacity:1}, from: {opacity:0  }})
  return (
      <div className="min-h-screen bg-gray-900">
        <Navbar/>

        <animated.div style ={props}className="App">
          I will fade in
        </animated.div>
      </div>
  );

}

export default App;
