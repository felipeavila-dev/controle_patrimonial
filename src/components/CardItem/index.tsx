import * as C from './style';
import { getProductQuantityByCategory } from '../../helpers/helpers';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts/Context';

type Props = {
  title: string;
  color: string;
}

export const CardItem = (props: Props) => {
  const {items} = useContext(Context);

  const [currentQuantity, setCurrentQuantity] = useState(0);

  useEffect(() => {
    setCurrentQuantity(getProductQuantityByCategory(items, props.title));
  }, []);

  return(
    <C.Container color={props.color}>
      <C.Title>{props.title}</C.Title>
      <C.InfoArea>
        <C.ItemInfo>Quantidade total: {currentQuantity}</C.ItemInfo>
        <C.ItemInfo>Em manutenção: 2</C.ItemInfo>
        <C.ItemInfo>Aguardando status: 1</C.ItemInfo>
      </C.InfoArea>
      <C.Link>
        <Link to={`/categoryDetail/${props.title}`}>
          Ir para detalhes
        </Link>
      </C.Link>
    </C.Container>
  );
}