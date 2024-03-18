import React, { useRef, useState } from 'react';
import styled from "styled-components";
import Map from "../Map/Map";
import emailjs from '@emailjs/browser';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 50px;

`;
const Left = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
`;

const Form = styled.form`
width: 500px;
display: flex;
flex-direction: column;
gap: 25px;

`;

const Title = styled.h1`
font-weight: 200;
`;

const Input = styled.input`
padding: 20px;
border: none;
border-radius: 5px;
background-color: #e8e6e6;
`;

const TextArea = styled.textarea`
padding: 20px;
border: none;
border-radius: 5px;
background-color: #e8e6e6;
`;

const Button = styled.button`
background-color: #da4ea2;
font-weight: bold;
border: none;
border-radius: 5px;
cursor: pointer;
color: white;
padding: 20px;;
`;


const Right = styled.div`
flex:1;
`;

// const Contact = () => {
    
//     const ref = useRef()
//     const [succes, setSucces] = useState(null);
    
//     const handleSubmit = (e) => {
//     e.preventDefault()
    
//     emailjs.sendForm('service_exqcvnr', 'template_c2sudue', ref.current, 'L4qLNeMQlzyHyRFdc')
//     .then((result) => {
//         console.log(result.text);
//         setSucces(true)
//     }, (error) => {
//         console.log(error.text);
//         setSucces(false)
//     });
//     }



//   return <Section>
//     <Container>
//       <Left>
//         <Form ref={ref} onSubmit={handleSubmit}>
//           <Title>Contact Me</Title>
//           <Input placeholder="Name" name="name"/>
//           <Input placeholder="Email" name="email" />
//           <TextArea placeholder="Write your message" name="message" rows={10}/>
//           <Button  type="submit">Send</Button>
//           {succes && 
//           "Your message has been sent. I'll get back to you soon :)"}
//         </Form>
//       </Left>
//       <Right>
//         <Map/>
//       </Right>
//     </Container>
//   </Section>;
// };


const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_exqcvnr', 'template_c2sudue', ref.current, 'L4qLNeMQlzyHyRFdc')
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          ref.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success && "Your message has been sent. I'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};
export default Contact;
