import { describe, test, expect } from 'vitest';

const {
    crearMensajeBienvenida,
    concatenarConMas,
    interpolarVariables,
    calcularTotalComoString,
    tipoDeResultadoInterpolado,
    crearNotaMultilinea,
} = require('./04-reto.js');

describe('crearMensajeBienvenida', () => {
    test('debe crear correctamente el mensaje de bienvenida', () => {
        expect(
            crearMensajeBienvenida('JavaScript', '1.0')
        ).toBe(
            'Bienvenido a JavaScript, versión 1.0.'
        );
    });
});

describe('concatenarConMas', () => {
    test('debe concatenar dos textos con un espacio', () => {
        expect(
            concatenarConMas('Hola', 'mundo')
        ).toBe('Hola mundo');
    });
});


describe('interpolarVariables', () => {
    test('debe interpolar correctamente nombre y curso', () => {
        expect(
            interpolarVariables('Juan', 'JavaScript')        
        ).toBe('Curso de Juan: JavaScript.');
    });
});

describe('calcularTotalComoString', () => {
    test('debe multiplicar precio por cantidad y devolver un string', () => {
        expect(
            calcularTotalComoString(100, 3)
        ).toBe('300');
    });
});


describe('tipoDeResultadoInterpolado', () => {
    test('debe devolver string', () => {
        expect(
            tipoDeResultadoInterpolado()
        ).toBe('string');
    });
});

describe('crearNotaMultilinea', () => {
    test('debe crear correctamente la nota en varias líneas', () => {
        expect(
            crearNotaMultilinea(
                'Lista de tareas',
                'Estudiar JavaScript',
                'Practicar Vitest'
            )
        ).toBe(`Lista de tareas
- Estudiar JavaScript
- Practicar Vitest`
        );
    });
});