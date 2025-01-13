// Criar um exemplo de funções puras e impuras
// Função pura
function showName(name){
    return name;
}
console.log("\nExemplo função pura: ");

console.log(showName("Maicão\n"));

// Função impura
result = 9;
function counting(a){
    result += a;
    return result;
}
console.log("Exemplo função ímpura: ");
console.log(counting(10),"\n");

//---------------------------------------------//

// Criar um exemplo de currying
function addCurry(value1){
    return function(value2) {
        return value1+ value2
    }
}
console.log("Exemplo função currying: ");
console.log(addCurry(2)(2),"\n");

//---------------------------------------------//

// Criar um exemplo de funções de ordem superior (higher-order functions)
function aplyFunction(value, fn){
    return fn(value);
}
  
function multiplyBy2(x){
    return x * 2;
}
console.log("Exemplo função de ordem superior: ");
console.log(aplyFunction(5, multiplyBy2), "\n");

//---------------------------------------------//

// Criar um exemplo de closure
function hiToUser(name){
    const saudation = "Olá, ";
    return function() {
        console.log(saudation + name + "!\n");
    }
}
const saudationFernando = hiToUser("Fernando");

console.log("Exemplo de função closure: ");
saudationFernando();

//---------------------------------------------//

// Criar um exemplo de callbacks
function giveBye(callback){
    const name = "Fernando";
    callback(name);
}
function showBye(name){
    console.log("Tchau, " + name + "\n");
}
console.log("Exemplo função Callback: ");
giveBye(showBye);

//---------------------------------------------//

// Criar um exemplo de imutabilidade
const person = {name: "Fernando", age: 19};
const newPerson = {...person, age: 20};

console.log("Exemplo de imutabilidade: ");
console.log(person);
console.log(newPerson + "\n");

//---------------------------------------------//

// Criar um exemplo de deep copy e shallow copy
const original = {name: "Fernando", age: 19}

// Shallow Copy
const copy = {...original}
copy.name = "Felipe Nunes";
copy.age = "23";

console.log("Exemplo shallow copy: ");
console.log(original);
console.log(copy);

// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.name = "Juninho";
deepCopy.age = "20";

console.log("\nExemplo deep copy: ");
console.log(original);
console.log(deepCopy);
