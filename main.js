import Ember from "./Ember.js";


let articleElem = document.querySelector("article")
const ember1 = new Ember("Jenő", 1977, 220, articleElem)
const ember2 = new Ember("Jolán", 1978, 120, articleElem)
console.log(ember1);
console.log(ember1.szulido);
console.log(ember1.nev, ember1.kor,ember1.magassag);
console.log(ember1.getKor())

ember1.kor = 23
console.log(ember1.kor)

console.log(ember1.getNev())
console.log(ember1.getKor());