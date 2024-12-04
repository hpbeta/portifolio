import projectData from "./projectsData";
import {
  Container,
  ContainerInfo,
  Containerlist,
  ContainerProject,
} from "./style";


export function MyProjects() {
  return (
    <Container>
      <h1>Projetos</h1>
      {projectData.map((data) => (
        <ContainerProject key={data.id}>
         <a target="_blank" href={data.link}>
         <ContainerInfo>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <Containerlist>
              {data.icons.map((Icon) => (
                <li key={data.id}>
                  <Icon />
                </li>
              ))}
            </Containerlist>
          </ContainerInfo>
          <div>
            <img src={data.image} alt="" />
          </div>
         </a>
        </ContainerProject>
      ))}
    </Container>
  );
}
