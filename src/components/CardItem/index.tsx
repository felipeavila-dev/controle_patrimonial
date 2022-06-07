import * as C from './style';

type Props = {
  title: string;
  color: string;
}

export const CardItem = (props: Props) => {
  return(
    <C.Container color={props.color}>
      <C.Title>{props.title}</C.Title>
      <C.InfoArea>
        <C.ItemInfo>Quantidade total: 9</C.ItemInfo>
        <C.ItemInfo>Em manutenção: 2</C.ItemInfo>
        <C.ItemInfo>Aguardando status: 1</C.ItemInfo>
      </C.InfoArea>
      <C.Link>Ir para Produtos</C.Link>
    </C.Container>
  );
}