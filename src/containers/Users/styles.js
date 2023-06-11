import styled from "styled-components"; //importando a biblioteca styked-componets
import Background from "../../assets/background2-img.svg";
//iniciar componentes com letra maiúscula

export const Container = styled.div`
  //container principal
  background: url("${Background}");
  background-size: cover; //assim a imagem expande para todo espaço

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  gap: 40px;

  height: 100vh;
`;

export const Image = styled.img`
  //imagem
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  //container secundário
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  backdrop-filter: blur(45px); //para deixar com borrão

  padding: 50px 36px;
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 80px;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 120px;

  background: transparent;
  border-radius: 14px;
  border: 1px solid #ffffff;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  color: #ffffff;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img { //como a img está dentro da TAG do botão, posso pegar dessa forma
    transform: rotateY(180deg); //rotaciona a seta em 180 graus no eixo Y
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 25px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;

  border: none;
  outline: none;

  p {
    //estilizo o Paragrafo que esta dentro de User
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }
`;
