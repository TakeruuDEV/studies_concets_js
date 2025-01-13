// Criar um exemplo de funções puras e impuras
// Função pura
function exibirNome(nome){
    return nome;
}
console.log("\nExemplo função pura: ");

console.log(exibirNome("Maicão\n"));

// Função impura
resultado = 9;
function contando(a){
    resultado += a;
    return resultado;
}
console.log("Exemplo função ímpura: ");
console.log(contando(10),"\n");

//---------------------------------------------//

// Criar um exemplo de currying
function somandoCurry(value1){
    return function(value2) {
        return value1+ value2
    }
}
console.log("Exemplo função currying: ");
console.log(somandoCurry(2)(2),"\n");

//---------------------------------------------//

// Criar um exemplo de funções de ordem superior (higher-order functions)
function aplicarFuncao(valor, fn){
    return fn(valor);
}
  
function multiplicarPor2(x){
    return x * 2;
}
console.log("Exemplo função de ordem superior: ");
console.log(aplicarFuncao(5, multiplicarPor2), "\n");

//---------------------------------------------//

// Criar um exemplo de closure
function saudarUsuario(nome){
    const saudacao = "Olá, ";
    return function() {
        console.log(saudacao + nome + "!\n");
    }
}
const saudarFernando = saudarUsuario("Fernando");

console.log("Exemplo de função closure: ");
saudarFernando();

//---------------------------------------------//

// Criar um exemplo de callbacks
function darTchau(callback){
    const nome = "Fernando";
    callback(nome);
}
function exibirTchau(nome){
    console.log("Tchau, " + nome + "\n");
}
console.log("Exemplo função Callback: ");
darTchau(exibirTchau);

//---------------------------------------------//

// Criar um exemplo de imutabilidade
const pessoa = {nome: "Fernando", idade: 19};
const novaPessoa = {...pessoa, idade: 20};

console.log("Exemplo de imutabilidade: ");
console.log(pessoa);
console.log(novaPessoa + "\n");

//---------------------------------------------//

// Criar um exemplo de deep copy e shallow copy
const original = {nome: "Fernando", idade: 19}

// Shallow Copy
const copia = {...original}
copia.nome = "Felipe Nunes";
copia.idade = "23";

console.log("Exemplo shallow copy: ");
console.log(original);
console.log(copia);

// Deep Copy
const deepCopia = JSON.parse(JSON.stringify(original));
deepCopia.nome = "Juninho";
deepCopia.idade = "20";

console.log("\nExemplo deep copy: ");
console.log(original);
console.log(deepCopia);
