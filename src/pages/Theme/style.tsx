import styled from 'styled-components';
import { colors } from '../../colors';



export const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  padding: 20px 40px;
  color: ${colors.primary}
`

export const Logo = styled.div``;

export const InfoArea = styled.div``

export const UserName = styled.p``;

export const UserPermission = styled.p``;


export const Body = styled.div`
  display: flex;
  height: 100%;
`;

export const Navbar = styled.nav`
  background-color: ${colors.background};
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  color: ${colors.primary}
`;

export const MenuItem = styled.div`
  margin: 20px 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px 40px;
  overflow: auto;
  `;