import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha" icon={FiLock} />

        <Button title={"Entrar"} />

        <Link to={"/register"}>
          <ButtonText title={"Criar conta"} />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
