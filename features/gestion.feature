# language: es
# encoding: utf-8

Característica: Gestionar las parejas almacenadas en la lista

Antecedentes:
    Dado una lista vacia

Escenario: Verificar el estado de una lista vacia
    Entonces la lista tiene 0 elemento almacenado
    Y si busco la clave "clave" no obtengo ningun valor

Esquema del escenario: Agregar datos a una lista vacia
    Cuando agrego la clave "<clave>" con el valor <valor>
    Entonces la lista tiene 1 elemento almacenado
    Y si busco la clave "<clave>" obtengo el valor <valor>
    Ejemplos:
    | clave | valor |
    | letras | abcde |
    | numero | 7 |
