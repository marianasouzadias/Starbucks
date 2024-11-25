import { useState } from "react";
import amareloG from "../../assets/img/amareloG.png";
import laranjaG from "../../assets/img/laranjaG.png";
import vermelhoG from "../../assets/img/vermelhoG.png";
import amareloP from "../../assets/img/amareloP.png";
import laranjaP from "../../assets/img/laranjaP.png";
import vermelhoP from "../../assets/img/vermelhoP.png";
import EllipseAmarelo from "../../assets/img/EllipseAmarelo.png";
import EllipseVerde from "../../assets/img/EllipseVerde.png";
import EllipseVermelho from "../../assets/img/EllipseVermelho.png";

import {
  Container,
  Section,
  Button,
 SmallCup,
 BigCup,
  Circle,
} from "./HomeStyled";

const Home = () => {
  const [cup, setCup] = useState(amareloG);
  const [ellipse, setEllipse] = useState(EllipseAmarelo);

  const click = (cup, ellipse) => {
    setCup(cup);
    setEllipse(ellipse);
  };

  return (
    <Container>
      <Section>
        <h2>Mais que Café</h2>
        <h1>
          isso é <span> Starbucks</span>
        </h1>
        <p>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas
          quentes e frias, doces diferenciados e sanduíches.
        </p>
        <Button>SAIBA MAIS</Button>
      </Section>
      <div>
        <Circle src={ellipse} alt="Círculo" />
        < BigCup  src={cup} alt="Copo Grande" />
      </div>
      <SmallCup>
        <img
          src={laranjaP}
          alt="Copo Pequeno 1"
          onClick={() => click(laranjaG, EllipseVerde)}
        />
        <img
          src={vermelhoP}
          alt="Copo Pequeno 2"
          onClick={() => click(vermelhoG, EllipseVermelho)}
        />
        <img
          src={amareloP}
          alt="Copo Pequeno 3"
          onClick={() => click(amareloG, EllipseAmarelo)}
        />
      </SmallCup>
    </Container>
  );
};
export default Home;
