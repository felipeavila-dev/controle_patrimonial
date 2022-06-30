import styled from "styled-components";
import {colors} from '../../colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: ${colors.bgSecondary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoArea = styled.div`
  text-align: end;
  margin-bottom: 50px;
  img {
    width: 150px;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  font-size: 1.5rem;

`;
