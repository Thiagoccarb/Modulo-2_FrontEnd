import { fireEvent, render, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('tests app and routers', () => {
  it('renders App component', () => {
    const { getByText } = renderWithRouter(<App />);
    const app =  getByText(/Você está na página Início/i);
  
    expect(app).toBeInTheDocument();
  });
  
  it('renders the component About when ckicked on', () => {
    const { getByText, history } = renderWithRouter(<App />);
  
    fireEvent.click(getByText(/sobre/i));
  
    expect(history.location.pathname).toBe('/about');
  });
  
  it('renders noMatch component when typed incorrect path', ()=> {
    const { getByText, history } = renderWithRouter(<App />)
    history.push('/teste');
  
    const msg = getByText(/página não encontrada/i);
  
    expect(msg).toBeInTheDocument();
  }); 
  
  it('renders /about (only this component)', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
});

