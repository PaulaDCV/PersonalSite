import './App.css';
import {animated, useSpring} from "react-spring";
import {Navbar} from "./Components/Navbar";
import {Route, Switch} from "react-router-dom";

function App() {
    const props = useSpring({to: {opacity: 1}, from: {opacity: 0},})
    return (

        <div className="min-h-screen bg-gray-900">
            <Navbar/>
            <Switch>
                <Route path="/PersonalSite/">
                    <animated.div style={props} className="App">
                        <h1>{"<Paula del Castillo Vivero/>"}</h1>
                    </animated.div>
                </Route>
                <Route path="/PersonalSite/about">
                    <about/>
                </Route>
                <Route path="/PersonalSite/contact">
                    <contact/>
                </Route>
                <Route path="/PersonalSite/projects">
                    <projects/>
                </Route>
            </Switch>

        </div>
);

}

export default App;
