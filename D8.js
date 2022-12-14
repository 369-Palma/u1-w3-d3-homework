/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const NewTitle = document.querySelector("h1");
  NewTitle.innerText = "Nuovo titolo";
};

changeTitle();

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
  const NewClass = document.querySelector("h1");
  NewClass.classList.add("myHeading");
  //NewClass.setAttribute("class", "newClass");
  NewClass.classList.add("myHeading");
  console.log(NewClass);
};

addClassToTitle();

/* ESERCIZIO 3
       Scrivi una funzione per che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
  const p = document.querySelectorAll("div p");
  p.forEach((p) => {
    p.innerHTML = "testo del paragrafo del documento";
  });
};
changePcontent();

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */
/* const changeUrls = function () {
  const ChangeA = document.getElementsByClassName("perlink");
  ChangeA.setAttribute("href", "https://www.google.com"); //Uncaught TypeError: ChangeA.setAttribute is not a function
};
changeUrls(); */
const changeUrls = function () {
  //   aHrefs = document.getElementsByTagName("a");
  aHrefs = document.querySelectorAll("a:not(footer a)");
  for (let a = 0; a < aHrefs.length; a++) {
    aHrefs[a].href = "https://www.google.com";
  }
};
/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
  const NuovoElemento = document.createElement("li");
  NuovoElemento.innerText = "Sono un nuovo elemento della lista";
  const padre = document.getElementById("secondList");
  padre.appendChild(NuovoElemento);
};
addToTheSecond();

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un secondo paragrafo al primo div
    */

const addParagraph = function () {
  const nuovaP = document.createElement("p");
  nuovaP.innerText = "Sono il secondo paragrafo del primo div";
  const padre = document.getElementsByTagName("div");
  padre[0].append(nuovaP);
};
addParagraph();

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  const EliminaLista1 = document.getElementById("firstList");
  EliminaLista1.remove("firstList");
};

hideFirstUl();

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  const cambiaColore = document.querySelectorAll("ul");
  cambiaColore.forEach((ul) => ul.classList.add("backgroundverde"));
};
paintItGreen();

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

/*   const makeItClickable = function () {
  const LettereRimaste = document.getElementsByTagName("h1").onclick =
    LettereRimaste[0]=LettereRimaste.innerText.slice(0,-1);
  //const LettereRimasteArray = Array.from(LettereRimaste);
};

makeItClickable();  */

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

/* const revealFooterLink = function () {
  const footerLink = document.querySelector("footer a").href;
  alert(footerLink);
};
 */
/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {};

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {};

/* EXTRA ESERCIZIO 16
      Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
    */
/* const deleteVowels = function () {
  document.querySelectorAll("h1,h2,h3,p,a,li,th,td").forEach(
    (node) =>
      (node.innerText = [...node.innerText]
        .filter((char) => {
          char = char.toLowerCase();
          return (
            char !== "e" &&
            char !== "a" &&
            char !== "i" &&
            char !== "o" &&
            char !== "u"
          );
        })
        .join(""))
  );
};

deleteVowels();
 */
