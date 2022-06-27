import Kenziehub from "../../../assets/image/kenzieHub.jpg";
import Psique from "../../../assets/image/psique.jpg";
import KenzieShop from "../../../assets/image/kenzieShop.jpg";

import { BoxDescription, BoxProject, CardProject } from "./styled";
import { FiGithub } from "react-icons/fi";

export function Project() {
  const listProject = [
    {
      nome: "Kenzie Shop",
      describe: "Simulação de carrinho de compras",
      img: KenzieShop,
      link: "https://react-entrega-s3-kenzishop-com-context-api-mariana-marianabonan.vercel.app/",
      linkGit:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-marianabonan",
    },
    {
      nome: "Psique.",
      describe: "Plataforma de gerenciar consultas para psicólogos e pacientes",
      img: Psique,
      link: "https://capstone-m3-sergioothoniel.vercel.app/",
      linkGit: "https://github.com/sergioothoniel/capstone-m3",
    },
    {
      nome: "Kenzie Hub",
      describe: "Aplicação de aramazenamento de tecnologias",
      img: Kenziehub,
      link: "https://react-entrega-s2-kenzie-hub-marianabonan.vercel.app/",
      linkGit:
        "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-marianabonan",
    },
  ];
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <BoxDescription>
        <h3> &lt; projetos/ &gt;</h3>
        <p> Alguns dos projetos que participei </p>
      </BoxDescription>

      <BoxProject>
        {listProject.map((project, index) => (
          <CardProject key={index}>
            <button onClick={() => openLink(project.link)}>
              <img src={project.img} alt="img do projeto "></img>
            </button>
            <div>
              <p>{project.nome}</p>
              <button onClick={() => openLink(project.linkGit)}>
                <FiGithub size={30} />
              </button>
            </div>

            <span>{project.describe}</span>
          </CardProject>
        ))}
      </BoxProject>
    </>
  );
}
