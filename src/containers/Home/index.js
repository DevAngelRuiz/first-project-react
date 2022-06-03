import React, { useState, useRef, useEffect,} from 'react';
import axios from 'axios';
import ImagePeople from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg'
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from './styles';


function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const {data: newUser} = await axios.post("http://localhost:3001/users", 
    { name: inputName.current.value, age: inputAge.current.value, });
    
    setUsers([...users, newUser]);

  }
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers()
  }, [users])



  return (
    <Container>
      <Image alt="logo-imagem" src={ImagePeople} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button to={"/usuarios"} onClick={addNewUser} >Cadastrar <img alt="seta" src={Arrow} /></Button>

      </ContainerItens>
    </Container>)
}

export default App;