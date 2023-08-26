import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
    /* height: 100vh; */
    height: calc(100vh - 200px);
    /* height: calc(100vh - 100px); */

    /* kaydirinca tum componentin sayfayi kaplamasi icin  */
    /* scroll-snap-align: center; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h2`
    color: #ffad00;
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 50px;
`;

const Container = styled.div`
    height: 100vh;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 2; /* ekranda kaplayacagi kolon sayisi */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const TextChange = styled.div`
    padding-right: 40px;
`;

const Text = styled.p`
    font-size: 22px;
    line-height: 32px;
    color: #858687;
    font-weight: 400;
    margin-bottom: 30px;
`;
const Name = styled.h2`
    margin: 5px 0;
    color: #ffad00;
    font-size: 36px;
    font-weight: 800;
    line-height: 48px;
`;

const Line = styled.img`
    height: 5px;
    align-items: center;
`;

const Right = styled.div`
    flex: 2; /* ekranda kaplayacagi kolon sayisi */
    position: relative;
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Uberuns = () => {
    return (
        <Section>
            <Title>Über Uns</Title>
            <Container>
                <Left>
                    <Name>Unsere Einrichtung</Name>
                    <TextChange>
                        <Text>
                            Unsere Kita „Traumland“ liegt in Mitten des
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
                            Miteinanders großen Wert.
                        </Text>
                    </TextChange>
                </Left>
                <Right>
                    <Img src="kita.jpg" />
                    <Img src="kita2.jpg" />
                </Right>
            </Container>
        </Section>
    );
};

export default Uberuns;