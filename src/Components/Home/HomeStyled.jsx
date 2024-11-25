
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between; 
  font-family: Poppins;
 padding: 15px;
 
`;

export const Section = styled.section`
  max-width: 600px;
  text-align: justify;
  margin-left: 30px;

  h2 {
    font-weight: normal;
    font-size: 30px;
    color: #000000cc;
    margin-bottom: 0;

     @media (max-width: 800px) {
     font-size: 15px;}
  }

  h1 {
    font-size: 26px;
    margin-top: 0;

    span {
      font-size: 40px;
      color: #037143;
    }

     @media (max-width: 800px) {
     font-size: 20px;
     
     span{
     font-size: 30px;
}}
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;

     @media (max-width: 800px) {
     font-size: 15px;
  }
}`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 30px;
  border: none;
  background-color: #037143;
  color: #fff;
  font-size: 15px;
  font-weight: bold;

   @media (max-width: 800px) {
    width: 150px;
  height: 50px;
  font-size: 15px;
   }
`;

export const Circulo = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 350px;
  z-index: -1; 

   @media (max-width: 800px) {
   width: 180px;
   height: 150px;
   }
`;

export const CopoGrande = styled.img`
  position: absolute;
  bottom: 80px;
  right: 5px;
  width: 350px;
  height: 350px;

   @media (max-width: 800px) {
   width: 150px;
   height:150px;
   bottom: 30px;
   }

`;


export const CopoPequeno = styled.div`
  display: flex;
  position: absolute;
  left: 50%; /* Posiciona o centro da div em relação à tela */
  transform: translateX(-50%); /* Ajusta para que o elemento fique realmente centralizado */
  bottom: 30px;
  gap: 15px;

  img {
    cursor: pointer;
    width: 100px; 
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 800px) {
    left: 30%; 
    transform: translateX(-50%);
    bottom: 20px; 

    img {
      width: 50px; 
    }
  }
`;



