

let score = 25;

let words = ["un chat", "un chien", "un lapin", "un oiseau", "une livre", "une pomme", "une assiette", "une tasse", "un frere", "une mere", "un pere", "une soeur", "un lit", "une toilette", 
"un crayon", "une fleur", "un train", "une voiture", "un velo", "un avion", "un ours en peluche"];

let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord)

let french_english = [ 
    {"un chat": "cat"}, 
    {"un chien": "dog"},
    {"un lapin": "rabbit"}, 
    {"un oiseau": "bird"}, 
    {"une livre": "book"}, 
    {"une pomme": "apple"}, 
    {"une assiette": "plate"}, 
    {"une tasse": "cup"}, 
    {"un frere": "brother"}, 
    {"un pere": "father"}, 
    {"une mere": "mother"},  
    {"une soeur": "sister"}, 
    {"un lit": "bed"}, 
    {"une toilette": "toilet"}, 
    {"un crayon": "pencil"}, 
    {"une fleur": "flower"},
    {"un train": "train"}, 
    {"une voiture": "car"}, 
    {"un velo": "bike"}, 
    {"un avion": "plane"}, 
    {"un ours en peluche": "teddy"} 
]

document.querySelector('.word').textContent = randomWord;


//document.querySelector('.checkanswer').addEventListener('click', function () {
  //  const guess = document.querySelector('.guess').value;
    //console.log(guess);
//});

document.querySelector('.score').textContent = score;

document.querySelector('.checkanswer').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    console.log(guess);
    
    for (let i = 0; i < french_english.length; i++) {
        console.log(french_english[i]);
       if(french_english[i].key === guess.value) {
           document.querySelector('.message').textContent = "Correct Answer";
           score += 1;
           document.querySelector('body').style.backgroundColor = '#60b347';
        } else {
            document.querySelector('.message').textContent = "Wrong Answer"
            score -= 1;
            document.querySelector('body').style.backgroundColor = "red";
        }
    }
})


document.querySelector('.next').addEventListener('click', function() {
    console.log('Next')
});

document.querySelector('.again').addEventListener('click', function() {
    score = score;
    document.querySelector('body').style.backgroundColor = "#B0E8F0";
});


