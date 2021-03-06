import React, { useState, useEffect,} from 'react';
import axios from 'axios';
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import {
  Container,
  ContainerItens,
  H1,
  Button,
  User,
} from './styles';


function Users() {
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers()
  }, [users])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);

  }


  return (
    <Container>

      <ContainerItens>
        <H1>Cadastro Aluno</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button>
            </User>
          ))}
        </ul>
        <Button to={"/"} >Voltar <img alt="seta" src={Arrow} /></Button>
      

      </ContainerItens>
    </Container>)
}

export default Users;