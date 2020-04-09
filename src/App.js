import React from "react";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/Sidebar/index.jsx";
import Player from "./components/Player/index.jsx";

import { Wrapper, Container } from "./styles/components";

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
      </Container>
      <Player />
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
