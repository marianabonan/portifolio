import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { BoxDescription, Container } from "./styled";

export function About() {
  return (
    <Container>
      <BoxDescription>
        <div className="box-img">
          <div className="image"></div>
          <h3>Oi, eu sou a Mari!</h3>
        </div>
        <p>
          “Full stack em formação, text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text ”
        </p>
        <span>
          {" "}
          text text text text text text text text text text text text text text
          text text text text text text text text{" "}
        </span>
      </BoxDescription>
      <div>
        <CircularProgress value={85} color="#4A00E0" size="85">
          <CircularProgressLabel>Front-end</CircularProgressLabel>
        </CircularProgress>
        <div>
          <p>JavaScript</p>
          <p>React</p>
          <p>Html</p>
          <p>Css</p>
        </div>
        <div>
          <div className="line1">---</div>
          <div className="line2">---</div>
          <div className="line3">---</div>
          <div className="line4">---</div>
        </div>
        <div>
          <img /> <p>github</p>
          <img /> <p>linkedin</p>
        </div>
      </div>
    </Container>
  );
}
