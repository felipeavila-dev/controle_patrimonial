import styled from "styled-components";
import {colors} from '../../colors';

export const Container = styled.div``;

export const Title = styled.h2`
  color: ${colors.primary};
`;

export const SubtitleArea = styled.div`
  border-bottom: 1px solid lightgray;
  margin-top: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  color: gray;
`

export const TableArea = styled.div`
  margin: 20px 0;
  text-align: center;

  table thead th {
    font-size: 1.5rem;
  }

  table tbody tr td {
    font-size: 1.2rem;
  }

  table tbody button {
    font-size: 1.2rem;

    &:hover {
      border: 1px solid ${colors.primary};
    }
  }
`;

export const BackButton = styled.div`
  padding: 10px;

  a {
    font-size: 1.5rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;