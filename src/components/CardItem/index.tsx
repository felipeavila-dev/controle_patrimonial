import * as C from './style';
import { getProductByCategory } from '../../helpers/helpers';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  color: string;
}

export const CardItem = (props: Props) => {

  return(
    <C.Container color={props.color}>
      <C.Title>{props.title}</C.Title>
      <C.InfoArea>
        <C.ItemInfo>Quantidade total: {getProductByCategory(props.title)}</C.ItemInfo>
        <C.ItemInfo>Em manutenção: 2</C.ItemInfo>
        <C.ItemInfo>Aguardando status: 1</C.ItemInfo>
      </C.InfoArea>
      <C.Link>
        <Link to={`/detail/${props.title}`}>
          Ir para detalhes
        </Link>
      </C.Link>
    </C.Container>
  );
}