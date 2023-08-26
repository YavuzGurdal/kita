import React from 'react'
// import React, { useEffect, useRef } from 'react'

const Projekte = () => {

    return (
        <div id="content">
            <div className="logoContainer">
                <img src="awo.png" alt="" />
            </div>
            <h2 className="contentTitle">PROJEKTE</h2>

            <div className="contentWrapperProjekte">
                {/* <div className="rightArea" > */}
                <div className="imgWrapper imgWrapperProjekte">
                    <img src="zahne.jpeg" alt="" />
                    <h2>Zähne und Zahnarzt</h2>
                </div>
                <div className="imgWrapper imgWrapperProjekte">
                    <img src="feuerwehr.jpeg" alt="" />
                    <h2>Feuerwehr</h2>
                </div>
                <div className="imgWrapper imgWrapperProjekte">
                    <img src="fusganger.jpeg" alt="" />
                    <h2>Fussgängerführerschein für Kinder</h2>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Projekte