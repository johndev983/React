describe('Pruebas <DemoComponent />', () => {
  test('Esta prueba no debe fallar', () => {
    // Inicilizción
    const message1 = 'Hola mundo';
    
    // Estimulo
    const message2 = message1.trim();
    
    // Observar el comportamiento
    expect( message1 ).toBe( message2 );
  })
})