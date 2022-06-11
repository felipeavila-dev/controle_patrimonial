/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import * as C from './style';
import {CardItem} from '../../components/CardItem';
import { GrBarChart } from "react-icons/gr";
import { Context } from '../../contexts/Context';
import { ChartItem } from '../../components/ChartItem';
import { getProductByCategory } from '../../helpers/helpers';


export const Home = () => {
  const context = useContext(Context);
  
  const [chartData, setChartData] = useState([]);
  const [loadingChart, setLoadingChart] = useState(false);
  const [optionsChart, setOptionsChart] = useState({Title: 'Dashboard de equipamentos', width:'500px', height: 'auto'});

  // Set the itemsQuantityKeys with all categories
  useEffect(() => {
    const keys: any = [];
    context.categories.map((category) => keys.push([category.title, getProductByCategory(category.title)]));
    context.setItemQuantity(keys);
  }, []);

  useEffect(() => {
    setLoadingChart(true);
    const newData: any = [['Equipamento', 'Quantidade']];
    context.itemQuantity.forEach((index) => newData.push(index));

    setChartData(newData);
    setLoadingChart(false);
  }, [context.itemQuantity])

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
        {context.categories.map((category) => (
          <CardItem key={category.title} title={category.title} color={category.color} />
        ))}
      </C.CategoryCardsArea>

      {!loadingChart && <ChartItem type="PieChart" data={chartData} options={optionsChart}/>  }    
      {loadingChart && <C.Loading>Carregando gráfico....</C.Loading>}
    </C.Container>
  );
}