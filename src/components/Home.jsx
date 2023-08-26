import React, { useEffect, useRef } from 'react'
import Typed from "typed.js";

const Home = () => {

    const text = React.useMemo(
        () => ["Wichtige Information !!!", "Wichtige Information !!!", "Wichtige Information !!!"],
        []
    );
    const textRef = useRef();

    useEffect(() => {
        const options = {
            strings: text,
            // stringsElement: "#typed-string",
            typeSpeed: 70,
            showCursor: true,
            cursorChar: "|",
            backSpeed: 80,
            smartBackspace: false,
            shuffle: true,
            startDelay: 1000,
            backDelay: 1000,
            loop: true,
            loopCount: Infinity,
        };

        const typed = new Typed(textRef.current, options);

        return () => {
            typed.destroy();
        };
    }, [text]);

    return (
        <div id="content">
            <div className="logoContainer">
                <img src="awo.png" alt="" />
            </div>
            <h2 className="contentTitle">KITA TRAUMLAND</h2>

            <div className="contentWrapper">
                <div className="leftArea" >
                    <h2 className="textTitle">Unser Bild vom Kind</h2>
                    <h3 className="subTitle">Wir nehmen kleine Menschen ernst</h3>
                    <p className="textHome">Jedes Kind ist von Geburt an ein einzigartiger, vollwertiger Mensch mit individuellen Bedürfnissen, Fähigkeiten, Begabungen und Wahrnehmungen. Es will die Welt mit allen Sinnen erkunden, will seine Umgebung begreifen, fühlen, ertasten und verstehen. Und es will von Anfang an aktiv mitgestalten. Dies zu erkennen, zu ermöglichen und zu fördern sehen wir bei Denk mit Kita als unsere wichtigste Aufgabe.</p>
                    <div>
                        <h3 className='changespanh3'>
                            <span className="changespan" ref={textRef}></span>
                        </h3>
                    </div>
                    <div className='lineWrapper'>
                        <img src="line.png" alt="" />
                        <h2>Streik am 30.08.2023</h2>
                    </div>
                    <div className='cloudContainer'>
                        <div className="cloud">
                            <div className="cloudpContainer">
                                <p className="cloudp">"Man darf nie verlernen, die Welt mit den
                                    Augen eines Kindes zu sehen!"
                                    <br />
                                    <span>Henry Matisse</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightArea" >
                    <div className="imgWrapper">
                        <img src="kind.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home