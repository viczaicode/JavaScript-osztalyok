export default class Ember {

    #szulIdo
    #kor
    #nev
    constructor(nev, szulIdo, magassag, szuloElem) {
        this.#nev = nev;
        this.#szulIdo = szulIdo;
        this.magassag = magassag;
        this.szuloElem = szuloElem;
        this.getKor();
        console.log(this.#kor);
        this.megjelenit();
    }

    setNev(ujnev) {
        if (ujnev === "Béla" || ujnev === "Géza") {
            this.#nev = ujnev
        }
        
    }

    getNev() {
        return this.#nev
    }


    megjelenit() {
        let html = `         
        <div class="ember">
            <h2>${this.#nev}</h2>
            <p>${this.#kor}</p>
            <p>${this.magassag}</p>
         </div>`
         this.szuloElem.innerHTML += html;
    }


    /* getter korra */
    getKor() {
        const d = new Date();
        let year = d.getFullYear();
        this.#kor = year - this.#szulIdo; 
        return this.#kor
    }

}