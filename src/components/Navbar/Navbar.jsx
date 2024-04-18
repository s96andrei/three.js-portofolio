// import React from "react";
// import styled from "styled-components";

// const Section = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const Container = styled.div`
//   width: 1400px;
//   display: flex;
//   justify-content:space-between;
//   align-items: center;
//   padding: 10px 0px ;
// `;

// const Logo = styled.img`
//   height: 20px;
// `;

// const Links = styled.div`

//   display: flex;
//   align-items: center;
//   gap:50px;
//   `;

// const Icons = styled.div`
// display: flex;
//   align-items: center;
//   gap:20px;
//   `;

// const Icon = styled.img`
// width: 20px;
// cursor: pointer;
// `;

// const Button = styled.button`
//  cursor: pointer;
//  width: 100px;
//  padding: 10px;
//  background-color: #da4ea2;
//  color: white;
//  border-radius: 5px;
//  border: none;
// `;

// const linkedInLink = "https://www.linkedin.com/in/andrei-stefanica-605992232/";

// const Navbar = () => {
//   const handleLinkClick = (link) => {
//     window.open(link, "_blank");
//   };

//   return (
//     <Section>
//       <Container>
//         <Links>
//           <Logo src="./img/a-logo-color.svg" />
//         </Links>
//         <Icons>
//           <Icon src="./img/search.png" />
//           <Button onClick={() => handleLinkClick(linkedInLink)}>Hire Now</Button>
//         </Icons>
//       </Container>
//     </Section>
//   );
// };

// export default Navbar;


import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const linkedInLink = "https://www.linkedin.com/in/andrei-stefanica-605992232/";

  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="navbar-section">
      <div className="navbar-container">
        <div className="navbar-links">
          <img className="navbar-logo" src="./img/a-logo-color.svg" alt="Logo" />
        </div>
        <div className="navbar-icons">
          <img className="navbar-icon" src="./img/search.png" alt="Search Icon" />
          <button className="navbar-button" onClick={() => handleLinkClick(linkedInLink)}>Hire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
