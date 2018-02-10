var Word=require("./Word");
var inquirer=require("inquirer");
var guessWord=["addition",    "adjustment",    "advertisement",    "after",    "again",    "against",    "agreement",    "air",    "all",    "almost",    "among",    "amount",    "amusement",    "and",    "angle",    "angry",    "animal",    "answer",    "ant",    "any",    "apparatus",    "apple",    "approval",    "arch",    "argument",    "arm",    "army",    "art",    "as",    "at",    "attack",    "attempt",    "attention",    "attraction",    "authority",    "automatic",    "awake",    "baby",    "back",    "bad",    "bag",    "balance",    "ball",    "band",    "base",    "basin",    "basket",    "bath",    "be",    "beautiful",    "because",    "bed",    "bee",    "before",    "behaviour",    "belief",    "bell",    "bent",    "berry",    "between",    "bird",    "birth",    "bit",    "bite",    "bitter",    "black",    "blade",    "blood",    "blow",    "blue",    "board",    "boat",    "body",    "boiling",    "bone",    "book",    "boot",    "bottle",    "box",    "boy",    "brain",    "brake",    "branch",    "brass",    "bread",    "breath",    "brick",    "bridge",    "bright",    "broken",    "brother",    "brown",    "brush",    "bucket",    "building",    "bulb",    "burn",    "burst",    "business",    "but",    "butter",    "button",    "by",    "cake",    "camera",    "canvas",    "card",    "care",    "carriage",    "cart",    "cat",    "cause",    "certain",    "chain",    "chalk",    "chance",    "change",    "cheap",    "cheese",    "chemical",    "chest",    "chief",    "chin",    "church",    "circle",    "clean",    "clear",    "clock",    "cloth",    "cloud",    "coal",    "coat",    "cold",    "collar",    "colour",    "comb",    "come",    "comfort",    "committee",    "common",    "company",    "comparison",    "competition",    "complete",    "complex",    "condition",    "connection",    "conscious",    "control",    "cook",    "copper",    "copy",    "cord",    "cork",    "cotton",    "cough",    "country",    "cover",    "cow",    "crack",    "credit",    "crime",    "cruel",    "crush",    "cry",    "cup",    "cup",    "current",    "curtain",    "curve",    "cushion",    "damage",    "danger",    "dark",    "daughter",    "day",    "dead",    "dear",    "death",    "debt",    "decision",    "deep",    "degree",    "delicate",    "dependent",    "design",    "desire",    "destruction",    "detail",    "development",    "different",    "digestion"];;


function start(){
    inquirer.prompt([
        {
            name:"guess",
            message:"Guess a letter! ",
            type:"input"
        }

    ]).then(function(user){
            var num=Math.floor(Math.random()*guessWord.length)
            var guessWord1=guessWord[num]
            var word=new Word(guessWord1);
            word.userGuess(user.guess)
            word.returnWord(user.guess);
            if(word.guessedWord.replace(/\s+/g, '')===word.guessWord){
                console.log("You got it right !Next Word!!!!!")

                start()
            }
            else{
                    keep(word)
                
            }
        }
    )
}

function keep(word){
    inquirer.prompt([
        {
            name:"guess",
            message:"Guess a letter! ",
            type:"input"
        }

    ]).then(function(user1){
           
            word.userGuess(user1.guess)
            word.returnWord(user1.guess);
            if(word.guessedWord.replace(/\s+/g, '')===word.guessWord){
                console.log("You got it right !Next Word!!!!!")

                start()
            }
            else{
                keep(word)
            }
        }
    )
}
start()