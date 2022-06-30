/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import * as C from './style';
import {CardItem} from '../../components/CardItem';
import { GrBarChart } from "react-icons/gr";
import { Context } from '../../contexts/Context';
import { ChartItem } from '../../components/ChartItem';
import { getProductQuantityByCategory } from '../../helpers/helpers';
import { TitleArea } from '../../components/TitleArea';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
  const {categories, setItemQuantity, itemQuantity, items} = useContext(Context);
  
  const [chartData, setChartData] = useState([]);
  const [loadingChart, setLoadingChart] = useState(false);
  const [optionsChart] = useState({Title: 'Dashboard de equipamentos', width:'500px', height: 'auto'});

  const navigate = useNavigate();

  const {setUserEmail} = useContext(Context);

  // Set the itemsQuantityKeys with all categories and quantity
  useEffect(() => {
    const keys: any = [];
    categories.map((category) => keys.push([category.title, getProductQuantityByCategory(items, category.title)]));
    setItemQuantity(keys);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(!user) { 
      navigate('/login');
    } else {
      setUserEmail(JSON.parse(user));
    }
  })


  useEffect(() => {
    setLoadingChart(true);
    const newData: any = [['Equipamento', 'Quantidade']];
    itemQuantity.forEach((index) => newData.push(index));

    setChartData(newData);
    setLoadingChart(false);
  }, [itemQuantity])

  return(
    <C.Container>
      <TitleArea titleIcon={<GrBarChart size="2.5rem"/>} title='Página inicial' subtitle='Listagem resumida de todas as categorias'/>
      <C.CategoryCardsArea>
        {categories.map((category) => (
          <CardItem key={category.title} title={category.title} color={category.color} />
        ))}
      </C.CategoryCardsArea>

      {!loadingChart && <ChartItem type="PieChart" data={chartData} options={optionsChart}/>  }    
      {loadingChart && <C.Loading>Carregando gráfico....</C.Loading>}
    </C.Container>
  );
}