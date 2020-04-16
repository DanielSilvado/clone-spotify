import React from "react";
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from "./styles/global";

import Sidebar from "./components/Sidebar/index.jsx";
import Player from "./components/Player/index.jsx";
import Header from "./components/Header/index.jsx";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes/>
          </Content>
        </Container>
        <Player />
        <GlobalStyle />
      </Wrapper>
    </BrowserRouter>

  );
}

export default App;
