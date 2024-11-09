function countWordOccurrences(sentence: string , word: string): number{
    const lowerSentence = sentence.toLowerCase()
    const lowerWord = word.toLowerCase()
    return lowerSentence.split(" ").filter(words => words ===lowerWord).length;
}
const result3 = countWordOccurrences("I love typescript", "typescript");
// console.log(result3)