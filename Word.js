var Letter=require("./Letter")
var score=10;
function Word(guessWord){
    var arry=[];
    
    arry=guessWord.split("");
    var letterArray=[];
    for (var i=0;i<arry.length;i++){
        var newLetter=new Letter(arry[i]);  
        letterArray.push(newLetter);
    }
    this.guessWord=guessWord;
    this.returnWord=function(userGuessWord){
        var arry2=[];
        for (var z=0;z<letterArray.length;z++)
        {
            
            arry2.push(letterArray[z].returnSymbol());
        };
        this.guessedWord=arry2.join(" ");
        console.log(this.guessedWord);
       
        inArray(userGuessWord,arry2,this.guessedWord,guessWord)
    };

    this.userGuess=function(input){
        for (var t=0;t<letterArray.length;t++)
        {
            letterArray[t].check(input)
        };
    };
}

function inArray(input,thisArray,value,value2)
{   
    
    var a=false;
    var count=thisArray.length;
    for(var i=0;i<count;i++)
    {
        if(thisArray[i]===input){ a=true;}
    }
    if(a===true){
        console.log("Correct!!!!!!!!!!!!!!!")
    }else{
        score--;
        console.log("Incorrect!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        console.log(score+" guesses Remaining")
    }
    if(score===0){
        console.log("You lose!!!!!!!!!!!!!!!!!!!!!!!!!")
        process.exit();
    }
    if(value.replace(/\s+/g, '')===value2){
        score=10;
    }
}


module.exports=Word;