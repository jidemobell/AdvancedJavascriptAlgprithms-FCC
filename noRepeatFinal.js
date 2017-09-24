function inArray(x,arr){                          
    return arr.indexOf(x) > -1;
}

function permAlone(str) {
    var test = str.split('');
    var combinations = [];
    var i=0;

//front permutation
    while(i < test.length) {
        var eachEntry = [];
        var j = 0;
        var e = test[i];
        var k = i;
        while(j < test.length){
            if(k > (test.length - 1)){
                k=0;
            }
            eachEntry.push(test[k]);
             k++;
            j++;
        }
        /*
        if(arrayCheckey(eachEntry)!= false){
            combinations.push(eachEntry.join(''));
        }*/
        
        i++;
    }

    //back permutation

  /*  var p = test.length - 1;
    
    while(p >= 0) {
        var eachEntry = [];
        var j = 0;
        var e = test[p];
        var k = p;
        while(j < test.length){
            if(k > (test.length - 1)){
                k=0;
            }
            eachEntry.push(test[k]);
            k++;
            j++;
        }
        if(arrayCheckey(eachEntry)!= false){
            combinations.push(eachEntry.join(''));
        }
       // combinations.push(eachEntry);
        p--;
    } */
    

    return combinations;
  }
  

console.log(permAlone("aab"));







function arrayCheckey(arr){
    var r = 0;
    var q = 0;
    var combination = [];
    var checker = [];
    while (q < arr.length) {
           if(q == 0 ){
               // console.log(eachEntry[q] + " at position 0");
                checker.push(arr[q]);
            }
            else if(q > 0){
                if(arr[q] != checker[r]){
                    checker.push(arr[q]);
                    r++;
                }else{
                  return false;
                }
            }
           
            q++;
        
        }
    return checker;
}
//console.log(combinations);
