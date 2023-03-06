import { Container } from "./styles";
import { FiStar } from "react-icons/fi";

export function Rating() {
  return (
    <Container>
      <FiStar size={20} fill={"#FF859B"} />
      <FiStar size={20} fill={"#FF859B"} />
      <FiStar size={20} fill={"#FF859B"} />
      <FiStar size={20} fill={"#FF859B"} />
      <FiStar size={20} />
    </Container>
  );
}
