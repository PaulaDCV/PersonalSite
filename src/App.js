import './App.css';
import {animated, useSpring} from "react-spring";
import {Navbar} from "./Components/Navbar";
import {Route, Switch} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Home from "./Components/Home";

function App() {
    return (

        <div className="min-h-screen min-w-full  bg-gray-900">
            <Navbar/>
            <div className="min-h-screen flex min min-w-full justify-center content-center">
                <Switch>
                    <Route exact path="/PersonalSite/">
                      <Home/>
                    </Route>
                    <Route exact path="/PersonalSite/about">
                        <About/>
                    </Route>
                    <Route exact path="/PersonalSite/contact">
                        <Contact/>
                    </Route>
                    <Route path="/PersonalSite/projects">
                        <Projects/>
                    </Route>
                </Switch>
            </div>
        </div>
);

}

export default App;
