import grao from "../../assets/img/grao.png";
import { MainStyled, Section, Img} from "./NovidadeStyled";
import { Button } from "../Home/HomeStyled";


const Novidade = () => {
  return (
    <MainStyled>
      <Section>
      <h2>Preparação</h2>
      <h1>Níveis de torra</h1>
      <p>
        Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
        Escura? Estas sãos as torras que fazem parte dos níveis de torra
        Starbucks®
      </p>
      <Button>SAIBA MAIS</Button>
      </Section>
      <Img src={grao} alt="Grão de café" />
      
    </MainStyled>
  );
};
export default Novidade;
