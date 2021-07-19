# language: es
# encoding: utf-8

Característica: Gestionar las parejas almacenadas en la lista

Escenario: Verificar el estado de una lista vacia
    Dado una lista vacia
    Entonces la lista tiene 0 elemento almacenado
    Y si busco la clave "clave" no obtengo ningun valor

Esquema del escenario: Agregar datos a una lista vacia
    Dado una lista vacia
    Cuando agrego la clave "<clave>" con el valor <valor>
    Entonces la lista tiene 1 elemento almacenado
    Y si busco la clave "<clave>" obtengo el valor <valor>
    Ejemplos:
    | clave | valor |
    | letras | abcde |
    | numero | 7 |

Escenario: Busca un elemento en una lista con datos
    Dado una lista con los siguientes elementos
    | clave | valor |
    | "letras" | abcde |
    | "numero" | 7 |
    Entonces la lista tiene 2 elemento almacenado

Escenario: Borrar una clave de una lista
    Dado una lista con la pareja clave "clave" y valor "valor"
    Cuando se elimina la clave "clave"
    Entonces si se busca la clave "clave" se obtiene NaN
