import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'

import axios from "axios";

import PeopleChatting from "../../assets/chatting-img.svg";
import Arrow from "../../assets/arrow-img.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

const App = () => {
  //usando função arrow (poderia ser normal, igual a de baixo)
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    //usando função normal (poderia ser arrow, igual a de cima)

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      //aqui envio os dados do front ao back
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
  }

  return (
    <Container>
      <Image alt="logo-img" src={PeopleChatting} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>

        <Link to="/usuarios">Usuarios</ Link>

      </ContainerItens>
    </Container>
  );
};

export default App;
