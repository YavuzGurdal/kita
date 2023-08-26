import React from "react";
import { styled } from "styled-components";

const FooterContainer = styled.footer`
    height: 100px;
    background-color: #444;
    color: #fff;
    text-align: center;
    padding: 10px;
    z-index: 99;
`;
const ContactInfo = styled.div`
    /* margin-top: 1rem; */
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InfoItem = styled.p`
    margin: 0 20px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <ContactInfo>
                <InfoItem>Address: Zülpicher Str. 50 · 52349 Düren</InfoItem>
                <InfoItem>
                    E-mail:sekretariat@nelly-puetz-bk.nrw.schule
                </InfoItem>
                <InfoItem>Telefon: 02421 95410</InfoItem>
                <InfoItem>Fax: 02421 95410</InfoItem>
            </ContactInfo>
            <p>
                &copy; {new Date().getFullYear()} KITA TRAUMLAND. Alle Rechte
                vorbehalten.
            </p>
        </FooterContainer>
    );
};

export default Footer;