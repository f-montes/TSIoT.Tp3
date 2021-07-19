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

    indexClave(clave) {
        for(var i = 0; i < this.#elementos.length; i++) {
            if(this.#elementos[i].clave == clave) {
                return i;
            }
        }
        return NaN;
    }

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
}