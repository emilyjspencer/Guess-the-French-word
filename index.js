

let score = 25;

let words = ["un chat", "un chien", "un lapin", "un oiseau", "une livre", "une pomme", "une assiette", "une tasse", "un frere", "une mere", "un mere", "une soeur", "un lit", "une toilette", 
"un crayon", "une fleur", "un train", "une voiture", "un velo", "un avion", "un ours en peluche"];

let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord)

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

document.querySelector('.word').textContent = randomWord;

document.querySelector('.checkanswer').addEventListener('click', function() {
    console.log('I was clicked!')
    document.querySelector('.test').textContent = "The Check Answer button was clicked"
})

document.querySelector('.checkanswer').addEventListener('click', function() {
    document.querySelector()
})

