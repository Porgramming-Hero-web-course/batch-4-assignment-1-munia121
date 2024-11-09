function removeDuplicates(numbers : number[]) : number[] {
    return [...new Set(numbers)]
}

const newArray = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(newArray)