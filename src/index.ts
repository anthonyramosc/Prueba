function longerword(mySentences : string) {
    const  words = mySentences.split(' ');

    let  longestWord = '';

    for (const word of  words) {

        if (word.length >  longestWord.length) {

            longestWord =  word;
        }

    }
return longestWord;

}

console.log(longerword("Quiero aprender a programar"))