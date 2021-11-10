const sequencia = {
    _valor: 1, // Convencao
    get valor(){ return this._valor++ },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

// ...
// ...

let Pessoa = {
    nome: "João",
    sobrenome: "Santos",
    idioma : "Português",
 
    get linguagem() {
      return this.idioma
    },
 
  }
console.log(Pessoa.linguagem)
console.log(Pessoa)

let Pessoa2 = {
    nome: "João",
    sobrenome: "Santos",
    idioma : "",
 
    set linguagem (lang) {
        this.idioma = lang;
      }
 
  }
Pessoa2.linguagem = "Português"
console.log(Pessoa2.idioma)
console.log(Pessoa2)