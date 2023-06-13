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

  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  //imagem
  margin-top: 30px;
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
