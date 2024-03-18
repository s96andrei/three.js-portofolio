import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Project1 from '../Project1/Project1'
import Project2 from '../Project2/Project2'
import Project3 from '../Project3/Project3'


const data = [
  "Project 1",
  "Recipe React App",
  "Game Store React App",
  "Angular Form App",
  "Angular Memo App",
  ""
]
// const data = [
//   { name: "Chess-JS", link: "https://chess-js-five.vercel.app/" },
//   { name: "Recipe React App", link: "https://example.com/recipe-react-app" },
//   { name: "Game Store React App", link: "https://example.com/game-store-react-app" },
//   { name: "Angular Form App", link: "https://example.com/angular-form-app" },
//   { name: "Angular Memo App", link: "https://example.com/angular-memo-app" },
// ];

const Section = styled.div`
  height: 100vh;  
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;  
  scroll-snap-align: center;
  width: 1400px;
  justify-content: space-between;
`

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`

const List = styled.ul` 
 list-style: none;
 display: flex;
 flex-direction: column;
 gap: 20px;
`
const ListItem = styled.li`
 font-size: 90px;
 font-weight: bold;
 cursor: pointer;
 color: transparent;
 -webkit-text-stroke: 1px white;
 position: relative;

 ::after {
  content: "${(props)=> props.text}";
  position: absolute;
  top: 0;
  left: 0;
  color: pink;
  width: 0px;
  overflow: hidden;
  white-space:nowrap ;
 }


&:hover {
  ::after{
    animation: moveText 0.5s linear both;

    @keyframes moveText {
      to {
        width: 100%;
      }
    }
  }
}
`

const Right = styled.div`
 flex:1;
`


const Works = () => {

  const [work, setWork] = useState("");
  
  // const handleItemClick = (link) => {
  //   console.log("Clicked item URL:", link);
  //   // window.location.href = link;
  //   window.open(link, '_blank')
  // };
 


  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item, i)=>(
             <ListItem key={i} text={item} onClick={()=>setWork(item)}>{item} </ListItem> 
            ))}
            
          </List>
          {/* <List>
            {data.map((item, i) => (
              <ListItem key={i} text={item.name} onClick={() => handleItemClick(item.link)}>
                {item.name}
              </ListItem>
            ))}
          </List> */}
        </Left>
        <Right>
          {work === "Project 1" ? (<Project1/>) : work === "Project 2" ? (<Project2/>) : work === "Project 3" ? (<Project3/>) : null}
        </Right>
      </Container>
    </Section>
  )
}

export default Works