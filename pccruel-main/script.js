// redirige vers une page
function allerVers(page) {
    window.location.href = page;
}

// filtre selon ce que l utilisateur tape
function filtrer() {
    let texte = document.getElementById("recherche").value.toLowerCase();
    let cartes = document.getElementsByClassName("carte");

    // boucle 1 On cache ou on affiche
    for (let i = 0; i < cartes.length; i++) {
        let nom = cartes[i].getElementsByTagName("p")[0].innerText.toLowerCase();
        
        if (nom.includes(texte)) {
            cartes[i].style.display = "block";
        } else {
            cartes[i].style.display = "none";
        }
    }
    let visibles = 0; 
    
    for (let j = 0; j < cartes.length; j++) {
        if (cartes[j].style.display !== "none") {
            visibles = visibles + 1;
        }
    }


    document.getElementById("nb-produits").innerText = visibles + " produits trouvés";
}


