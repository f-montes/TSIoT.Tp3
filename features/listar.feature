# language: es
# encoding: utf-8

Característica: Listar en forma ordenada las claves almacenadas en la lista

Escenario: Lista con elementos
    Dado una lista con los siguientes elementos
    | clave | valor |
    | "letras" | abcde |
    | "simbolo" | # |
    | "numero" | 7 |
    Cuando se listan las claves
    Entonces la lista esta ordenada