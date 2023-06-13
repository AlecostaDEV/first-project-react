import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import axios from "axios";

import Avatar from "../../assets/avatar-img.svg";
import Arrow from "../../assets/arrow-img.svg";
import TrashCan from "../../assets/trashcan-img.svg";

import H1 from '../../components/Title' //importando o componente de title
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import {
  Container,
  Image,
  User,
} from "./styles";

const Users = () => {
  //usando função arrow (poderia ser normal, igual a de baixo)
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    //tudo que está dentro de useEffect é chamado quando a página carrega (início da aplicação)
    //o useEffect não aceita async, então precisamos criar uma função para usar o async
    async function fetchUsers() {
      const { data: usersList } = await axios.get(
        "http://localhost:3001/users"
      );

      setUsers(usersList);
    }
    fetchUsers();
  }, []); //e também é chamado quando um estado (ex: users) que está no array de dependência do useEffect é ALTERADO
  //se eu coloco [users] aqui, toda vez que adicionar um usuário, o useEffect é chamado, se não colocar, só será chamado ao iniciar da aplicação

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage(){
    navigate("/")//navega pra home ("/")
  }

  return (
    <Container>
      <Image alt="logo-img" src={Avatar} />
      <ContainerItens isBlur={true}> {/*crio um props para fazer a excessão*/}
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={TrashCan} alt="trash-can" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="arrow" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
