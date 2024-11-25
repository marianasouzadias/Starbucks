import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center; 
  gap: 150px; 

`;

export const Img = styled.img`
  width: 300px;
  height: 400px;
  margin-left: 40px;
  margin-top: 40px;

   @media (max-width: 800px){
    display: none;
   }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: #1e3932;
  font-family: Poppins;
  font-weight: 400;

  h2 {
    margin-bottom: 0;
       @media (max-width: 800px){
   font-size: 15px;
}
  }

  h1 {
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 10px;

       @media (max-width: 800px){
   font-size: 35px;
}
  }

  p {
    text-align: justify;
    max-width: 400px;
    margin-top: 0;
    margin-bottom: 40px;

    @media (max-width: 800px){
   font-size: 15px;
}
  }
`;