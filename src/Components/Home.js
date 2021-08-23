import {animated, useSpring} from "react-spring";
import Wave from "react-wavify";
import { useMediaQuery } from 'react-responsive';
import {useEffect, useState} from "react";

export default function Home(props) {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const [points, setPoints] = useState(2)

    return (
        <div className={"min-w-full "}>

            <animated.div style={props.fadeDiv} className="App min-w-full">
                <h1 className={"text-2xl p-20 lg:text-7xl sm:text-7xl"}>{"<Paula del Castillo Vivero/>"}</h1>
                <div className={"w-full h-screen  flex justify-center items-center"}>
               <div className={" w-full h-screen  relative z-20 "}>
                <Wave className = {"h-screen w-96 opacity-80" } fill='#AB4967'
                        paused={false}
                        options={{
                            height:60,
                          amplitude: 130,
                          speed: 0.2,
                          points: isMobile? 2 : 5
                        }}
                 />
                 <Wave  className={"  opacity-80 absolute inset-0 flex justify-center items-center z-10"} fill='#71324A'
                        paused={false}
                        options={{
                            height:90,
                          amplitude: 80,
                          speed: 0.2,
                          points: isMobile? 2 : 5
                        }}
                  />
                    <Wave  className={"  opacity-80 absolute inset-0 flex justify-center items-center z-0"} fill='#BC8DA0'
                        paused={false}
                        options={{
                            height:70,
                          amplitude: 150,
                          speed: 0.2,
                          points: isMobile? 2 : 5
                        }}
                  />
                   </div>
    </div>

            </animated.div>
        </div>)
}