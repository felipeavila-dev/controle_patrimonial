import * as C from './style';
import {ChildrenType} from '../../types/ChildrenType';

export const FormModal = ({children}: ChildrenType) => {
  return(
    <C.Modal>
      {children}
    </C.Modal>
  );
}