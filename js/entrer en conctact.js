let btnEnvoyer = document.querySelector("button");
console.log(btnEnvoyer);

btnEnvoyer.addEventListener("click", () => {
    //récupérer les données du formulaire
    let genre = document.querySelectorAll("input [name = 'genre']");

    for (i = 0; i < genre.length; i++) {
        if (genre[i].checked === true) {
            leGenre = genre[i].value;
        }
    }
    //stocker les saisies dans le local Storage
localStorage.setItem("Le genre", document.querySelector("#genre").value);
localStorage.setItem("Nom", document.querySelector("#nom").value);
localStorage.setItem("Prénom", document.querySelector("#prenom").value);
localStorage.setItem("Suppléments", document.querySelector("#e-mail").value);
localStorage.setItem("Suppléments", document.querySelector("#contact").value);
localStorage.setItem("Suppléments", document.querySelector("#objet").value);
localStorage.setItem("Message", document.querySelector("#texteformulaire").value);

    console.log(document.querySelector("#nom").value);
});
