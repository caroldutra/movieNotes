import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha" icon={FiLock} />

        <Button title={"Cadastrar"} />

        <Link to={"/"}>
          <ButtonText title={"Voltar para o login"} icon={FiArrowLeft} />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
