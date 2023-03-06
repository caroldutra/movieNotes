import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { FiPlus } from "react-icons/fi";

import { Container, Content, AddMovie } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div className="header">
          <h2>Meus filmes</h2>
          <AddMovie to={"/new"}>
            <FiPlus />
            Adicionar filme
          </AddMovie>
        </div>

        <div className="notes">
          <Note
            data={{
              title: "Interestrellar",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />

          <Note
            data={{
              title: "Interestrellar",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />

          <Note
            data={{
              title: "Interestrellar",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
        </div>
      </Content>
    </Container>
  );
}
