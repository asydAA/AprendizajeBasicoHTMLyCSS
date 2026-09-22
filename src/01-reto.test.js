import { describe, test, expect } from 'vitest';

const {
    obtenerPI,
    obtenerContador,
    obtenerNombreCurso,
    reasignarMensaje,
    calcularTotal,
    identificarTipos,
    demostrarHoisting
} = require('./01-reto.js');


describe('Reto 1: Declarar una constante', () => {

    test('obtenerPI debería retornar 3.14159', () => {
        expect(obtenerPI()).toBe(3.14159);
    });

});


describe('Reto 2: Reasignación con let', () => {

    test('obtenerContador debería retornar 5', () => {
        expect(obtenerContador()).toBe(5);
    });

});


describe('Reto 3: Constante de texto', () => {

    test('obtenerNombreCurso debería retornar el nombre correcto', () => {
        expect(obtenerNombreCurso()).toBe('Fundamentos de JavaScript');
    });

});


describe('Reto 4: Reasignación de strings', () => {

    test('reasignarMensaje debería retornar los valores inicial y final', () => {
        expect(reasignarMensaje()).toEqual({
            inicial: 'hola',
            final: 'adiós'
        });
    });

});


describe('Reto 5: Cálculo con const y let', () => {

    test('calcularTotal debería retornar precioBase, descuento y total', () => {
        expect(calcularTotal()).toEqual({
            precioBase: 100,
            descuento: 25,
            total: 75
        });
    });

});


describe('Reto 6: Identificar tipos de dato', () => {

    test('identificarTipos debería retornar los tipos correctos', () => {
        expect(identificarTipos()).toEqual({
            tipoEdad: 'number',
            tipoNombre: 'string',
            tipoActivo: 'boolean'
        });
    });

});


describe('Reto 7: Hoisting', () => {

    test('demostrarHoisting debería mostrar undefined antes y Oscar después', () => {
        expect(demostrarHoisting()).toEqual({
            antes: undefined,
            despues: 'Oscar'
        });
    });

});