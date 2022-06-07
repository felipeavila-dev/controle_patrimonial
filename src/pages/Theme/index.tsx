import React from "react";
import * as C from './style';
import { ChildrenType } from '../../types/ChildrenType';

export const Theme = ({children}: ChildrenType) => {
  return(
    <C.Container>
      <C.Header>
        <C.Logo>[LOGOTIPO DA EMPRESA]</C.Logo>
        <C.InfoArea>
          <C.UserName>Usuario anonimo</C.UserName>
          <C.UserPermission><b>Permissão:</b> Padrão</C.UserPermission>
        </C.InfoArea>
      </C.Header>
      <C.Body>
        <C.Navbar>
          <C.MenuItem>Equipamentos</C.MenuItem>
          <C.MenuItem>Manutenções</C.MenuItem>
          <C.MenuItem>Garantias</C.MenuItem>
          <C.MenuItem>Departamentos</C.MenuItem>
          <C.MenuItem>Relatórios</C.MenuItem>
        </C.Navbar>
        <C.Content>
          {children}
        </C.Content>
      </C.Body>
    </C.Container>
  );
}