import React from "react";

import Wave from "react-wavify";

import { BoxContato, WaveContainer } from "./styled";

export function Footer() {
  const linkedin = "https://www.linkedin.com/in/mariana-bonan-49b0b5211/";
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <div
        style={{ position: "relative", height: "340px", marginTop: "100px" }}
      >
        <WaveContainer level={50}>
          <Wave
            fill="#A97CE5"
            paused={false}
            opacity="0.30"
            options={{
              height: 0,
              amplitude: 15,
              speed: 0.3,
              points: 3,
            }}
          />
        </WaveContainer>
        <WaveContainer level={50}>
          <Wave
            fill="#8E2DE2"
            opacity="0.80"
            paused={false}
            options={{
              height: 15,
              amplitude: 20,
              speed: 0.2,
              points: 2,
            }}
          />
        </WaveContainer>
        <WaveContainer level={50}>
          <Wave
            fill="#4A00E0"
            paused={false}
            opacity="0.5"
            options={{
              height: 30,
              amplitude: 30,
              speed: 0.2,
              points: 3,
            }}
          />
        </WaveContainer>
        <BoxContato>
          <h3> &lt; contato / &gt; </h3>
          <span>
            Vamos trabalhar juntos? Deixe uma mensagem e vamos conversar!
          </span>
          <button onClick={() => openLink(linkedin)}>vamos conversar!</button>
        </BoxContato>
      </div>
    </>
  );
}
