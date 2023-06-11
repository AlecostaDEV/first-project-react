import React, { useState, useEffect } from "react";

import axios from "axios";

import Avatar from "../../assets/avatar-img.svg";
import Arrow from "../../assets/arrow-img.svg";
import TrashCan from "../../assets/trashcan-img.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  User,
} from "./styles";

const Users = () => {
  //usando função arrow (poderia ser normal, igual a de baixo)
  const [users, setUsers] = useState([]);

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

  return (
    <Container>
      <Image alt="logo-img" src={Avatar} />
      <ContainerItens>
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

        <Button>
          <img alt="arrow" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
