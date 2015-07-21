function Pila( options ){
	var debug = false;
	var P = null;

	if(typeof options == 'object' && options !== null){
		debug = options.debug;
	}

	function _nuevoNodo(data){
		return {data: data, sig: null};
	}

	function _consola(msg){
		if(debug){
			console.log(msg);
		}
	}

	this.setDebug = function( valor ){
		debug = valor;
	}

	this.init = function (){
		P = null;
	}

	this.empty = function(){
		if(P == null){
			return true;
		}
		return false;
	}

	this.push = function( data ){
		var nuevo = _nuevoNodo(data);
		nuevo.sig = P;
		P = nuevo
		_consola('Nuevo nodo creado en la Pila');
	}

	this.pop = function( ){
		if(!this.empty()){
			var aux = P;
			P = P.sig;
			_consola('Nodo eliminado de la Pila');
			return aux.data;
		}
	}

	this.top = function( ){
		return P.data;
	}

};
