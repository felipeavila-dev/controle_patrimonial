import styled from "styled-components";

export const Container = styled.div``;

export const PrinterIcon = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 20px;

  span {
    font-size: 1.2rem;
    margin-right: 10px;
  }

  p {
    cursor: pointer;
  }
`;

export const Table = styled.table`
  thead th {
    font-size: 1.5rem;
  }

  tbody td {
    font-size: 1.2rem;
  }
`;
