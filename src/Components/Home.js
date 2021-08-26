import {animated, useSpring} from "react-spring";
import Wave from "react-wavify";
import { useMediaQuery } from 'react-responsive';
import {useEffect, useState} from "react";
import TextTransition, { presets } from "react-text-transition";


export default function Home(props) {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    const [points, setPoints] = useState(2)
    const [index, setIndex] = useState(0);
    const text = ["Paula del Castillo Vivero", "Full-Stack Developer"];

    useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
    return (
        <div className={"min-w-full flex items-center justify-center"}>

            <animated.div style={props.fadeDiv} className=" min-w-full ">

                <div className={" absolute h-screen z-80 "}>
                <TextTransition className ={" relative top-1/3 bg-gray-900 rounded bg-opacity-40 left-1/3  h-100 bg-gray-600 z-40 transform transition duration-500 hover:scale-150 text-gray-400 uppercase text-2xl p-0  lg:text-7xl sm:text-2xl "}
                    text={"Paula del Castillo Vivero" }
                    springConfig={ presets.default }
                  />
                </div>

                <div style={{minHeight: 150+"px"}}></div>
                <div className={"w-full h-screen  flex justify-center items-center"}>
               <div className={" w-full h-screen  relative z-20 "}>
                <Wave className = {"h-screen w-96 opacity-80 z-0" } fill='#AB4967'
                        paused={false}
                        options={{
                            height:60,
                          amplitude: 130,
                          speed: 0.2,
                          points: isMobile? 2 : 5
                        }}
                 />
                 <Wave  className={"  opacity-80 absolute inset-0 flex justify-center items-center z-20"} fill='#71324A'
                        paused={false}
                        options={{
                            height:90,
                          amplitude: 80,
                          speed: 0.2,
                          points: isMobile? 2 : 5
                        }}
                  />
                    <Wave  className={"opacity-80 absolute inset-0 flex justify-center items-center z-10"} fill='#BC8DA0'
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