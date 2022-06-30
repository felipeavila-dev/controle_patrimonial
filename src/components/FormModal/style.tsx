import styled from "styled-components";
import {colors} from '../../colors';

export const Modal = styled.div`
  background-color: white;
  opacity: 1.0;
  width: 90%;
  height: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  z-index: 999;

  span {
    position: fixed;
    right: 2%;
    top: 2%;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
