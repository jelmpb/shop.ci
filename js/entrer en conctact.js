let btnEnvoyer = document.querySelector("button");
console.log(btnEnvoyer);

btnEnvoyer.addEventListener("click", () => {
    //récupérer les données du formulaire
    let genre = document.querySelectorAll("input [name = 'genre']");
    console.log(genre);
});
