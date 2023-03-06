import { Container, Brand, Profile } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Brand>
        <Link to={"/"}>RocketMovies</Link>
      </Brand>

      <Input type="text" placeholder="Pesquise pelo título" />

      <Profile>
        <div>
          <p>Carolina Dutra</p>
          <Link to={"/"}>Sair</Link>
        </div>

        <Link to={"/profile"}>
          <img src="https://github.com/caroldutra.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
}
