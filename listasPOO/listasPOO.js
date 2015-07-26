function Lista( options ){
	var debug = false;
	var L = null;
    this.pNodo = null;

	if(typeof options == 'object' && options !== null){
		debug = options.debug;
	}

	function _newNodo(data){
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

	this.empty = function(){
		if(L == null){
			return true;
		}
		return false;
	}

	this.insertFirst = function( data ){
		var nuevo = _newNodo(data);
		nuevo.sig = L;
		L = nuevo
        this.reset();
		_consola('Nuevo nodo creado en al inicio de la Lista');
	}

	this.deleteFirst = function( ){
		if(!this.empty()){
			var aux = L;
			L = L.sig;
            this.reset();
			_consola('Nodo eliminado del inicio de la Lista');
		}
	}

    this.insertLast = function( data ){
        if( this.empty() ){
            this.insertFirst(data);
        }else{
            this.reset();
            while(this.pNodo.sig != null){
                this.next();
            }
            var nuevo = _newNodo(data);
            nuevo.sig = this.pNodo.sig;
            this.pNodo.sig = nuevo;
            this.pNodo = nuevo;
        }
    }

    this.reset = function( ){
        this.pNodo = L;
    }

    this.next = function(){
        if(this.pNodo == null){
            this.pNodo = null;
        }else{
            this.pNodo = this.pNodo.sig;
        }
    }

    this.viewAll = function(){
        var aux = L;
		document.write( "L -> ");
        while(aux != null){
            document.write( aux.data + " -> ");
            aux = aux.sig;
        }
        document.write('&times;' + '<br/>');
    }

};
