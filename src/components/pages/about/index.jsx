import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

export function About() {
  return (
    <div>
      <div>
        <div>
          <img />
          <h4>Oi, eu sou a Mari!</h4>
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
      </div>
      <div>
        <CircularProgress value={85} color="#4A00E0" size="85">
          <CircularProgressLabel>Front-end</CircularProgressLabel>
        </CircularProgress>
      </div>
    </div>
  );
}
