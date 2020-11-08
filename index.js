

let score = 10;

let words = ["un chat", "un chien", "un lapin", "un oiseau", "une livre", "une pomme", "une assiette", "une tasse", "un frere", "une mere", "un pere", "une soeur", "un lit", "une toilette", 
"un crayon", "une fleur", "un train", "une voiture", "un velo", "un avion", "un ours en peluche", "un pere", "etre", "avoir", "nous", "dire", "aller", "il", "elle", "un t-shirt", "une jupe", "un pull",
"des pantalons", "une salle de jour", "une chambre", "une cuisine", "une salle de bains"];

let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord)
document.querySelector('.word').textContent = randomWord;


const displayCorrect = () => {
    document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('.message').textContent = "Correct Answer";
    score += 1;
    document.querySelector('.score').textContent = score;  
};

let french_english = [ 
    {"french": "un chat", "english": "cat"}, 
    {"french": "un chien", "english": "dog"},
    {"french": "un lapin", "english": "rabbit"}, 
    {"french": "un oiseau", "english": "bird"}, 
    {"french": "une livre", "english": "book"}, 
    {"french": "une pomme", "english": "apple"}, 
    {"french": "une assiette", "english": "plate"}, 
    {"french": "une tasse", "english": "cup"}, 
    {"french": "un frere", "english": "brother"}, 
    {"french": "un pere", "english": "father"}, 
    {"french": "une mere", "english": "mother"},  
    {"french": "une soeur", "english": "sister"}, 
    {"french": "un lit", "english": "bed"}, 
    {"french": "une toilette", "english": "toilet"}, 
    {"french": "un crayon", "english": "pencil"}, 
    {"french": "une fleur", "english": "flower"},
    {"french": "un train", "english": "train"}, 
    {"french": "une voiture", "english": "car"}, 
    {"french": "un velo", "english": "bike"}, 
    {"french": "un avion", "english": "plane"}, 
    {"french": "un ours en peluche", "english": "teddy"},
    {"french": "il", "english": "he"},
    {"french": "elle", "english": "she"},
    {"french": "nous", "english": "us"},
    {"french": "un pull", "english": "jumper"},
    {"french": "une jupe", "english": "skirt"},
    {"french": "des pantalons", "english": "trousers"},
    {"french": "un t-shirt", "english": "t-shirt"},
    {"french": "une salle de jour", "english": "living room"},
    {"french": "une cuisine", "english": "kitchen"},
    {"french": "une salle de bains", "english": "bathroom"},
    {"french": "une chambre", "english": "bedroom"},
    
    
]

document.querySelector('.word').textContent = randomWord;

document.querySelector('.score').textContent = score;

document.querySelector('.checkanswer').addEventListener('click', function() {
    let guess = document.querySelector('.guess').value;
    console.log(guess);
        if (score === 0) {
            document.querySelector('.message').textContent = "Game Over!";
        } else if (randomWord === "un chat" && guess === "cat" ){
          displayCorrect();
        } else if (randomWord === "un chien" && guess === "dog") {
          displayCorrect();
        } else if (randomWord == "un lapin" && guess === "rabbit") {
            displayCorrect();
        } else if (randomWord === "un oiseau" && guess === "bird") {
            displayCorrect();
        } else if (randomWord === "aller" && guess === "to go") {
            displayCorrect();
        } else if (randomWord === "etre" && guess === "to be") {
            displayCorrect();
        } else if (randomWord === "avoir" && guess === "to have") {
            displayCorrect();
        } else if (randomWord === "dire" && guess === "to say") {
            displayCorrect();
        } else if (randomWord === "une livre" && guess === "book") {
            displayCorrect();
        } else if (randomWord === "il" && guess === "he") {
            displayCorrect();
        } else if (randomWord === "elle" && guess === "she") {
            displayCorrect();
        } else if (randomWord === "nouse" && guess === "us") {
            displayCorrect();
         } else if (randomWord === "une pomme" && guess === "apple") {
            displayCorrect();
         } else if (randomWord === "une assiette" && guess === "plate") {
            displayCorrect();
        } else if (randomWord === "une tasse" && guess === "cup") {
            displayCorrect();
        } else if (randomWord === "un frere" && guess == "brother") {
            displayCorrect();
        } else if (randomWord === "une mere" && guess === "mother") {
            displayCorrect();
        } else if(randomWord === "un pere" && guess === "father") {
            displayCorrect();
        } else if(randomWord === "une soeur" && guess === "sister"){
            displayCorrect();
        } else if (randomWord === "un lit" && guess === "bed"){
            displayCorrect();
        } else if(randomWord ==="une toilette" && guess === "toilet"){
            displayCorrect();
        } else if(randomWord === "un crayon" && guess === "pencil"){;
           displayCorrect();
        } else if(randomWord === "une fleur" && guess === "flower"){;
           displayCorrect();
        } else if (randomWord === "un train" && guess === "train"){;
           displayCorrect();
        } else if(randomWord === "une voiture" && guess === "car"){;
           displayCorrect();
        } else if(randomWord === "un velo" && guess === "bike"){;
          displayCorrect();
        } else if(randomWord === "un avion" && guess === "plane"){;
          displayCorrect();
        } else if(randomWord === "un ours en peluche" && guess === "teddy"){
          displayCorrect();
        } else if(randomWord === "un t-shirt" && guess === "t-shirt"){
            displayCorrect();
        } else if(randomWord === "un pull" && guess === "jumper"){
            displayCorrect();
        } else if(randomWord === "une jupe" && guess === "skirt"){
            displayCorrect();
        } else if(randomWord === "des pantalons" && guess === "trousers"){
            displayCorrect();
        } else if(randomWord === "une chambre" && guess === "bedroom"){
            displayCorrect();
        } else if(randomWord === "une salle de bains" && guess === "bathroom"){
            displayCorrect();
        } else if(randomWord === "une salle de jour" && guess === "living room"){
            displayCorrect();
        } else if(randomWord === "une cuisine" && guess === "kitchen"){
            displayCorrect();
        } else {
            document.querySelector('.message').textContent = "Wrong Answer"
            score -= 1;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = "red";
          }
        }
    )


    document.querySelector('.next').addEventListener('click', function() {
      console.log('Next')
      if(score > 0) {
        randomWord = words[Math.floor(Math.random() * words.length)];
        document.querySelector('.word').textContent = randomWord;
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = "#A8577E";
        document.querySelector('.message').textContent = '';
      } else {
          document.querySelector('.message').textContent = "Game Over!";
      }
    });

    document.querySelector('.again').addEventListener('click', function() {
      randomWord = words[Math.floor(Math.random() * words.length)];
      score = 25;
      document.querySelector('body').style.backgroundColor = "#A8577E";
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    });

