import styled from "styled-components";

export const HomeStyled = styled.main `
    width: 100vw;

    overflow: hidden;

    background-color: #0F0F0F;
`

export const HomeStart = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-image: url("https://uploaddeimagens.com.br/images/004/384/679/original/back.png?1678453845");
    background-repeat: no-repeat;
    background-size: cover;
`

export const Hero = styled.div `
   z-index: 2;

   display: flex;
   flex-direction: column;
   align-items: center;

   margin-top: -5rem;

   h1 {
    font-size: 130px;
    font-weight: bold;
    color: white;
   }

   span {

    color: white;
    font-weight: bold;

    padding: 5px 35px;

    border-radius: 15px;

    background-color: var(--primary-color);
   }
`

export const Overlay = styled.div `
  width: 100vw;
  height: 100vh;

  position: absolute;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const About = styled.section `
    width: 100vw;

    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    color: #FFFFFF;

    z-index: 10;
    
    h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    span {
        padding: 0 1rem;
        text-align: center;
    }

    ul {
        display: flex;
        gap: 35px;
    }

    ul li {
        display: flex;
        flex-direction: column;
        align-items: center;

        z-index: 15;

        gap: 15px;
    }

    ul li img {
        min-width: 100px;
        max-width: 150px;

        border-radius: 50%;
    }
  
    @media (min-width: 1000px) {
        h2 {
        font-size: 2.5rem;
        font-weight: bold;
    }
    }
`
export const WaveBG = styled.img `
    width: 100%;
    z-index: 1;

    position: absolute;
    bottom: 0;

    opacity: 0.5;
`