function fibn (number) {
    var arr = new Array();
    for(let i = 0; i < number; i++) {
        if(i<2) {
            arr.push(i);
        } else {
            arr.push(Number(arr[i-2]) + Number(arr[i-1]));
        }
    }
    return arr;
}

function fibsRec(number, current = 0, arr = []) {
    if(number <= current) return arr;
    if(arr.length < 2) arr.push(current);
    else arr.push(Number(arr[current-2]) + Number(arr[current-1]));
    return fibsRec(number, ++current, arr);
}