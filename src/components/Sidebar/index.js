import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="/playlist">Navegar</a>
        </li>
        <li>
          <a href="/playlist">Rádio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="/playlist">Seu Dauly Mix</a>
        </li>
        <li>
          <a href="/playlist">Tocados recentemente</a>
        </li>
        <li>
          <a href="/playlist">Músicas</a>
        </li>
        <li>
          <a href="/playlist">Álbuns</a>
        </li>
        <li>
          <a href="/playlist">Artistas</a>
        </li>
        <li>
          <a href="/playlist">Estações</a>
        </li>
        <li>
          <a href="/playlist">Arquivos Locais</a>
        </li>
        <li>
          <a href="/playlist">Vídeos</a>
        </li>
        <li>
          <a href="/playlist">Podcasts</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="/playlist">Melores do rock</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
