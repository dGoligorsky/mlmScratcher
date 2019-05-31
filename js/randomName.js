const textTag = document.querySelector("h1")
const namesIDEO = [
    "Alexis Vogel",
    "Lindsay Rodabaugh",
    "Randy Plemel",
    "Thom Huxtable",
    "Simon Heather",
    "Lawrence Abrahamson",
    "Njoki Gitahi",
    "Jason Baker",
    "Ben Swire",
    "Jackie Cooksey",
    "Duane Bray",
    "Sam Haymon",
    "Anna Silverstein",
    "Mukesh Dutta",
    "Ravi Iyer",
    "HJ Kwon",
    "Meg Shoemaker",
    "Tejesh Shah",
    "Mani Nilchiani",
    "Naz Mirzaie",
    "Hailey Brewer",
    "Dominic Tan",
    "Mollie Duffy",
    "Jaci Badzin",
    "Jeremy Innes-Hopkins",
    "Paul Sweeney",
    "John Maltese",
    "Alice Kogan",
    "Sarah Canning",
    "Juan Astasio Soriano",
    "Nili Metuki",
    "Loren Blackman",
    "Sahrr Malik",
    "Sam Schulman",
    "Jerome Goh",
    "Lin Yang",
    "Diana Rhoten"
]
const namesIDEOorg = [
    "Yifan Frances",
    "Jocelyn Wyatt",
    "Chris Larkin",
    "Hitesh Singhal",
    "Sommai Pham",
    "Joan Encarnacion",
    "Hanna Pincus",
    "Danielle Ola",
    "Meg Durlak",
    "Shauna Carey",
    "Ademide Adefarasin",
    "Brynn Kolada",
    "Aya Jaffar",
    "Rafa Smith",
    "Ben Chase",
]

const namePicker = function() {
    const randIDEO = namesIDEO[Math.floor(Math.random() * namesIDEO.length)]
    const randIDEOorg = namesIDEOorg[Math.floor(Math.random() * namesIDEOorg.length)]

    textTag.innerHTML = `${randIDEO} and ${randIDEOorg}`
    console.log(randIDEO, randIDEOorg)
}

namePicker()
