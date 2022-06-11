import styled from 'styled-components';
import { colors } from '../../colors';


export const Container = styled.div`
  max-width: 100vw;
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.primary};
`;

export const TitleIcon = styled.div`
  margin-right: 10px;
`

export const Title = styled.h1``;

export const SubtitleArea = styled.div`
  border-bottom: 1px solid lightgray;
  margin-top: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  color: gray;
`

export const CategoryCardsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 40px;
`

export const Loading = styled.h3`
  font-size: 5rem;
`;