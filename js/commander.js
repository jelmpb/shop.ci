let btnEnvoyer = document.querySelector("button");
console.log(btnEnvoyer);

//déclencher une action sans addEventListener mais avec onclick Event
const leBouton = document.querySelector("#commander")
leBouton.onclick = () => {
    alert("Vous serrez orienter vers un Appel payant (Tarif Comminucation Usuel)");
};

console.log(leBouton);


