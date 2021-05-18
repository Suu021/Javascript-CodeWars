function spEng(sentence){
    //Search the word "english" in a phrase
        sentence = sentence.toLowerCase()
        if (sentence.includes('english')){
           return true
        }
        else{
           return false
       }
    }

console.log(spEng("abcEnglishdef"))