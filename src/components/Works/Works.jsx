import React from 'react'
import styled from 'styled-components'


// const data = [
//   "Development",

// ]

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
`

const List = styled.ul`
 
`
const ListItem = styled.li`
 
`

const Right = styled.div`
 flex:1;
`


const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Works