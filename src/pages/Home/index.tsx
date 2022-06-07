import React, { useContext } from 'react';
import * as C from './style';
import {CardItem} from '../../components/CardItem';
import { GrBarChart } from "react-icons/gr";
import { Context } from '../../contexts/Context';

export const Home = () => {
  const context = useContext(Context);
  return(
    <C.Container>
      <C.TitleArea>
        <C.TitleIcon><GrBarChart size="2.5rem"/></C.TitleIcon>
        <C.Title>Página inicial</C.Title>
      </C.TitleArea>
      <C.SubtitleArea>
        <C.Subtitle>Listagem resumida de todas as caregorias</C.Subtitle>
      </C.SubtitleArea>
      <C.CategoryCardsArea>
        {context.CategoriesDatabase.map((category) => (
          <CardItem title={category.title} color={category.color}/>
        ))}
      </C.CategoryCardsArea>
    </C.Container>
  );
}