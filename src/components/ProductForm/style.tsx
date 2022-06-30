import styled from "styled-components";
import {colors} from '../../colors';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  // transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, .8);
  padding: 20px;
`;


export const Form = styled.form`
  color: ${colors.primary}
`;

export const InputArea = styled.div`
  margin-bottom: 15px;  

  select, option {
    font-size: 1.2rem;
  }

  &:nth-last-child(1) {
    text-align: end;
  }
`

export const Label = styled.label`
  font-size: 1.4rem;
`;

export const Input = styled.input`
  font-size: 1.3rem;
`;

export const Button = styled.button`
  margin-left: 10px;
  font-size: 1.5rem;
`;