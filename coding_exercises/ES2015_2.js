function copyObject(obj){
    return Object.assign({}, obj);
}

function checkIfFinite(num){
    return Number.isFinite(num);
}

function areAllNumbersFinite(arr){
    return arr.every(Number.isFinite);
}

function convertArrayLikeObject(obj){
    return Array.from(obj);
}

function displayEvenArguments(...args){
 let evens =  args.filter(val => val % 2 === 0);
  return Array.from(evens);
}