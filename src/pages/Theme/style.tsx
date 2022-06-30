import styled from 'styled-components';
import { colors } from '../../colors';



export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;

`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.bgSecondary};
  padding: 15px 40px;
  color: ${colors.primary}
`

export const Logo = styled.div`
  img {
    width: 40px;
  }
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;

  span {
    margin-right: 10px;
    font-size: 1.4rem;
    font-weight: bold;
  }
`

export const UserName = styled.p`
  font-size: 1.2rem;
  color: ${colors.secondary};
`;

export const UserPermission = styled.p`
  font-size: 1.2rem;
  color: ${colors.secondary};
  
  b {
    margin-right: 10px;
    font-size: 1.4rem;
  }
`;


export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Navbar = styled.nav`
  background-color: ${colors.bgPrimary};
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: ${colors.primary}
`;

export const MenuItem = styled.div`
  padding: 5px 0px;

  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${colors.secondary};

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px 40px;
  `;