const db = require('../util/database');

module.exports = class ligarforno{

    constructor(btligarforno, fornoligado){
     this.btligarforno =  btligarforno;
     this.fornoligado = fornoligado;
    }

    static selectposicao(){
        return db.execute ("select * from posicao");
    }

    static selectbuscaposicao(){
        return db.execute ("select * from buscar_posicao");
    }

    static updateposicao(posicao_buscar){
        return db.execute('update buscar_posicao set posicao_buscar= ?', [posicao_buscar]);
        }


}