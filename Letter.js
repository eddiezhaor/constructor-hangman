function Letter(character){
    this.character=character;
    this.guess=false;
    this.returnSymbol=function(){
        if(this.guess===false){
           return "_";
           
        }else{
           return character;
        }
    }
    this.check=function(userGuessWord){
        if(userGuessWord===this.character){
            this.guess=true;
        }
    }
}


module.exports=Letter;
