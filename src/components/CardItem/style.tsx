import styled from 'styled-components';

type ColorType = {
  color: string;
}

export const Container = styled.div<ColorType>`
  padding: 20px;
  background-color: lightblue;
  border-radius: 10px;
  background-color: ${props => props.color? props.color : 'initial'};
`;

export const Title = styled.p`
border-bottom: 1px solid gray;
font-size: 1.6rem;
`;

export const InfoArea = styled.div`
  margin: 10px 0;
`

export const ItemInfo = styled.p`
  font-size: 1.3rem;
`

export const Link = styled.div`
  font-size: 1.2rem;
  padding-top: 5px;
  border-top: 1px solid gray;
`;