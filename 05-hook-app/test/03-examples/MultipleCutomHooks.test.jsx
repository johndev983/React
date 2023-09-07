import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCutomHooks } from "../../src/03-examples/MultipleCutomHooks";
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => {
  const mockIncrement = jest.fn();
  
  useCounter.mockReturnValue({
    counter: 0,
    increment: mockIncrement
  });

  beforeEach( () => {
    jest.clearAllMocks();
  })

  test('Debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });

    render( <MultipleCutomHooks /> );

    expect( screen.getByText('Loading...') );
    expect( screen.getByText('BreakingBad Quotes') );

    const nexButton = screen.getByRole('button', { name: 'Next quote' });
    expect( nexButton.disabled ).toBe( true );
  })

  test('Debe de mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [{ title: 'Fernando', import_datetime: 'Hola Mundo' }],
      isLoading: false,
      hasError: null
    });

    render( <MultipleCutomHooks /> );
    expect( screen.getByText('Hola Mundo') ).toBeTruthy();
    expect( screen.getByText('Fernando') ).toBeTruthy();

    const nexButton = screen.getByRole('button', { name: 'Next quote' });
    expect( nexButton.disabled ).toBeFalsy();
  })

  test('Debe llamar la función de incremnetar', () => {
    useFetch.mockReturnValue({
      data: [
        { title: 'Fernando', import_datetime: 'Hola Mundo' },
        { title: 'John Gil', import_datetime: 'Papi chulo' }
      ],
      isLoading: false,
      hasError: null
    });

    render( <MultipleCutomHooks /> );
    const nexButton = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click( nexButton );

    expect( mockIncrement ).toHaveBeenCalled();
  })
})