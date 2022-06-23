import React from "react";
import ReactDOM from "react-dom";
import Wave from "react-wavify";
import styled from "@emotion/styled";
import { BoxContato, WaveContainer } from "./styled";

export function Footer() {
  return (
    <>
      <div
        style={{ position: "relative", height: "240px", marginTop: "200px" }}
      >
        <BoxContato>
          <h3>contato</h3>
          <span>
            Vamos tralhando juntos? Deixe uma mensagem e vamos conversar!
          </span>
          <button>vamos conversar!</button>
        </BoxContato>
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
      </div>
    </>
  );
}
