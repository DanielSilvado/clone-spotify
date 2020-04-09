import React from "react";
import Slider from "rc-slider";
import {
  Container,
  Current,
  Volume,
  Controls,
  Progress,
  Time,
  ProgressSlider,
} from "./styles";

import VolumeIcon from "../../assets/assets/images/volume.svg";
import ShuffleIcon from "../../assets/assets/images/shuffle.svg";
import BackwardIcon from "../../assets/assets/images/backward.svg";
import PlayIcon from "../../assets/assets/images/play.svg";
// import PauseIcon from "../../assets/assets/images/pause.svg";
import ForwardIcon from "../../assets/assets/images/forward.svg";
import RepeatIcon from "../../assets/assets/images/repeat.svg";

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
    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button>
          <img src={BackwardIcon} alt="Backward" />
        </button>
        <button>
          <img src={PlayIcon} alt="Play" />
        </button>
        <button>
          <img src={ForwardIcon} alt="Forward" />
        </button>
        <button>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ED760" }}
            handleStyle={{ boder: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{ display: "none" }}
        // value={100}
      />
    </Volume>
  </Container>
);

export default Player;
