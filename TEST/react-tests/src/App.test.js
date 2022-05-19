import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>',()=>{
  test('renders my elements', () => {
    render(<App />);
    const myHeading = screen.getByText(/React testing/i);
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/hello/i)
    expect(myHeading).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    screen.debug()
    expect(input).toMatchSnapshot()
  });
  test('testing queryByText()', ()=>{
    const hwElem = screen.queryByText(/hello world/i)
    expect(hwElem).toBeNull()
  })

  test('testing async with findBy',()=>{
    const myAsyncElem = screen.findByText(/hello/i)
    
  })
})

 