import { Container, Brand, Profile } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Brand>
        <Link to={"/"}>RocketMovies</Link>
      </Brand>

      <Input type="text" placeholder="Pesquise pelo título" />

      <Profile>
        <div>
          <p>Carolina Dutra</p>
          <button onClick={handleSignOut}>Sair</button>
        </div>

        <Link to={"/profile"}>
          <img src="https://github.com/caroldutra.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
}
