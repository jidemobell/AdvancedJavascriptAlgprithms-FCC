function permAlone(str) {
    var allPerms = permutation(str);
    
    var finalCombo = [];
    for (var i = 0; i < allPerms.length; i++) {
        var e = allPerms[i];
        
        if(arrayCheckey(e) != false){
            finalCombo.push(e.join(''));
        }
    }

    return finalCombo.length;
  }

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

function permutation(a){
    
      var res = [];
      for(var i=0; i<a.length; i++){
        var restA = a.slice(0,i).concat(a.slice(i+1));
        var rest = permutation( restA);
        if(rest.length === 0){
          res.push([a[i]]);
        }else{
          for(var j=0; j<rest.length; j++){
        res.push([a[i]].concat(rest[j]));
          }
        }
      }
    
      return res;
    }

    console.log(permAlone("abcdefa"));