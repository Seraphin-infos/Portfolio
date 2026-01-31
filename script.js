let getID = localStorage.getItem("id") || [];
let getStockCompet = JSON.parse(localStorage.getItem("stock")) || [];

// Creation des menus nav bar
const nav = document.querySelector('.nav');
let navMenu = [
    { href: "#accueil", actif: true, contenue: "Accueil" },
    { href: "#a-propos", actif: false, contenue: "À propos" },
    { href: "#competences", actif: false, contenue: "Compétences" },
    { href: "#projets", actif: false, contenue: "Projets" },
    { href: "#contact", actif: false, contenue: "Contact" },
    { href: "#pas", actif: false, contenue: "<i class='fa-light fa-bars bar'></i>" }
]

const menus = navMenu.map((menu) => {
    // Création nav bar
    const divCont = document.createElement("div");
    const a = document.createElement("a");
    const sousDiv = document.createElement("div");
    divCont.classList.add("nav-cont");
    a.setAttribute('href', menu.href);
    a.classList.add('actif');
    a.innerHTML = menu.contenue;
    sousDiv.classList.add("ligne-nav");
    sousDiv.classList.add("actif");

    // Gestion d'actif nav bar
    if (!menu.actif) {
        a.setAttribute('class', 'nonActif')
        sousDiv.classList.remove('actif');
    }
    a.addEventListener('click', () => {
        const m = navMenu.find((el) => {
            return el.contenue === a.innerHTML
        })
        m.actif = true
        const lien = nav.querySelectorAll('a');
        const ligneNav = nav.querySelectorAll('.ligne-nav');
        for (let aLien of lien) {
            aLien.setAttribute('class', 'nonActif');
        }
        for (let lNav of ligneNav) {
            lNav.classList.remove("actif");
        }
        sousDiv.classList.add('actif');
        a.setAttribute('class', 'actif');

    })
    nav.append(divCont);
    divCont.append(a);
    divCont.append(sousDiv);
})

// MENU MOBILE ASIDE
const bar = document.querySelector('.bar');
const aside = document.querySelector('aside');
const boutonX = document.querySelector('.boutonX');
bar.addEventListener('click', () => {
    aside.style.display = "block";
    aside.style.animation = "asideMenuEntrer 0.8s ease-in-out";
});
boutonX.addEventListener('click', () => {
    aside.style.animation = "asideMenuSortie 0.8s ease-in-out";
    setTimeout(() => {
        aside.style.display = "none";
    }, 800)
});

// selection 
const competences = document.querySelector('#competences');
let icoPlus = document.querySelector('.icoPC');

// MODAL AJOUTER COMPETENCES
// icoPlus.addEventListener('click', () => {
//     // creation box modal
//     const boxModalPlus = document.createElement('div');
//     competences.append(boxModalPlus);
//     boxModalPlus.setAttribute('class', 'boxMP')
//     boxModals(boxModalPlus);

//     const btnX = document.querySelector('.btnX');
//     // eviter de plusieurs clique
//     if (boxModalPlus.hasAttribute('class')) {
//         icoPlus.disabled = true;
//     }


//     // contenue de la formulaire Mot de passe
//     const titreModalPlus = document.createElement('h2');
//     titreModalPlus.innerHTML = "Mot de passe </br> </br>";
//     titreModalPlus.setAttribute('class', "titreModalPlus");
//     const labelModalPlus = document.createElement('label');
//     labelModalPlus.innerHTML = "mot de passe de SéraphinDev pour ajouter une nouvelle compétence ! </br> </br>"
//     labelModalPlus.style.lineHeight = "25px"
//     labelModalPlus.style.color = "var(--noir)"
//     const inputModalPlus = document.createElement('input');
//     inputModalPlus.setAttribute('class', "inputModalPlus");
//     inputModalPlus.type = "password"
//     const btnValiderModal = document.createElement('button');
//     btnValiderModal.setAttribute('class', "btnValiderModal");
//     btnValiderModal.innerHTML = "Valider"
//     // ajouter les contenues dans la page
//     boxModalPlus.append(titreModalPlus);
//     boxModalPlus.append(labelModalPlus);
//     boxModalPlus.append(inputModalPlus);

//     // chargement et verifier mot de passe
//     btnValiderModal.addEventListener('click', () => {
//         // chargement
//         inputModalPlus.style.animation = "chargement 1s linear"
//         inputModalPlus.style.border = "2px solid rgba(0, 0, 0, 0.753)";
//         inputModalPlus.style.borderRadius = "7px"
//         btnValiderModal.style.display = "none";
//         inputModalPlus.style.width = "320px"

//         setTimeout(() => {
//             inputModalPlus.value = "";
//             inputModalPlus.style.animation = "tourner infinite 2s linear";
//         }, 1000)
//         // verifier mot de passe Promise
//         mdp = "seraphininfo";
//         async function verifierMdp() {
//             return new Promise((resolve, reject) => {
//                 if (inputModalPlus.value === mdp) {
//                     const vraiMdp = document.createElement('p');
//                     setTimeout(() => {
//                         resolve(vraiMdp.innerHTML = "<i class='fas fa-check-circle icoVrai'></i>")
//                         inputModalPlus.style.display = "none";
//                         boxModalPlus.append(vraiMdp);
//                     }, 5000)
//                 } else {
//                     const vraiMdp = document.createElement('p');
//                     reject(vraiMdp.innerHTML = "<i class='fas fa-times-circle icoFaux'></i>")
//                     setTimeout(() => {
//                         inputModalPlus.style.display = "none";
//                         boxModalPlus.append(vraiMdp);
//                     }, 5000)
//                 }
//             })
//         }
//         // ajouter contenue compétence
//         async function contenueCompetence() {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     boxModalPlus.style.display = "none";
//                     // creation contenue formulaire Nouvelle compétence
//                     const contNvCompetence = document.createElement('div');
//                     competences.append(contNvCompetence);
//                     contNvCompetence.setAttribute('class', 'boxMP')
//                     resolve(boxModals(contNvCompetence))
//                     const titreModalPlus = document.createElement('h2');
//                     titreModalPlus.innerHTML = "Nouvelle compétence </br> </br>";
//                     titreModalPlus.setAttribute('class', "titreModalPlus");
//                     labelModalPlus.innerHTML = " Entrer une compétence </br> "
//                     labelModalPlus.style.color = "var(--noir)"
//                     const inputAjoutCompet = document.createElement('input');
//                     inputAjoutCompet.setAttribute('class', "inputAjoutCompet");
//                     inputAjoutCompet.type = "text"
//                     const btnAjouterModal = document.createElement('button');
//                     btnAjouterModal.setAttribute('class', "btnAjouterModal");
//                     btnAjouterModal.innerHTML = "Ajouter"
//                     // ajouter des contenues dans la page
//                     contNvCompetence.append(titreModalPlus);
//                     contNvCompetence.append(labelModalPlus);
//                     contNvCompetence.append(inputAjoutCompet);
//                     contNvCompetence.append(btnAjouterModal);
//                 }, 1000)
//             })
//         }
//         // bouton ajouter compétence
//         async function ajouterCompet() {
//             return new Promise((resolve, reject) => {
//                 let competContainer = document.querySelector(`.competences-container`);
//                 const btnAjouterModal = document.querySelector('.btnAjouterModal');
//                 btnAjouterModal.addEventListener('click', () => {
//                     // Stocker la nouvel compétence dans localStorage
//                     const inputAjoutCompet = document.querySelector('.inputAjoutCompet');
//                     const divAjoutC = document.createElement('div');
//                     divAjoutC.setAttribute('class', "nom-competence");
//                     const h2AjoutC = document.createElement('h2');
//                     resolve(h2AjoutC.innerHTML = inputAjoutCompet.value);
//                     competContainer.append(divAjoutC);
//                     divAjoutC.append(h2AjoutC);
//                     getStockCompet.push(inputAjoutCompet.value);
//                     localStorage.setItem("stock",JSON.stringify(getStockCompet));
//                 })
//             })
//         }
//         // resultat asynchrone
//         async function resultat() {
//             try {
//                 const verifier = await verifierMdp();
//                 await contenueCompetence();
//                 await ajouterCompet();
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         resultat()

//     })
//     boxModalPlus.append(btnValiderModal);
// })

// // creation modal
// function boxModals(box) {
//     const boxModalPlus = document.querySelector('.boxMP')
//     const btnX = document.createElement('p');
//     btnX.textContent = 'X';
//     btnX.setAttribute('class', 'btnX')
//     box.append(btnX)
//     // fermeture de modal
//     btnX.addEventListener('click', () => {
//         icoPlus.disabled = false;
//         box.style.animation = "sortie 0.5s linear";
//         setTimeout(() => {
//             box.remove();
//         }, 400);
//     })
// }

// function afficherCompetence() {
//     let competContainer = document.querySelector(`.competences-container`);
//     for (let affiche of getStockCompet) {
//         const divAjoutC = document.createElement('div');
//         divAjoutC.setAttribute('class', "nom-competence");
//         const h2AjoutC = document.createElement('h2');
//         h2AjoutC.innerHTML = affiche
//         competContainer.append(divAjoutC);
//         divAjoutC.append(h2AjoutC);
//     }
// }
// afficherCompetence();

