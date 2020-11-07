

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


document.querySelector('.checkanswer').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    console.log(guess);
});

document.querySelector('.checkanswer').addEventListener('click', function() {
    
    for (let i = 0; i < french_english.length; i++) {
        if(french_english[i] === document.querySelector('.guess').value) {
            document.querySelector('.message').textContent = "Correct Answer";
            console.log(document.querySelector('.guess').target.value);
        }
    }
})


switch (randomWord) {
    case "un chat":
      english = "cat";
      break;
    case "un chien":
      english = "dog";
      break;
    case "un lapin":
       english = "rabbit";
      break;
    case "un oiseau":
      english = "bird";
      break;
    case "une livre":
      english = "book";
      break;
    case "une pomme":
      english = "apple";
      break;
    case "une assiette":
      english = "plate";
    case "une tasse":
      english = "cup";
    case "un frere":
      english = "brother";
    case "une mere":
      english = "mother";
    case "un pere":
      english = "father";
    case "une soeur":
      english = "sister";
    case "un lit":
      english = "bed";
    case "toilette":
      english = "toilet";
    case "un crayon":
      english = "pencil";
    case "une fleur":
      english = "flower";
    case "un train":
      english = "train";
    case "une voiture":
      english = "car";
    case "un velo":
      english = "bike";
    case "un avion":
      english = "plane";
    case "un ours en peluche":
      english = "teddy bear";
  }



