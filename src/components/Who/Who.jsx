import React from "react";
import styled from "styled-components";
import Cube from '../Cube/Cube';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
  align-items: center;
  gap: 10px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{fox:25, position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
        <Cube/>
        </Canvas>
        </Left>
        <Right>
          <Title>Think outside the box</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who I am</Subtitle>
          </WhatWeDo>
          <Desc>
            a creative front-end developer with a passion for crafting visually stunning and intuitive user interfaces.
          </Desc>
          <Button>See my work</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
