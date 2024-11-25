import styled from "styled-components";

export const MainStyled = styled.main`
 display: flex;
  justify-content: space-between;
  background-color: #1e3932;
  width: 100%; 
  height: 100vh;

   @media (max-width: 800px){
   width: 100%; 
  height: 100vh;
   }
`;

export const Section = styled.section `
text-align: justify;
max-width: 600px;
margin-left: 50px;
font-family: Poppins;
color: #ffff;

@media (max-width: 800px){
max-width: 300px;
}
h2{
margin-bottom: 5px;
margin-top: 70px;

@media (max-width: 800px){
font-size: 15px;
}
}

h1{
font-weight: normal;
font-size: 40px;
margin-top: 0;
margin-bottom: 10px;

@media (max-width: 800px){
font-size: 30px;
}
}

p{
font-size: 24px;
margin-bottom: 30px;

@media (max-width: 800px){
font-size: 15px;
}
}`

export const Img = styled.img`
  width: 400px;
  height: 300px;
  margin-top: 140px;
  margin-right: 70px;

  @media (max-width: 800px){
 display: none;
}
`;