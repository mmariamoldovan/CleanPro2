// ============================
// LISTA SERVICII
// ============================
const servicii = [
    {
        nume: "Curățenie apartamente",
        descriere: "Curățenie completă pentru apartamente, inclusiv bucătărie și baie."
    },
    {
        nume: "Curățenie birouri",
        descriere: "Servicii profesionale de curățenie pentru spații de birouri."
    },
    {
        nume: "Curățenie după renovare",
        descriere: "Îndepărtarea prafului, molozului și reziduurilor după renovări."
    },
    {
        nume: "Curățenie spații comerciale",
        descriere: "Curățenie adaptată magazinelor și spațiilor comerciale."
    },
    {
        nume: "Curățenie generală",
        descriere: "Curățenie profundă pentru orice tip de spațiu."
    }
];

// ============================
// AFISARE SERVICII
// ============================
function afiseazaServicii(lista) {
    const container = document.getElementById("lista-servicii");
    container.innerHTML = "";

    lista.forEach(serviciu => {
        const div = document.createElement("div");
        div.classList.add("serviciu-item");

        const titlu = document.createElement("h3");
        titlu.textContent = serviciu.nume;

        const descriere = document.createElement("p");
        descriere.textContent = serviciu.descriere;

        div.appendChild(titlu);
        div.appendChild(descriere);

        container.appendChild(div);
    });
}

// ============================
// FILTRARE SERVICII (case-sensitive)
// ============================
const inputFiltru = document.getElementById("filtru-servicii");

if (inputFiltru) {
    inputFiltru.addEventListener("input", function () {
        const textCautat = inputFiltru.value;

        const serviciiFiltrate = servicii.filter(serviciu =>
            serviciu.nume.includes(textCautat)
        );

        afiseazaServicii(serviciiFiltrate);
    });
}

// ============================
// AFISARE INITIALA
// ============================
afiseazaServicii(servicii);


// ============================
// CALCULATOR PRET CU REDUCERE
// ============================
function calculeazaPret() {
    const inputPret = document.getElementById("pret-initial");
    const rezultat = document.getElementById("rezultat-pret");

    if (!inputPret || !rezultat) {
        return;
    }

    const pretInitial = parseFloat(inputPret.value);

    // Validare
    if (isNaN(pretInitial) || pretInitial <= 0) {
        rezultat.textContent = "Te rugăm să introduci un preț valid mai mare decât 0.";
        rezultat.style.color = "#e74c3c";
        return;
    }

    const reducere = pretInitial * 0.10;
    const pretFinal = pretInitial - reducere;

    rezultat.innerHTML = `
        Preț inițial: <strong>${pretInitial.toFixed(2)} lei</strong><br>
        Reducere (10%): <strong>${reducere.toFixed(2)} lei</strong><br>
        Preț final: <strong>${pretFinal.toFixed(2)} lei</strong>
    `;

    // Efect vizual
    rezultat.style.color = "#27ae60";
    rezultat.classList.remove("efect-rezultat");
    void rezultat.offsetWidth; // reset animație
    rezultat.classList.add("efect-rezultat");
}


// ============================
// TRIMITERE FORMULAR CONTACT
// ============================
function trimiteFormular() {
    const nume = document.getElementById("nume");
    const email = document.getElementById("email");
    const mesaj = document.getElementById("mesaj");
    const rezultat = document.getElementById("rezultat-formular");

    if (!nume || !email || !mesaj || !rezultat) {
        return;
    }

    // Reset mesaj
    rezultat.textContent = "";
    rezultat.style.color = "";

    // Validare campuri goale
    if (nume.value.trim() === "" || email.value.trim() === "" || mesaj.value.trim() === "") {
        const eroare = "Toate câmpurile sunt obligatorii.";
        rezultat.textContent = eroare;
        rezultat.style.color = "#e74c3c";
        alert(eroare);
        return;
    }

    // Validare email
    if (!email.value.includes("@")) {
        const eroare = "Adresa de email nu este validă.";
        rezultat.textContent = eroare;
        rezultat.style.color = "#e74c3c";
        alert(eroare);
        return;
    }

    // Succes
    rezultat.textContent = "Mesajul a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.";
    rezultat.style.color = "#27ae60";

    // Golire campuri
    nume.value = "";
    email.value = "";
    mesaj.value = "";
}
// ============================
// BACK TO TOP BUTTON
// ============================

// Creează butonul dacă nu există deja în HTML
let backToTop = document.querySelector(".backtotop");
if (!backToTop) {
    backToTop = document.createElement("a");
    backToTop.href = "#";
    backToTop.classList.add("backtotop");
    backToTop.textContent = "↑";
    document.body.appendChild(backToTop);
}

// Arată / ascunde buton la scroll
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Derulare lin la click
backToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
