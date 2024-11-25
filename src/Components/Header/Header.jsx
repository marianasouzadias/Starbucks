import logo from '../../assets/img/logo.png';
import { StyledHeader, Logo, Ul, Li, StyledLink } from "./HeaderStyled";

const HeaderComponent = () => {
    return (

        <StyledHeader>
            <Logo src={logo} alt="logoMarca" />
            <nav>
                <Ul>
                    <Li>
                        <StyledLink to='/'>Home</StyledLink>
                    </Li>
                    <Li>
                    <StyledLink to='/novidades'>Novidades</StyledLink>
                    </Li>
                    <Li>
                    <StyledLink to='/sobre'>Sobre</StyledLink>
                    </Li>
                </Ul>
            </nav>
        </StyledHeader>
    )
}
export default HeaderComponent;
