import styled from "styled-components";
import {colors} from '../../colors';

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.primary};
`;

export const TitleIcon = styled.div`
  margin-right: 10px;
`

export const Title = styled.h1`
`;

export const SubtitleArea = styled.div`
  border-bottom: 1px solid lightgray;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  color: gray;
`