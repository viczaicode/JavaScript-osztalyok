import Ember from "./Ember.js";
import { EMBEREKLISTA } from "./adat.js";
let articleElem = document.querySelector("article")
for (let index = 0; index < EMBEREKLISTA.length; index++) {
    const EMBER = new Ember(EMBEREKLISTA[index].nev, EMBEREKLISTA[index].szulIdo, EMBEREKLISTA[index].magassag, articleElem);
    
}



console.log(ember1);
console.log(ember1.szulido);
console.log(ember1.nev, ember1.kor,ember1.magassag);
console.log(ember1.getKor())

ember1.kor = 23
console.log(ember1.kor)

console.log(ember1.getNev())
console.log(ember1.getKor());