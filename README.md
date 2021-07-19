# TSIoT.Tp3
Universidad de Buenos Aires | Facultad de Ingenieria

Carrera de Especialista en IoT

Testing de Sistemas IoT

TP3. Práctica BDD (Behavior Driven Development)

El objetivo es completar el desarrollo de una lista que almacena pares clave:valor
utilizando BDD para el desarrollo de la misma.

Se deben implementar los siguientes requerimientos:

    A. La lista debe almacenar pares clave:valor.
    B. Las claves almacenadas en la lista deben ser únicas.
    C. Las claves son cadenas de texto.
    D. Se debe poder recuperar un valor a partir de una clave.
    E. Se debe poder actualizar el valor asociado a una clave.
    F. Se debe poder borrar una pareja a partir de la clave.
    G. Se debe poder recuperar la cantidad de elementos almacenados en la lista.
    H. Se debe poder recuperar una lista ordenada de las claves almacenadas en la lista.

Enfoque

Las funcionalidades solicitadas se implementan en la carpeta "src" en el archivo lista.js
Por otra parte en la carpeta "features" se implementa a traves de tres archivos el testing a traves de cucumber. 
En dos de los archivos, "gestion.feature" y "listar.feature", se definen los escenarios y los casos de prueba en un lenguaje entendible por
quien debe evaluar desde el lado del usuario por ejemplo. Finalmente, en el archivo "lista_steps.js", se escribe el codigo
que realiza los casos de prueba.
