import { Fragment, ReactElement } from 'react';
import * as C from './style';

type Props = {
  titleIcon?: ReactElement;
  title: string;
  subtitle?: string;
}

export const TitleArea = (props: Props) => {
  return(
    <Fragment>
      <C.TitleArea>
        <C.TitleIcon>{props.titleIcon}</C.TitleIcon>
        <C.Title>{props.title}</C.Title>
      </C.TitleArea>
      <C.SubtitleArea>
        <C.Subtitle>{props.subtitle}</C.Subtitle>
      </C.SubtitleArea>
    </Fragment>
  );
}