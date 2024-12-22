function mergeSort(array) {
    if(array.length <= 1) return array;
    let halfway = Math.floor(array.length / 2);
    let firstHalf = array.slice(0,halfway);
    let secondHalf = array.slice(halfway);
    let sortedLeft = mergeSort(firstHalf);
    let sortedRight = mergeSort(secondHalf);
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]) result.push(left.shift());
        else result.push(right.shift());
    }
    if(left.length) return result.concat(left)
    else return result.concat(right);
}