# listasJS
Implementación de listas enlazada en javascript

### Listas simples enlazadas
> La lista enlazada básica es la lista enlazada simple la cual tiene un enlace por nodo. Este enlace apunta al siguiente nodo (o indica que tiene la dirección en memoria del siguiente nodo) en la lista, o al valor NULL o a la lista vacía, si es el último nodo.
[Fuente Wikipedia](https://es.wikipedia.org/wiki/Lista_%28inform%C3%A1tica%29#Listas_enlazadas_lineales 'https://es.wikipedia.org/wiki/Lista_%28inform%C3%A1tica%29#Listas_enlazadas_lineales')

# Funciones
```javascript
// Retorna la estructura de un nuevo nodo
function nuevoNodo(data);

// Inicializar Lista
function init();

// Verifica si la lista L se encuentra vacia
function listaVacia(L);

// Inserta un nuevo nodo al principio de la lista L
function insertarInicio(L, data);

// Inserta un nuevo nodo al final de la lista L
function insertarFinal(L, data);

// Elimina el primer nodo de la lista L
function elimiarInicio(L);

// Elimina el ultimo nodo de la Lista L
function elimiarFinal(L);

// Muestra todos los nodos de la lista L en pantalla
function mostrarTodo(L);

// Muestra mensajes a través de la consola de javascript
var debug = false; // true
function consola(msg);
```

# Estructura basica
```javascript
debug = true;

var Lista;

Lista = init();

Lista = insertarInicio(Lista, 1);
Lista = insertarInicio(Lista, 2);
Lista = insertarInicio(Lista, 3);
Lista = insertarInicio(Lista, 4);
mostrarTodo(Lista);

Lista = insertarFinal(Lista, 5);
Lista = insertarFinal(Lista, 6);
Lista = insertarFinal(Lista, 7);
mostrarTodo(Lista);

Lista = elimiarInicio(Lista);
Lista = elimiarFinal(Lista);
mostrarTodo(Lista);
```
