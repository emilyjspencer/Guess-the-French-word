

let score = 25;

let words = ["un chat", "un chien", "un lapin", "un oiseau", "une livre", "une pomme", "une assiette", "une tasse", "un frere", "une mere", "un pere", "une soeur", "un lit", "une toilette", 
"un crayon", "une fleur", "un train", "une voiture", "un velo", "un avion", "un ours en peluche"];

let randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord)
document.querySelector('.word').textContent = randomWord;

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
    {"french": "un ours en peluche", "english": "teddy"} 
]

document.querySelector('.word').textContent = randomWord;

document.querySelector('.score').textContent = score;



document.querySelector('.checkanswer').addEventListener('click', function() {
    let guess = document.querySelector('.guess').value;
    console.log(guess);
    //for (let i = 0; i < french_english.length; i++) {
        //console.log(french_english[i]);
       //if(french_english["french"] === french_english["english"]) {
        if (randomWord === "un chat" && guess === "cat" ){
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
            

        } else if (randomWord === "un chien" && guess === "dog") {

              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
        } else if (randomWord == "un lapin" && guess === "rabbit") {
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
         } else if (randomWord === "un oiseau" && guess === "bird") {
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
         } else if (randomWord === "une livre" && guess === "book") {
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
         } else if (randomWord === "une pomme" && guess === "apple") {
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
         } else if (randomWord === "une assiette" && guess === "plate") {
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';

        } else if (randomWord === "une tasse" && guess === "cup") {
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
            } else if (randomWord === "un frere" && guess == "brother") {
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
              } else if (randomWord === "une mere" && guess === "mother") {
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
               } else if(randomWord === "un pere" && guess === "father") {
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
              } else if(randomWord === "une soeur" && guess === "sister"){
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
        } else if (randomWord === "un lit" && guess === "bed"){
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
    } else if(randomWord ==="une toilette" && guess === "toilet"){
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
 } else if(randomWord === "un crayon" && guess === "pencil"){;
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
 } else if(randomWord === "une fleur" && guess === "flower"){;
             document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
} else if (randomWord === "un train" && guess === "train"){;
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
} else if(randomWord === "une voiture" && guess === "car"){;
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
 } else if(randomWord === "un velo" && guess === "bike"){;
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
 } else if(randomWord === "un avion" && guess === "plane"){;
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
} else if(randomWord === "un ours en peluche" && guess === "teddy"){
              document.querySelector('.message').textContent = "Correct Answer";
              score += 1;
              document.querySelector('.score').textContent = score;
              document.querySelector('body').style.backgroundColor = '#60b347';
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
    randomWord = words[Math.floor(Math.random() * words.length)];
    document.querySelector('.word').textContent = randomWord;
    document.querySelector('.guess').value = '';
});

document.querySelector('.again').addEventListener('click', function() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    score = 25;
    document.querySelector('body').style.backgroundColor = "#B0E8F0";

    
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});

