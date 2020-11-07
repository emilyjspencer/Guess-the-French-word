

let score = 25;

let words = ["un chat", "un chien", "un lapin", "un oiseau", "une livre", "une pomme", "une assiette", "une tasse", "un frere", "une mere", "un mere", "une soeur", "un lit", "une toilette", 
"un crayon", "une fleur", "un train", "une voiture", "un velo", "un avion", "ours en peluche"];

let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord)

document.querySelector('.word').textContent = "What is my English equivalent?";

