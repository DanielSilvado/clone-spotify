import React from "react";
import Slider from "rc-slider";
import { Container, Current, Volume } from "./styles";

import VolumeIcon from "../../assets/assets/images/volume.svg";

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://studiosol-a.akamaihd.net/letras/272x272/albuns/e/a/c/3/782891568926534.jpg"
        alt="Album"
      />
      <div>
        <span>Eu me Prosto</span>
        <small>Nivea Soares</small>
      </div>
    </Current>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{display: 'none'}}
        // value={100}
      />
    </Volume>
  </Container>
);

export default Player;
