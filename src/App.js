import React from "react";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/Sidebar/index.jsx";
import Player from "./components/Player/index.jsx";
import Header from "./components/Header/index.jsx";

import { Wrapper, Container, Content } from "./styles/components";

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
