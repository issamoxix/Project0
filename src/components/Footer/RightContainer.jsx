import React from "react";
import styled from "styled-components";

const RightContainer = () => {
  return (
    <Container>
      <TextTitle>Know what they say about big projects ?</TextTitle>
      <TextTitleSub>
        Neither do we, We're the Creative team at Project0{" "}
      </TextTitleSub>
      <TextBody>
        If you like cool designs and apps we need to{" "}
        <span style={{ textDecoration: "underline" }}>talk</span>
        <br></br> dolor est ipsum reprehenderit occaecat. Eu eu aliquip do
        labore aliquip velit labore dolore esse consectetur aliqua fugiat id
        ipsum. Sit
      </TextBody>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex: 1;
  }
`;
const TextTitle = styled.h1`
  font-family: "Sharp Sans", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
`;
const TextTitleSub = styled.h3`
  font-family: "Sharp Sans", sans-serif;
  font-size: 2rem;
  color: #ddd;
  margin: 1rem 0;
`;
const TextBody = styled.p`
  font-family: "Sharp Sans", sans-serif;
  font-weight: lighter;
  color: lightgray;
`;
export default RightContainer;
