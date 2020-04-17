import React from "react";
import { Container, Search, User } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars2.githubusercontent.com/u/41308458?s=460&u=6d583943571abe3a0cc0ba1e47f38c0ab9d096a8&v=4" alt="Avatar" />
      Daniel Silvado
    </User>
  </Container>
);


export default Header;