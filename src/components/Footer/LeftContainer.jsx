import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
const LeftContainer = () => {
  return (
    <Container>
      <PrjLogo>P0</PrjLogo>
      <Socials>
        <FacebookIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
        <InstagramIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
        <LanguageIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
      </Socials>
      <PagesItem>About Us</PagesItem>
      <PagesItem>Conact Us</PagesItem>
      <PagesItem>Youtube</PagesItem>
      <PagesItem>Project0.net</PagesItem>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1000px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    flex: 0;
  }
`;
const PrjLogo = styled.h1`
  font-family: "Sharp Sans", sans-serif;
  font-size: 5rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.p200};
  flex: 1;
  cursor: pointer;
`;
const Socials = styled.div`
  display: flex;
  color: #ddd;

  flex: 0.5;
`;
const PagesItem = styled.h4`
  color: #ddd;
  font-family: "Sharp Sans", sans-serif;
  font-weight: lighter;
  flex: 0.3;
  cursor: pointer;
`;
export default LeftContainer;
