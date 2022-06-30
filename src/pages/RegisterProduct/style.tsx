import styled from "styled-components";
import {colors} from '../../colors';

export const Container = styled.div`
  font-size: 1.8rem;
  height: 100%;
`;

export const Form = styled.form`
  color: ${colors.primary};
`;

export const InputArea = styled.div`
  margin-bottom: 15px;  

  select, option {
    font-size: 1.2rem;
  }


  &:nth-last-child(1) {
    text-align: center;
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
  padding: 5px 40px;
`;