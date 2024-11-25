import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  lign-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 0;
`;


export const Logo = styled.img`
margin-left: 50px;
margin-top: 20px;
width: 70px;
height: 70px
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-right: 60px;
  gap: 10px;

  @media (max-width: 800px) {
  padding: 5px;
  gap: 0;
`;

export const Li = styled.li`
margin: 10px;
margin-left: 20px;
font-size: 20px;
`;

export const StyledLink = styled(Link )`
color: #1E3932;
text-decoration: none;

 &:hover {
    color: #037143;
  }
 @media (max-width: 800px) {
 font-size: 16px;
 }`;

