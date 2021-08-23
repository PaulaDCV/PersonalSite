import './App.css';
import {animated, useSpring} from "react-spring";
import {Navbar} from "./Components/Navbar";
import {Route, Switch} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Home from "./Components/Home";

function App() {
    const props = useSpring({to: {opacity: 1}, from: {opacity: 0}, config:{duration:1000}});
    return (

        <div className="min-h-screen sm:min-w-full  bg-gray-900">
            <Navbar/>
            <div className="min-h-screen flex min min-w-full justify-center content-center">
                <Switch>
                    <Route exact path="/PersonalSite/">
                      <Home fadeDiv ={props}/>
                    </Route>
                    <Route exact path="/PersonalSite/about">
                        <About/>
                    </Route>
                    <Route exact path="/PersonalSite/contact">
                        <Contact/>
                    </Route>
                    e
                </Switch>
            </div>
        </div>
);

}

export default App;
