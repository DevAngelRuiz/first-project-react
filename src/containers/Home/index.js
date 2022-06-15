import React, { useState, useRef, useEffect, } from 'react';
import axios from 'axios';
import Arrow from '../../assets/arrow.svg'
import {
  Container,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  ContainerButton

} from './styles';


function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputMatricula = useRef();
  const inputCpf = useRef();
  const inputEndereço = useRef();
  const inputEmail = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users",
      { name: inputName.current.value, matricula: inputMatricula.current.value, cpf: inputCpf.current.value, address: inputEndereço.current.value });

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
      <ContainerItens>
        <H1>Cadastro de Alunos</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Matricula</InputLabel>
        <Input ref={inputMatricula} placeholder="Matricula" />

        <InputLabel>CPF</InputLabel>
        <Input ref={inputCpf} placeholder="Cpf" />

        <InputLabel>E-mail</InputLabel>
        <Input ref={inputEmail} placeholder="E-mail" />

        <InputLabel>Endereço</InputLabel>
        <Input ref={inputEndereço} placeholder="Endereço" />

        <Button to={"/usuarios"} onClick={addNewUser} >Cadastrar <img alt="seta" src={Arrow} /></Button>
        <ContainerButton>
          <Button to={"/usuarios"}  >Editar </Button>
          <Button to={"/usuarios"}  >Excluir</Button>
        </ContainerButton>


      </ContainerItens>
    </Container>)
}

export default App;