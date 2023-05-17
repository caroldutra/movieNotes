import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const { signIn, signOut } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title={"Entrar"} onClick={handleSignIn} />

        <Link to={"/register"}>
          <ButtonText title={"Criar conta"} />
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
