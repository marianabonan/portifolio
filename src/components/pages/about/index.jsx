import {
  BoxAside,
  BoxDescription,
  BoxLinks,
  BoxSkills,
  Container,
} from "./styled";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoJavascript,
} from "react-icons/io";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";

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
      </BoxDescription>

      <BoxAside>
        <BoxSkills>
          <IoLogoJavascript className="icons" />

          <GrReactjs className="icons" />

          <IoLogoHtml5 className="icons" />

          <IoLogoCss3 className="icons" />

          <IoLogoNodejs className="icons" />
        </BoxSkills>
        <BoxLinks>
          <div className="boxLink">
            <button>
              <BsGithub className="iconLink" />
            </button>

            <p>github</p>
          </div>
          <div className="boxLink">
            <button>
              <BsLinkedin className="iconLink" />
            </button>

            <p>linkedin</p>
          </div>
        </BoxLinks>
      </BoxAside>
    </Container>
  );
}
