import starbucks from "../../assets/img/starbucks.png";
import {Main, Img, Section,} from "./AboutStyled";
import { Button } from "../Home/HomeStyled";

const About = () => {
  return (
    <Main>
      <Img src={starbucks} alt="Loja Starbucks" />
      <Section>
        <h2>Preparação</h2>
        <h1>Níveis de terra</h1>
        <p>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
          Escura? Estas sãos as torras que fazem parte dos níveis de torra
          Starbucks
        </p>
        <Button>SAIBA MAIS</Button>
      </Section>
    </Main>
  );
};

export default About;
