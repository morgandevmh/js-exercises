// 1\ nombre de 1 a 10
for (let i = 1; i <= 10; i++){
    console.log(i);
}

// 2\  prompt et prénom
let prenom = prompt("ton prénom");
console.log("Bonjour, " + prenom + "!"); 


// 3\ somme
let a = Number(prompt("nmbre 1"));
let b = Number(prompt("nombre 2"));
function sum(a,b){
    return a + b;
}
console.log(sum(a,b));
 

// 4\ nombres de caractères
let chaine = [1,2,3,"A","B","C"]
function nb (chaine){
    return chaine.length;
}
console.log(nb(chaine))

// 5\ pair impair
let nombre = Number(prompt("ecrit un nombre"))
function estPair (nombre){
    if (nombre % 2 === 0){
        console.log("Pair")
    } else {
        console.log("Impair")
    }
}
console.log(estPair(nombre))


// 6\ nombre au dessu de 10
let tableau = [10,3,12,4,25,100,7,9,60,43,3,90]
let nouveauTableau =[]
function dixPlus(tableau) {
    for (let i = 0; i < tableau.length; i++){
       if(tableau[i] > 10){
        nouveauTableau.push(tableau[i])
       } 
    }
    return nouveauTableau 
}
console.log(dixPlus(tableau))



// 7\ mdp aléatoire 
let caracteres = "azertyuiopqsdfghjklmwxcvbn1234567890"
function mdp(caracteres){
    let mdp = ""
    for (let i = 0; i < 8; i++ ){
        let resultat = Math.floor(Math.random() * caracteres.length);
        mdp += caracteres[resultat]
    }
    return mdp
}
console.log(mdp(caracteres))

