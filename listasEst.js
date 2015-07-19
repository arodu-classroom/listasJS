
/** Retorna la estructura de un nuevo nodo
 *	data: guarda la informacion del nodo
 *	sig: guarda la referencia al siguente nodo
 */
function nuevoNodo(data){
	return {data: data, sig: null};
}

/** Inicializar Lista
 */
function init(){
	consola('Lista inicializada');
	return null;
}

/** Verifica si la lista L se encuentra vacia
 */
function listaVacia(L){
	if(L == null){
		return true;
	}
	return false;
}

/** Inserta un nuevo nodo al principio de la lista L
 */
function insertarInicio(L, data){
	var nuevo = nuevoNodo(data);
	nuevo.sig = L;
	L = nuevo;
	consola('Nuevo nodo creado al inicio de la Lista');
	return L;
}

/** Inserta un nuevo nodo al final de la lista L
 */
function insertarFinal(L, data){
	if(listaVacia(L)){
		return insertarInicio(L,data);
	}
	var nuevo = nuevoNodo(data);
	var aux = L;
	while(aux.sig != null){
		aux = aux.sig;
	}
	nuevo.sig = aux.sig;
	aux.sig = nuevo;
	consola('Nuevo nodo creado al final de la Lista');
	return L;
}

/** Elimina el primer nodo de la lista L
 *	si la lista se encuentra vacia entonces retorna la misma lista
 */
function elimiarInicio(L){
	if(listaVacia(L)){
		return L;
	}
	var aux = L;
	L = L.sig;
	delete(aux);
	consola('Nodo eliminado al inicio de la Lista');
	return L;
}

/** Elimina el ultimo nodo de la Lista L
 *	si la lista se encuentra vacia, entonces retorna la misma lista
 *	si la lista solo tiene un nodo, entonces ejecuta la funcion elimiarInicio
 */
function elimiarFinal(L){
	if(listaVacia(L)){
		return L;
	}
	if(L.sig == null){
		return elimiarInicio(L);
	}
	var aux = L;
	var ant = L;
	while(aux.sig != null){
		ant = aux;
		aux = aux.sig;
	}
	ant.sig = aux.sig;
	delete(aux);
	consola('Nodo eliminado al final de la Lista');
	return L;
}

/** Muestra todos los nodos de la lista L en pantalla
 */
function mostrarTodo(L){
	var aux = L;
	while(aux != null){
		document.write(aux.data+" -> ");
		aux = aux.sig;
	}
	document.write("&times;<br/>");
	consola('Lista mostrada en pantalla');
}

/** Muestra mensajes a través de la consola de javascript
 */
var debug = false;
function consola(msg){
	if(debug){
		console.log(msg);
	}
}
