import './App.css';
import Works from './components/Works/Works';
import Hero from './components/Hero/Hero';
import Who from './components/Who/Who';
import Contact from './components/Contact/Contact';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;  
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto ;
  scrollbar-width: none; 
  color: white;
  background: url("./img/bg.jpeg");


  &::-webkit-scrollbar{
    display: none;
  }

`

function App() {
  return (
    <Container >
      <Hero />
      <Works />
      <Who />
      <Contact />
    </Container>
  );
}

export default App;
