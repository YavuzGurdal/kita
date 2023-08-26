import React from 'react'

const Uberuns = () => {

    return (
        <div id="content">
            <div className="logoContainer">
                <img src="awo.png" alt="" />
            </div>
            <h2 className="contentTitle">ÜBER UNS</h2>

            <div className="contentWrapper">
                <div className="leftArea" >
                    <h2 className="textTitle">Unsere Einrichtung</h2>
                    {/* <h3 className="subTitle">Wir nehmen kleine Menschen ernst</h3> */}
                    <p className="textHome"> Unsere Kita „Traumland“ liegt in Mitten des
                        Stadtteils Baesweiler und verfügt über 3 Gruppen mit
                        insgesamt 55 Betreuungsplätzen für Kinder im Alter
                        von einem Jahr bis zum Schuleintritt:
                        <br />
                        <br />
                        – Raumschiffgruppe (U3): 10 Betreuungsplätze für
                        Kinder von 1 - 3 Jahren
                        <br />
                        – Sternengruppe (Ü3): 20 Betreuungsplätze für Kinder
                        von 3 Jahren bis zum Schuleintritt
                        <br />
                        – Mondgruppe (Ü3): 25 Betreuungsplätze für Kinder
                        von 3 Jahren bis zum Schuleintritt
                        <br />
                        <br />
                        Wir arbeiten nach dem teiloffenen Konzept, so dass
                        jedes Kind seine feste Stammgruppe hat. Unter der
                        Begleitung von unseren erzieherischen Fachkräften
                        können die Kinder gruppenübergreifend mit anderen
                        Kindern spielen. Wir fördern damit die
                        Entscheidungsfähigkeit, Selbstständigkeit und
                        Selbsttätigkeit.
                        <br />
                        <br />
                        Die Einrichtung ist eine PlusKIta sowie Teilnehmer
                        am Bundesprogramm Sprach Kita – „Sprache als
                        Schlüssel zur Welt“. Der Schwerpunkt der Einrichtung
                        basiert auf der alltagintegrierten Sprachförderung
                        und legt auf die Kultur des wertschätzenden
                        Miteinanders großen Wert.</p>
                </div>
                <div className="rightArea" >
                    <div className="imgWrapper imgWrapperuberuns">
                        <img src="kita1.jpg" alt="" />
                        <img src="kita2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Uberuns