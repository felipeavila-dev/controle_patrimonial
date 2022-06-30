import React, { useContext } from "react";
import * as C from './style';
import { ChildrenType } from '../../types/ChildrenType';
import { Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
const Logo = require('../../images/logo.png');

export const Theme = ({children}: ChildrenType) => {

  const {userEmail, setUserEmail} = useContext(Context);

  const handleLogoff = () => {
    setUserEmail('');
    localStorage.clear();
  }

  return(
    <C.Container>
      <C.Header>
        <C.Logo><img src={Logo} alt="logotipo" /></C.Logo>
        <C.InfoArea>
          <C.UserName><span>Usuário:</span>{ userEmail }</C.UserName>
          <C.UserPermission><b>Permissão:</b> Padrão</C.UserPermission>
        </C.InfoArea>
      </C.Header>
      <C.Body>
        <C.Navbar>
          <C.MenuItem>
            <Link to='/'>Dashboard</Link>
          </C.MenuItem>
          <C.MenuItem>
            <Link to='/registerProduct'>Cadastrar Item</Link>
          </C.MenuItem>
          <C.MenuItem>
            <Link to='/reports'>Relatórios</Link>
          </C.MenuItem>
          <C.MenuItem>
            <a href="/login" onClick={handleLogoff}>
              Sair
            </a>
          </C.MenuItem>
        </C.Navbar>
        <C.Content>
          {children}
        </C.Content>
      </C.Body>
    </C.Container>
  );
}