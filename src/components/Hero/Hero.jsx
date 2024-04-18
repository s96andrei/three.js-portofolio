// import React from "react";
// import styled from "styled-components";
// import Navbar from "../Navbar/Navbar";
// import { Canvas } from '@react-three/fiber';
// import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';


// const Section = styled.div`
//   height: 100vh;
//   scroll-snap-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `;
// const Container = styled.div`
//   height: 100vh;
//   scroll-snap-align: center;
//   width: 1400px;
//   display: flex;
//   justify-content: space-between;
// `;

// const Left = styled.div`
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 20px;
// `;

// const Title = styled.h1`
//   font-size: 74px;
//   align-items: center;
//   gap: 10px;
// `;

// const WhatWeDo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const Line = styled.img`
//   height: 5px;
// `;

// const Subtitle = styled.h2`
//   color: #da4ea2;
// `;
// const Desc = styled.p`
//   font-size: 24px;
//   color: lightgray;
// `;

// const Button = styled.button`
//   background-color: #da4ea2;
//   color: white;
//   font-weight: 500;
//   width: 100px;
//   padding: 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   border: none;
// `;

// const Right = styled.div`
//   flex:3;
//   position: relative;
// `;

// const Img = styled.img`
//   width: 800px;
//   height: 600px;
//   object-fit: contain;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   margin: auto;
//   animation: animate 2s infinite ease alternate;

//   @keyframes animate {
//     to {
//       transform: translate3d(42px, -62px, -135px);
//     }
//   }
// `;


// const gitHubLink = "https://github.com/s96andrei";

// const Hero = () => {

//   const handleLinkClick = (link) => {
//     window.open(link, "_blank");
//   };

//   return (
//     <Section>
//       <Navbar />
//       <Container>
//         <Left>
//           <Title>Think. Make. Solve.</Title>
//           <WhatWeDo>
//             <Line src="./img/line.png" />
//             <Subtitle>What I do</Subtitle>
//           </WhatWeDo>
//           <Desc>
//           exploring new technologies, experimenting with innovative designs, or finding novel solutions to complex problems
//           </Desc>
//           <Button onClick={() => handleLinkClick(gitHubLink)}>Learn More</Button>
//         </Left>
//         <Right>
//         <Canvas camera={{fox:25, position:[5,5,5]}}>
//             <OrbitControls enableZoom={false}/>
//             <ambientLight intensity={1}/>
//             <directionalLight position={[200,150,100]}/>
//         <Sphere args={[1.2,500,300]} scale={3}>
//         <MeshDistortMaterial
//         color ="#5d3e80" attach="material" distort={0.6} speed={2}
//         />
//         </Sphere>
       
//         </Canvas>
//           <Img src="./img/Astronaut-Vector.png" />
//         </Right>
//       </Container>
//     </Section>
//   );
// };

// export default Hero;

import React from "react";
import Navbar from "../Navbar/Navbar";
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import "./Hero.css";

const gitHubLink = "https://github.com/s96andrei";

const Hero = () => {
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="hero-section">
      <Navbar />
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">Think. Make. Solve.</h1>
          <div className="hero-what-we-do">
            <img className="hero-line" src="./img/line.png" alt="Line" />
            <h2 className="hero-subtitle">What I do</h2>
          </div>
          <p className="hero-desc">
            exploring new technologies, experimenting with innovative designs, or finding novel solutions to complex problems
          </p>
          <button className="hero-button" onClick={() => handleLinkClick(gitHubLink)}>Learn More</button>
        </div>
        <div className="hero-right">
          <Canvas camera={{fox:25, position:[5,5,5]}}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[200,150,100]}/>
            <Sphere args={[1.2,500,300]} scale={3}>
              <MeshDistortMaterial
                color ="#5d3e80" attach="material" distort={0.6} speed={2}
              />
            </Sphere>
          </Canvas>
          <img className="hero-img" src="./img/Astronaut-Vector.png" alt="Astronaut" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
