const textTag = document.querySelector("h1")
const namesIDEO = [
    "Sam Schulman",
    "Ian Thompson",
    "John Maltese",
    "Selma Durand",
    "Jeremy Innes-Hopkins",
    "Alex Staudt",
    "Ross Sokolovski",
    "Laura Brumit",
    "Sarah Canning",
    "Diana Rhoten",
    "Heather Currier Hunt",
    "Juan Astasio Soriano",
    "Sahhr Malik",
    "Naz Mirzaie",
    "Paul Sweeney",
    "Alice Kogan",
    "Hailey Brewer",
    "Tom Eich",
    "Sandeep Gupta",
    "Mollie Duffy",
    "Stephanie Peralta",
    "Lin Yang",
    "Dominic Tan",
    "Jaci Badzin",
    "Mani Nilchiani"
]
const namesIDEOorg = [
    "Yifan Frances",
    "Cherelle Harrell",
    "Selam Kebrom",
    "Jocelyn Wyatt",
    "Chris Larkin",
    "Hitesh Singhal",
    "Sommai Pham",
    "Joan Encarnacion",
    "Matthew Epler",
    "Hanna Pincus",
    "Danielle Ola",
    "Allie Iaccarino",
    "Meg Durlak",
    "Shauna Carey",
    "Ademide Adefarasin",
    "Brynn Kolada",
    "Aya Jaffar",
    "Rafa Smith",
    "Ben Chase"
]

const namePicker = function() {
    const randIDEO = namesIDEO[Math.floor(Math.random() * namesIDEO.length)]
    const randIDEOorg = namesIDEOorg[Math.floor(Math.random() * namesIDEOorg.length)]

    textTag.innerHTML = `${randIDEO} and ${randIDEOorg}`
    console.log(randIDEO, randIDEOorg)
}

namePicker()