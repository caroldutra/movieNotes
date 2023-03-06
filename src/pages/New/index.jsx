import { ButtonText } from "../../components/ButtonText";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Content, TextArea } from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <Content>
        <Link to={"/"}>
          <ButtonText className="goBack" title={"Voltar"} icon={FiArrowLeft} />
        </Link>

        <div className="main">
          <h2>Novo filme</h2>

          <div className="input-wrapper">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <TextArea placeholder="Observações" />

          <p>Marcadores</p>

          <div className="tags">
            <NoteItem value={"Ação"} />
            <NoteItem isNew placeholder="Novo marcador" />
          </div>

          <Button title="Salvar alterações" />
        </div>
      </Content>
    </Container>
  );
}
