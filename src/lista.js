module.exports = class Lista {
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    count() {
        return this.#elementos.length;
    }

    find(clave) {
        if (this.count() == 0) {
            return NaN;
        } else {
            return this.#elementos[0].valor;
        }    

    }

    add(clave, valor) {
        this.#elementos.push({clave, valor});
    }

    //Genera el indice de la clave 
    indexClave(clave) {
        for(var i = 0; i < this.#elementos.length; i++) {
            if(this.#elementos[i].clave == clave) {
                return i;
            }
        }
        return NaN;
    }

    // Borra la pareja {clave, valor} a partir de eliminar la 'clave'
    delete(clave) {
        var index = this.indexClave(clave);
        if(!isNaN(index)) {
            return index
        }
        else {
            this.#elementos.splice(index, 1);
            return true
        }
    }

    // Actualiza el valor asociado a una clave
    actualiza(clave, valor) {
        var index = this.indexClave(clave);
        if (!isNaN(index)) {           
            this.#elementos[index].valor = parseInt(valor);
            return valor;
        }
        return NaN;
    }  
    
    listarClaves() {
        var claves=[];
        for(var item of this.#elementos){
            claves.push(item.clave); 
        }       
        return claves;  
    }
}