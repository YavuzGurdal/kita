import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import Typed from "typed.js";

const Section = styled.div`
    /* height: 100vh; */
    /* height: calc(100vh - 200px); */
    /* height: calc(100vh - 100px); */
    /* height: calc(100% - 210px); */
    /* height: 100%; */

    min-height: calc(100vh - 200px);

    /* kaydirinca tum componentin sayfayi kaplamasi icin  */
    /* scroll-snap-align: center; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 480px) {
        height: 100%;
        margin-top: 150px;
        justify-content: none;
    }
`;

const Title = styled.h2`
    color: #ffad00;
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 50px;

    @media (max-width: 480px) {
        font-size: 30px;
        font-weight: 600;
        line-height: 40px;
    }
`;

const Container = styled.div`
    height: 100vh;
    /* height: 100%; */
    /* scroll-snap-align: center; */
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 480px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
const Left = styled.div`
    flex: 2; /* ekranda kaplayacagi kolon sayisi */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (max-width: 480px) {
        flex: 1;
        align-items: center;
    }
`;

const TextChange = styled.div`
    /* font-size: 64px; */
`;
const TextTitle = styled.h3`
    font-size: 32px;
    font-weight: 500;
    margin: 5px 0;

    @media (max-width: 480px) {
        text-align: center;
    }
`;
const Text = styled.p`
    font-size: 22px;
    line-height: 32px;
    color: #858687;
    font-weight: 400;
    margin-bottom: 30px;

    @media (max-width: 480px) {
        padding: 20px;
        text-align: center;
        margin-bottom: 10px;
    }
`;
const Name = styled.h2`
    margin: 10px 0;
    color: #ffad00;
    font-size: 36px;
    font-weight: 800;
    line-height: 48px;
`;
const Change = styled.h3`
    font-size: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #da4ea2;
    font-weight: 500;
    margin-bottom: 0;
`;

const Informations = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    /* margin-top: 0; */
    margin-left: 40px;
`;

const Line = styled.img`
    height: 5px;
`;

const InformationText = styled.p`
    font-size: 24px;
    color: #da4ea2;
    margin: 0;
`;

const CloudContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`;

const Cloud = styled.div`
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    /* Yarı çap kadar azaltıldı */
    margin-left: -200px;
    /* Yarı çap kadar azaltıldı */

    background: #5a96e3;

    height: 200px;
    width: 200px;

    box-shadow: #5a96e3 215px -50px 0 -15px, #5a96e3 85px -85px,
        #5a96e3 100px 40px, #5a96e3 200px 60px 0 -40px,
        #5a96e3 285px 20px 0 -20px;

    animation: move 6s ease infinite;
    @keyframes move {
        50% {
            transform: translateY(-30px);
        }
    }
`;

const CloudPcontainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
const Cloudp = styled.p`
    text-align: center;
    color: white;
    font-size: 24px;
    width: 350px;
    padding: 10px;
    height: 100%;
    position: absolute;
    margin-left: 50px;
    margin-top: 40px;

    & span {
        color: #ffad00;
        font-weight: 500;
    }
`;

const Right = styled.div`
    flex: 3; /* ekranda kaplayacagi kolon sayisi */
    position: relative;

    @media (max-width: 480px) {
        /* Adjust styles for mobile devices */
        flex: 1;
        width: 100%;
    }
`;

const Img = styled.img`
    width: 700px;
    height: 900px;
    /* height: 100%; */
    /* height: 1000px; *
    object-fit: contain;
    /* asagidakilerin hepsi resmin ortalanmasi icin */
    /* position: absolute; */
    /* top: 0; */
    /* bottom: 0; */
    /* left: 0; */
    /* right: 0; */
    /* margin: auto; */
    /* margin: 100px auto 0; */
    margin: 40px auto 0;

    @media (max-width: 480px) {
        /* Adjust styles for mobile devices */
        width: 300px;
        height: 100%;
    }

    animation: animate 2s infinite ease alternate;
    @keyframes animate {
        /* 100% { */
        to {
            transform: translateY(20px);
        }
    }
`;

const Home = () => {
    const text = React.useMemo(
        () => [
            "Wichtige Information !!! ",
            "Wichtige Information !!! ",
            "Wichtige Information !!! ",
        ],
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
        <Section>
            <Title>Kita Traumland</Title>
            <Container>
                <Left>
                    {/* <Title>Think. Make. Solve</Title> */}
                    <Name>Unser Bild vom Kind</Name>
                    <TextChange>
                        <TextTitle>Wir nehmen kleine Menschen ernst</TextTitle>
                        <Text>
                            Jedes Kind ist von Geburt an ein einzigartiger,
                            vollwertiger Mensch mit individuellen Bedürfnissen,
                            Fähigkeiten, Begabungen und Wahrnehmungen. Es will
                            die Welt mit allen Sinnen erkunden, will seine
                            Umgebung begreifen, fühlen, ertasten und verstehen.
                            Und es will von Anfang an aktiv mitgestalten. Dies
                            zu erkennen, zu ermöglichen und zu fördern sehen wir
                            bei Denk mit Kita als unsere wichtigste Aufgabe.
                        </Text>

                        <Change>
                            <span className="changespan" ref={textRef}></span>
                        </Change>
                    </TextChange>
                    <Informations>
                        <Line src="line.png" />
                        <InformationText>Streik am 30.08.2023</InformationText>
                    </Informations>

                    <CloudContainer>
                        <Cloud>
                            <CloudPcontainer>
                                <Cloudp>
                                    "Man darf nie verlernen, die Welt mit den
                                    Augen eines Kindes zu sehen!"
                                    <br />
                                    <span>Henry Matisse</span>
                                </Cloudp>
                            </CloudPcontainer>
                        </Cloud>
                    </CloudContainer>
                </Left>
                <Right>
                    {/*<Img src="/img/work.png" /> */}
                    <Img src="kind.jpg" />
                </Right>
            </Container>
            {/* <StarsCanvas /> */}
        </Section>
    );
};

export default Home;