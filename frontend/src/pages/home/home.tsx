import React from "react";
import { FadeIn } from "@app/shared/components/index";
import {
  Container,
  ContainerInner,
  Heading,
  Description,
  Input,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <ContainerInner>
        <FadeIn>
          <Description>Welcome to Wikipedia, the free encyclopedia</Description>
          <Heading>What do you want to visualize?</Heading>
          <Input placeholder="Search Wikipedia" />
        </FadeIn>
      </ContainerInner>
    </Container>
  );
};

export default Home;
