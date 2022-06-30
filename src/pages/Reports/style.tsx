import styled from "styled-components";

export const Container = styled.div``;

export const SelectType = styled.div`
  display: flex;
  align-items: center;

  .form-check {
    display: flex;
    align-items: center;
    margin-right: 40px;

    input {
      margin-right: 10px;
    }
  }

  label {
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  margin: 40px 0px;

  label {
    font-size: 1.8rem;
  }

  input {
    font-size: 1.5rem;  
  }

  select, option {
    font-size: 1.5rem;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.5rem;
  margin: 20px 0px;
`