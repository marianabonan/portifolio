import Kenziehub from "../../../assets/image/kenzieHub.jpg";
import Psique from "../../../assets/image/psique.jpg";
import KenzieShop from "../../../assets/image/kenzieShop.jpg";

import { BoxDescription, BoxProject, CardProject } from "./styled";

export function Project() {
  const listProject = [
    {
      nome: "Kenzie Shop",
      describe: "Simulação de carrinho de compras",
      img: KenzieShop,
    },
    {
      nome: "Psique.",
      describe: "Plataforma de gerenciar consultas para psicólogos e pacientes",
      img: Psique,
    },
    {
      nome: "Kenzie Hub",
      describe: "Aplicação de aramazenamento de tecnologias",
      img: Kenziehub,
    },
  ];
  return (
    <>
      <BoxDescription>
        <h3> &lt; projetos/ &gt;</h3>
        <p> Alguns dos projetos que participei </p>
      </BoxDescription>

      <BoxProject>
        {listProject.map((project) => (
          <CardProject>
            <button>
              <img src={project.img} alt="img do projeto "></img>
            </button>

            <p>{project.nome}</p>
            <span>{project.describe}</span>
          </CardProject>
        ))}
      </BoxProject>
    </>
  );
}
