// import React from "react";
// import { useState } from "react";
// import styled from "styled-components";
// import Project1 from "../Project1/Project1";
// import Project2 from "../Project2/Project2";
// import Project3 from "../Project3/Project3";

// const data = [
//   { name: "Chess-JS", link: "https://chess-js-five.vercel.app/" },
//   { name: "Recipe React", link: "https://crud-recipe-app.netlify.app/" },
//   { name: "Game Store", link: "https://game-store-final-project.vercel.app/" },
//   // { name: "Angular Form App", link: "https://example.com/angular-form-app" },
//   // { name: "Angular Memo App", link: "https://example.com/angular-memo-app" },
// ];

// const Section = styled.div`
//   height: 100vh;
//   scroll-snap-align: center;
//   display: flex;
//   justify-content: center;
// `;

// const Container = styled.div`
//   height: 100vh;
//   scroll-snap-align: center;
//   width: 1400px;
//   display: flex;
//   justify-content: space-between;
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const List = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const ListItem = styled.li`
//   font-size: ${(props) => (props.small ? "24px" : "90px")};
//   font-weight: bold;
//   cursor: pointer;
//   color: transparent;
//   -webkit-text-stroke: 1px white;
//   position: relative;

//   ::after {
//     content: "${(props) => props.text}";
//     position: absolute;
//     top: 0;
//     left: 0;
//     color: pink;
//     width: 0px;
//     overflow: hidden;
//     white-space: nowrap;
//   }

//   &:hover {
//     ::after {
//       animation: moveText 0.5s linear both;

//       @keyframes moveText {
//         to {
//           width: 100%;
//         }
//       }
//     }
//   }
// `;

// const ClickHereText = styled.span`
//   margin-top: 20px; 
// `;

// const Right = styled.div`
//   flex: 0.9;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 50px;
// `;

// const Works = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleItemClick = (item) => {
//     setSelectedProject(item);
//   };

//   const handleLinkClick = (link) => {
//     console.log("Clicked item URL:", link);
//     window.open(link, "_blank");
//   };

//   return (
//     <Section>
//       <Container>
//         <Left> 
//           <List>
//             <h1>Projects</h1>
//             {data.map((item, i) => (
//               <ListItem
//                 key={i}
//                 text={item.name}
//                 onClick={() => handleItemClick(item)}
//               >
//                 {item.name}
//               </ListItem>
//             ))}
//           </List>
//         </Left>
//         <Right>
//           {selectedProject && (
//             <React.Fragment>
//               {selectedProject.name === "Game Store" && <Project1 />}
//               {selectedProject.name === "Chess-JS" && <Project2 />}
//               {selectedProject.name === "Recipe React" && <Project3 />}
//             </React.Fragment>
//           )}
//           <List>
//             {selectedProject && (
//               <ListItem small>
//               <ClickHereText onClick={() => handleLinkClick(selectedProject.link)}>
//                 Click here
//               </ClickHereText>
//             </ListItem>
//             )}
//           </List>
//         </Right>
//       </Container>
//     </Section>
//   );
// };

// export default Works;

import React, { useState } from "react";
import Project1 from "../Project1/Project1";
import Project2 from "../Project2/Project2";
import Project3 from "../Project3/Project3";
import "./Works.css";

const data = [
  { name: "Chess-JS", link: "https://chess-js-five.vercel.app/" },
  { name: "Recipe React", link: "https://crud-recipe-app.netlify.app/" },
  { name: "Game Store", link: "https://game-store-final-project.vercel.app/" },
];

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleItemClick = (item) => {
    setSelectedProject(item);
  };

  const handleLinkClick = (link) => {
    console.log("Clicked item URL:", link);
    window.open(link, "_blank");
  };

  return (
    <div className="works-section">
      <div className="works-container">
      <div className="works-left">
          {selectedProject && (
            <React.Fragment>
              {selectedProject.name === "Game Store" && <Project1 />}
              {selectedProject.name === "Chess-JS" && <Project2 />}
              {selectedProject.name === "Recipe React" && <Project3 />}
            </React.Fragment>
          )}
          <ul className="works-list">
            {selectedProject && (
              <li className="works-list-item-small">
                <p
                  className="click-here-text"
                  onClick={() => handleLinkClick(selectedProject.link)}
                >
                  Click here
                </p>
              </li>
            )}
          </ul>
        </div>
        <div className="works-right">
          <ul className="works-list">
            {data.map((item, i) => (
              <li
                key={i}
                className="works-list-item"
                onClick={() => handleItemClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default Works;
