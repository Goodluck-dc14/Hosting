import React from 'react';
import styled from 'styled-components'
import Home from './Components/Home'
import Body from "./Components/Body"

function App() {
  return (
    <Container>
      <Home/>
      <Body/>
    </Container>
  );
}

export default App;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
`