

function pairwise(arr, arg) {
    //inspiration from hints
    var result = 0;
  for(var i = 0 ; i <arr.length; i++){
    //loop through the array with an outer value and an inner array skipping same values
    for(var j = 0; j <arr.length; j++){
      if(i === j){
        break;
     }
      if(arr[i] + arr[j] === arg){
        result += i + j;
        //delete both entries when you find a pair.
        delete arr[i];
        delete arr[j];
      } 
    }
  }
  return result;
}

console.log(pairwise([1,1,1], 2));

