import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history'
import { MemoryRouter, Router } from 'react-router-dom';
import { Login } from '../pages/Login';
import App from '../App';
import { createNumericLiteral } from 'typescript';

describe('Realiza testes na página de login', () => {
  test('Se exite o input para email, senha e um botao com a palavra "entrar"', () => {
    render(<Login />, {wrapper: MemoryRouter});

    const emailEl = screen.getByPlaceholderText('email@email.com');
    const passwordEl = screen.getByPlaceholderText('Senha');
    const enterEl = screen.getByText('Entrar');
    expect(emailEl).toBeInTheDocument();
    expect(passwordEl).toBeInTheDocument();
    expect(enterEl).toBeInTheDocument();
  });

  test('Se ao inserir usuario: user@user.com e senha 123 a página é redirecionada para home', async () => {
    const history = createMemoryHistory();
    history.push('/login')
    render(
      <Router location={history.location} navigator={history}>
        <App/>
      </Router>,
    )
    const emailEl = screen.getByPlaceholderText('email@email.com');
    const passwordEl = screen.getByPlaceholderText('Senha');
    const enterEl = screen.getByText('Entrar');

    userEvent.type(emailEl, 'user@user.com');
    userEvent.type(passwordEl, '123');
    userEvent.click(enterEl);

    const { pathname } = history.location;
    expect(pathname).toBe('/');     

    const dash = await screen.findByText('Dashboard');
    expect(dash).toBeInTheDocument();
  });
});