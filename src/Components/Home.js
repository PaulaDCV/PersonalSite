import {animated, useSpring} from "react-spring";

export default function Home() {
    const props = useSpring({to: {opacity: 1}, from: {opacity: 0},});
    const headerProps = useSpring(to: {})
    return (
        <div className={"min-w-full"}>
            <animated.div style={props} className="App min-w-full">
                <h1 className={"text-7xl p-40"}>{"<Paula del Castillo Vivero/>"}</h1>
                <div style={{height: 150+"px", overflow: "hidden"}} className={"min-w-full"} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: 100+"%", width: 100+"%"}}><path d="M-72.23,-97.20 C72.80,367.59 424.94,-84.38 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#6366F1"}}></path></svg></div>
                <div className={"min-w-full bg-indigo-500 h-screen"}>hello</div>
            </animated.div>
        </div>)
}