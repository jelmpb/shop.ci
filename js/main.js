//déclencher une action sans addEventListener mais avec onclick Event
const leBouton = document.querySelector("#commander")
leBouton.onclick = () => {
    alert("Vous serrez orienter vers un Appel payant (Tarif Comminucation Usuel)")
}

console.log(leBouton);

//déclencher une action avec écouteur d'évement addEventListener()