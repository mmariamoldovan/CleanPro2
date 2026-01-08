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
