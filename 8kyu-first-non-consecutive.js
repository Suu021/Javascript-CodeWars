function firstNonConsecutive (arr) {
    let cont = arr[0]
    for (let pos in arr){
        if (arr[pos] != cont){
            return arr[pos]
        }
        cont++
    }
    if (arr[arr.length-1] == cont-1){
        return null
    }
}

console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]))
console.log(firstNonConsecutive([1,2,3,4,6,7,8]))