import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../contexts/Context';
import * as C from './style';
const Logo = require('../../images/logo.png');

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const {setUserEmail} = useContext(Context);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'email' ? setEmail(e.target.value) : setPassword(e.target.value);
  }

  const handleLogin = () => {
    if(email === 'user@user.com' && password === '123') {
      setUserEmail(email);
      localStorage.setItem('user', JSON.stringify(email));
      toast.success("Login efetuado com sucesso!")
      navigate('/');
    } else {
      toast.error("Usuario e/ou senha inválido(s).")
    }
  }

  return (
    <C.Container>
      <C.LogoArea>
        <img src={Logo} alt="Logotipo" />
      </C.LogoArea>
      <C.InputArea>
        <C.Input type="email" name="email" className="form-control" placeholder="email@email.com" onChange={ handleInput } data-testid='teste'/>
        <C.Input type="password" name="password" className="form-control" placeholder="Senha" onChange={ handleInput } />
        <C.Button className="btn btn-success" onClick={ handleLogin }>Entrar</C.Button>
      </C.InputArea>
    </C.Container>
  );
}