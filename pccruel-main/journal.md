# JOURNAL DE BORD — PROJET WEB NSI


## Groupe : Vuk, Mehdi, Wassim
## Thème : SIte de Comparaison Hardware



## 20/04/2026
  - Brainstorming et validation de l'arborescence des fichiers
  - Maquetatage des pages `index.html`, `gpu.html` et `contact.html`
  - Répartition des tâches dev initiales 
  - Dépôt  créé sur github



## 22/04/2026 
Vuk
  - Écriture du squelette HTML global pour `index.html`
  - Intégration de la balise `<nav>` avec les liens ancres vers les 3 futures pages
  - Création du fichier vide `style.css`
* **Blocage :** Les liens du menu cassent si on change de dossier
* **Solution :** Choix de tout laisser à la racine (flat structure) : `index.html`, `contenu.html`, `contact.html` dans le même répertoire



## 24/04/2026 
 Mehdi
  - Creation de la page des gpu
  
* **Blocage :** Les images libres de droits téléchargées (format .WEBP) ne s'affichent pas sous l'ancien navigateur de test
* **Solution :** Conversion de toutes les images en `.png` et stockage dans un sous-dossier `/img`



## 25/04/2026 
 Wassim

  - Codage du formulaire dans `contact.html`
  - Ajout des balises `<input type="text">` (nom), `<input type="email">` (email) et `<textarea>` (message)
  - Ajout du bouton `<button type="submit">`
* **Statut technique :** Choix de l'attribut `method="POST"` pour éviter de passer les données utilisateur (notamment l'email) en clair dans l'URL



## 27/04/2026 
(Discord) Vuk Mehdi Wassim
  - Fusion des fichiers HTML pour vérifier la navigation (Menu `<nav>` identique copié-collé partout)
  - Utilisation de `display: flex` sur la classe `.menu-nav` pour aligner les liens horizontalement
  - Ajout de la fonction de recherche en JS
  - Ajout du reset CSS de base (`margin: 0; padding: 0; box-sizing: border-box;`)
  - Le site est testé en local, le CSS externe applique les polices ("Darkthrone") et les couleurs uniformément sur les 3 pages



## 29/04/2026 
Vuk
  - Approfondissement du fichier style.css 
  - Nouvelles font ajoutes
  




## 03/05/2026 
 (Discord)  Vuk Mehdi Wassim

 - Amélioration du JavaScript 
 - Changement de couleur dynamique via CSS * 
 - Site fonctionnel, mais reste quelque pages redondantes a finir


