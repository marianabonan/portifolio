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
import Me from "../../../assets/image/me.jpg";

export function About() {
  const git = "https://github.com/marianabonan";
  const linkedin = "https://www.linkedin.com/in/mariana-bonan-49b0b5211/";
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Container>
      <BoxDescription>
        <div className="box-img">
          <img className="image" src={Me} alt="picture about me" />

          <h3>Oi, eu sou a Mari!</h3>
        </div>
        <p>
          Tenho 25 anos, moro em Curitiba Paraná. Trabalhei muitos anos com
          dança e atendimento ao cliente, mas no ultimo ano cai de paraquedas no
          mundo da tecnologia e resolvi me expecializar na area. Estudo na
          escola Kenzie Academi, onde me formei em Front End e agora estudo Back
          End para me tornar Full Stack
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
            <button onClick={() => openLink(git)}>
              <BsGithub className="iconLink" />
            </button>

            <p>github</p>
          </div>
          <div className="boxLink">
            <button onClick={() => openLink(linkedin)}>
              <BsLinkedin className="iconLink" />
            </button>

            <p>linkedin</p>
          </div>
        </BoxLinks>
      </BoxAside>
    </Container>
  );
}
