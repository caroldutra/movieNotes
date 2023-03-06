import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to={"/"}>
          <ButtonText title={"Voltar"} icon={FiArrowLeft} />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/caroldutra.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
          </label>
          <input type="file" id="avatar" />
        </Avatar>

        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha atual" icon={FiLock} />
        <Input placeholder="Nova senha" icon={FiLock} />

        <Button title={"Salvar"} />
      </Form>
    </Container>
  );
}
